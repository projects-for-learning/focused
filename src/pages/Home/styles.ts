import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 0.5rem 1rem;
  margin-top: 10rem;
`;

const ButtonBase = styled.button`
  width: 20rem;
  padding: 0.8rem 0;
  border: 0;
  border-radius: 8px;
  color: ${(props) => props.theme["white"]};
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 3px;
  outline: 0;
  cursor: pointer;
  transition: background-color 0.1s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const StartCounterButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StartCounterButton = styled(ButtonBase)`
  background-color: ${(props) => props.theme["blue-300"]};
  border-bottom: 6px solid ${(props) => props.theme["blue-500"]};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme["blue-500"]};
    border-bottom: 6px solid ${(props) => props.theme["blue-300"]};
  }
`;

export const InterruptedCounterButton = styled(ButtonBase)`
  background-color: ${(props) => props.theme["red-500"]};
  border-bottom: 6px solid ${(props) => props.theme["red-700"]};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme["red-700"]};
    border-bottom: 6px solid ${(props) => props.theme["red-500"]};
  }
`;
