import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  InputTaskName,
  InputCounter,
  StartCounterButton
} from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label htmlFor="taskName">I will work in </label>
          <InputTaskName type="text" id="taskName" placeholder="your task" />

          <label htmlFor="taskMinutes">during</label>
          <InputCounter type="number" id="taskMinutes" />
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <span>:</span>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCounterButton>
          <button>start</button>
        </StartCounterButton>
      </form>
    </HomeContainer>
  );
}
