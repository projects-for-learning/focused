import { useFormContext } from "react-hook-form";
import { FormContainer, InputCounter, InputTaskName } from "./styles";
import { useContext } from "react";
import { CyclesContext } from "../../../../context/CyclesContext";

export default function NewCycleForm() {
  const { register } = useFormContext();

  const { activeCycle } = useContext(CyclesContext);

  return (
    <FormContainer>
      <label htmlFor="taskName">I will work in </label>
      <InputTaskName
        type="text"
        id="taskName"
        placeholder="your task"
        disabled={!!activeCycle}
        {...register("task")}
      />

      <label htmlFor="taskMinutes">during</label>
      <InputCounter
        type="number"
        id="taskMinutes"
        placeholder="00"
        min={5}
        max={60}
        step={5}
        disabled={!!activeCycle}
        {...register("minutes", { valueAsNumber: true })}
      />
    </FormContainer>
  );
}
