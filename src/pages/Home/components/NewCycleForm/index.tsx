import { FormContainer, InputCounter, InputTaskName } from "./styles";

export default function NewCycleForm() {
  return (
    <FormContainer>
      <label htmlFor="taskName">I will work in </label>
      <InputTaskName
        type="text"
        id="taskName"
        placeholder="your task"
        disabled={!!activeCycle}
        {...register("taskName")}
      />

      <label htmlFor="taskMinutes">during</label>
      <InputCounter
        type="number"
        id="taskMinutes"
        placeholder="00"
        min={1}
        max={60}
        step={5}
        disabled={!!activeCycle}
        {...register("taskMinutes", { valueAsNumber: true })}
      />
    </FormContainer>
  );
}
