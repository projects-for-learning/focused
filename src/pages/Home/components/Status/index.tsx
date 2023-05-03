import { StatusContainer } from "./styles";

interface StatusProps {
  task: string;
}

export function Status({ task }: StatusProps) {
  return (
    <StatusContainer>
      <span>You are focused on,</span>
      <span className="task_title"> {task}</span>
    </StatusContainer>
  );
}
