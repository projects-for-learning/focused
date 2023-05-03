import startCountdown from "../assets/sounds/startCountdown.wav";
import interruptedCountdown from "../assets/sounds/interruptedCountdown.wav";
import finishedCountdown from "../assets/sounds/finishedCycle.wav";

export function soundStartCountdown() {
  const audioStart = new Audio(startCountdown);
  audioStart.play();
}

export function soundInterruptedCycle() {
  const audioStart = new Audio(interruptedCountdown);
  audioStart.play();
}

export function soundFinishedCycle() {
  const audioFinished = new Audio(finishedCountdown);
  audioFinished.play();
}
