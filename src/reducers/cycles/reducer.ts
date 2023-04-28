import { ActionsType } from "./actions";

export interface Cycle {
  id: string;
  task: string;
  minutes: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

interface CycleState {
  cycles: Cycle[];
  activeCycleId: string | null;
}

export function cyclesReducers(state: CycleState, action: any) {
  switch (action.type) {
    case ActionsType.ADD_NEW_CYCLE:
      return {
        ...state,
        cycles: [...state.cycles, action.payload.newCycle],
        activeCycleId: action.payload.newCycle.id,
      };
    case ActionsType.INTERRUPT_CURRENT_CYCLE:
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleId) {
            return { ...cycle, interruptedDate: new Date() };
          } else {
            return cycle;
          }
        }),
        activeCycleId: null,
      };
    case ActionsType.MARK_CURRENT_CYCLE_FINISHED:
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleId) {
            return { ...cycle, finishedDate: new Date() };
          } else {
            return cycle;
          }
        }),
        activeCycleId: null,
      };

    default:
      return state;
  }
}
