import { ReactNode, createContext, useReducer, useState } from "react";
import { cyclesReducers } from "../reducers/cycles/reducer";
import { addNewCycle, interruptCurrentCycle, markCurrentCycleFinished } from "../reducers/cycles/actions";


interface CreateCycleData {
  task: string
  minutes: number
}
interface Cycle {
  id: string;
  task: string;
  minutes: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

interface CyclesContextProps {
  cycles: Cycle[];
  activeCycle: Cycle | null | undefined;
  amountSecondsPassed: number;
  createNewCycle: (cycle: CreateCycleData) => void;
  interruptedCycle: () => void;
  finishedCycle: () => void;
  setSecondsPassed: (second: number) => void;
}

interface CyclesContextProviderType {
  children: ReactNode;
}

export const CyclesContext = createContext({} as CyclesContextProps);

export const CyclesContextProvider = ({
  children,
}: CyclesContextProviderType) => {
  const [cyclesState, dispatch] = useReducer(cyclesReducers,
    {
      cycles: [],
      activeCycleId: null,
    }
  );

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const { cycles, activeCycleId } = cyclesState;

  const activeCycle = activeCycleId
    ? cycles.find((cycle) => cycle.id === activeCycleId)
    : null;

  function createNewCycle(data: CreateCycleData) {

    const id = String(new Date().getTime());

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutes: data.minutes,
      startDate: new Date(),
    };

    dispatch(addNewCycle(newCycle));
    setAmountSecondsPassed(0);
  }

  function interruptedCycle() {
    dispatch(interruptCurrentCycle());
  }

  function finishedCycle() {
    dispatch(markCurrentCycleFinished());
  }

  function setSecondsPassed(second: number) {
    setAmountSecondsPassed(second);
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        amountSecondsPassed,
        createNewCycle,
        interruptedCycle,
        finishedCycle,
        setSecondsPassed,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
};
