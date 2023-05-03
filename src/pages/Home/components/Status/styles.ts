import styled from "styled-components";

export const StatusContainer = styled.div`
  width: 100%;
  padding: 1rem;
  border-radius: 9px;
  border-left: 0.5rem solid ${(props) => props.theme["green-300"]};
  background-color: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme.white};
  font-size: 1rem;
  transition: background 0.5s, border 0.5s;

  .task_title {
    font-weight: bold;
  }

  &:hover {
    border-left: 0.5rem solid ${(props) => props.theme["green-500"]};
    background-color: ${(props) => props.theme["green-300"]};
  }
`;
