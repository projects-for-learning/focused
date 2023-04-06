import { FormProvider, useForm } from "react-hook-form";
import {
  HomeContainer,
  StartCounterButton,
  StartCounterButtonContainer,
  InterruptedCounterButton,
} from "./styles";

import zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect, useState } from "react";
import { differenceInSeconds } from "date-fns";
import NewCycleForm from "./components/NewCycleForm";
import { Countdown } from "./components/Countdown";
import { CyclesContext } from "../../context/CyclesContext";

const newCycleFormValidationSchema = zod.object({
  taskName: zod.string().min(1, "inform a task"),
  taskMinutes: zod
    .number()
    .min(5, "The cycle must be at least 5 minutes.")
    .max(60, "The cycle must be a maximum of 60 minutes"),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

interface Cycle {
  id: string;
  task: string;
  minutes: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

export function Home() {
  const { activeCycle, createNewCycle, interruptedCycle } = useContext(CyclesContext);

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      taskName: "",
      taskMinutes: 0,
    },
  });

  const { register, handleSubmit, watch, reset } = newCycleForm;

  const task = watch("taskName");
  const isSubmitDisabled = !task;

  function handleCreateNewTask(data: NewCycleFormData) {
    const id = String(new Date().getTime());

    const newCycle: Cycle = {
      id,
      task: data.taskName,
      minutes: data.taskMinutes,
      startDate: new Date(),
    };

    createNewCycle(newCycle);
  }

  function handleInterruptedCycle() {
    interruptedCycle()
  }

  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewTask)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        <StartCounterButtonContainer>
          {activeCycle ? (
            <InterruptedCounterButton onClick={handleInterruptedCycle}>
              interrupted
            </InterruptedCounterButton>
          ) : (
            <StartCounterButton type="submit" disabled={isSubmitDisabled}>
              start
            </StartCounterButton>
          )}
        </StartCounterButtonContainer>
      </form>
    </HomeContainer>
  );
}
