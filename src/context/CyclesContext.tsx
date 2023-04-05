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
  activeCycleId: string | null
  amountSecondsPassed: number
  createNewCycle: (cycle: Cycle) => void
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

  function createNewCycle(data: Cycle) {
    const id = String(new Date().getTime());

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutes: data.minutes,
      startDate: new Date(),
    };

    setCycles((state) => [...state, newCycle]);
    setActiveCycleId(id);
    setAmountSecondsPassed(0);
  }

  return (
    <CyclesContext.Provider value={{ cycles, activeCycleId, amountSecondsPassed, createNewCycle }}>
      {children}
    </CyclesContext.Provider>
  );
};
