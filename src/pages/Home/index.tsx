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

const newCycleFormValidationSchema = zod.object({
  taskName: zod.string().min(1, "inform a task"),
  taskMinutes: zod
    .number()
    .min(5, "The cycle must be at least 5 minutes.")
    .max(60, "The cycle must be a maximum of 60 minutes"),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function Home() {
  const { register, handleSubmit, watch } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      taskName: "",
      taskMinutes: 0,
    },
  });

  const task = watch("taskName");
  const isSubmitDisabled = !task;

  function handleCreateNewTask(data: NewCycleFormData) {
    console.log(data);
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
          <span>0</span>
          <span>0</span>
          <span>:</span>
          <span>0</span>
          <span>0</span>
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
