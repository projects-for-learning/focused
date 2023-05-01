import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { cyclesReducers } from "../reducers/cycles/reducer";
import {
  addNewCycle,
  interruptCurrentCycle,
  markCurrentCycleFinished,
} from "../reducers/cycles/actions";
import { differenceInSeconds } from "date-fns";

interface CreateCycleData {
  task: string;
  minutes: number;
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
  const [cyclesState, dispatch] = useReducer(
    cyclesReducers,
    {
      cycles: [],
      activeCycleId: null,
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        "@focused:cycle-state-1.0.0"
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return initialState
    }
  );

  const { cycles, activeCycleId } = cyclesState;

  const activeCycle = activeCycleId
    ? cycles.find((cycle) => cycle.id === activeCycleId)
    : null;

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {

    if(activeCycle) {
      return differenceInSeconds(
        new Date(),
        new Date(activeCycle.startDate)
      );
    }

    return 0;
  });

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState);

    localStorage.setItem("@focused:cycle-state-1.0.0", stateJSON);
  }, [cyclesState]);

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
