import { ReactNode, createContext, useState } from "react";

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
  createNewCycle: (cycle: Cycle) => void;
  interruptedCycle: () => void;
  finishedCycle: () => void;
  setSecondsPassed: (second: number) => void
}

interface CyclesContextProviderType {
  children: ReactNode;
}

export const CyclesContext = createContext({} as CyclesContextProps);

export const CyclesContextProvider = ({
  children,
}: CyclesContextProviderType) => {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const activeCycle = activeCycleId
    ? cycles.find((cycle) => cycle.id === activeCycleId)
    : null;

  function createNewCycle(data: Cycle) {
    // const id = String(new Date().getTime());

    const newCycle: Cycle = {
      id: data.id,
      task: data.task,
      minutes: data.minutes,
      startDate: new Date(),
    };

    setCycles((state) => [...state, newCycle]);
    setActiveCycleId(data.id);
    setAmountSecondsPassed(0);
  }

  function interruptedCycle() {
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

  function finishedCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() };
        } else {
          return cycle;
        }
      })
    );

    setActiveCycleId(null);
  }

  function setSecondsPassed(second: number) {
    setAmountSecondsPassed(second)
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
        setSecondsPassed
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
};
