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
    cycles: Cycle[]
}

interface CyclesContextProviderType {
  children: ReactNode;
}

export const CyclesContext = createContext({} as CyclesContextProps);

export const CyclesContextProvider = ({
  children,
}: CyclesContextProviderType) => {

  const [cycles, setCycles] = useState<Cycle[]>([]);

  

  return ( 
    <CyclesContext.Provider value={{cycles}}>
        {children}
    </CyclesContext.Provider>
  )
};
