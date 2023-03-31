import { useForm } from "react-hook-form";
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  InputTaskName,
  InputCounter,
  StartCounterButton,
} from "./styles";

import zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

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
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)


  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      taskName: "",
      taskMinutes: 0,
    },
  });


  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

  const totalSeconds = activeCycle ? activeCycle.minutes * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  const task = watch("taskName");
  const isSubmitDisabled = !task;

  function handleCreateNewTask(data: NewCycleFormData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.taskName,
      minutes: data.taskMinutes,
    };

    setCycles((state) => [...state, newCycle]);
    setActiveCycleId(id)

    reset();
  }

  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewTask)}>
        <FormContainer>
          <label htmlFor="taskName">I will work in </label>
          <InputTaskName
            type="text"
            id="taskName"
            placeholder="your task"
            {...register("taskName")}
          />

          <label htmlFor="taskMinutes">during</label>
          <InputCounter
            type="number"
            id="taskMinutes"
            placeholder="00"
            min={5}
            max={60}
            step={5}
            {...register("taskMinutes", { valueAsNumber: true })}
          />
        </FormContainer>

        <CountdownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <span>:</span>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountdownContainer>

        <StartCounterButton>
          <button type="submit" disabled={isSubmitDisabled}>
            start
          </button>
        </StartCounterButton>
      </form>
    </HomeContainer>
  );
}
