import { Cycle } from "./reducer";

export enum ActionsType {
  ADD_NEW_CYCLE = "ADD_NEW_CYCLE",
  INTERRUPT_CURRENT_CYCLE = "INTERRUPT_CURRENT_CYCLE",
  MARK_CURRENT_CYCLE_FINISHED = "MARK_CURRENT_CYCLE_FINISHED",
}

export function addNewCycle(newCycle: Cycle) {
  return {
    type: ActionsType.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  };
}

export function interruptCurrentCycle() {
  return {
    type: ActionsType.INTERRUPT_CURRENT_CYCLE,
  };
}

export function markCurrentCycleFinished() {
  return {
    type: ActionsType.MARK_CURRENT_CYCLE_FINISHED,
  };
}
