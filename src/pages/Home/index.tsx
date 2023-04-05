import { FormProvider, useForm } from "react-hook-form";
import {
  HomeContainer,
  StartCounterButton,
  StartCounterButtonContainer,
  InterruptedCounterButton,
} from "./styles";

import zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { differenceInSeconds } from "date-fns";
import NewCycleForm from "./components/NewCycleForm";
import { Countdown } from "./components/Countdown";

const newCycleFormValidationSchema = zod.object({
  taskName: zod.string().min(1, "inform a task"),
  taskMinutes: zod
    .number()
    .min(1, "The cycle must be at least 5 minutes.")
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
  const [cycles, setCycles] = useState<Cycle[]>([]);
  

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      taskName: "",
      taskMinutes: 0,
    },
  });

  const { register, handleSubmit, watch, reset } = newCycleForm

  const task = watch("taskName");
  const isSubmitDisabled = !task;

  function handleCreateNewTask(data: NewCycleFormData) {
    
  }

  function handleInterruptedCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() };
        } else {
          return cycle;
        }
      })
    );

    setActiveCycleId(null);
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
