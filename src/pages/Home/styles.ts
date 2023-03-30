import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 0.5rem 1rem;
  margin-top: 10rem;
`;

const InputBase = styled.input`
  background: transparent;
  border: 0;
  border-bottom: 1px solid ${(props) => props.theme["gray-500"]};
  color: ${(props) => props.theme["gray-100"]};
  font-weight: bold;
  font-size: 1rem;
  padding-left: 0.2rem;

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme["blue-500"]};
  }
  &::placeholder {
    color: ${(props) => props.theme["gray-500"]};
  }

  @media (max-width: 500px) {
    display: flex;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  gap: 0.5rem;
  padding: 1rem 0;

  label {
    font-size: 1.1rem;
    line-height: 1rem;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

export const InputTaskName = styled(InputBase)`
  flex: 1;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const InputCounter = styled(InputBase)`
  width: 90px;
`;

export const CountdownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  padding: 0.5rem 0;

  background: rgba(255, 255, 255, 0.14);
  border-radius: 8px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.9px);
  -webkit-backdrop-filter: blur(5.9px);

  span {
    font-size: 8rem;
    padding: 0 0.4rem;
  }
`;

export const StartCounterButton = styled.div`
  display: flex;
  justify-content: center;

  button {
    width: 20rem;
    padding: 0.8rem 0;
    border: 0;
    border-bottom: 6px solid ${(props) => props.theme["blue-500"]};
    border-radius: 8px;
    background-color: ${(props) => props.theme["blue-300"]};
    color: ${(props) => props.theme["white"]};
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 3px;
    outline: 0;
    cursor: pointer;
    transition: background-color 0.1s;
    
    &:hover {
      background-color: ${(props) => props.theme["blue-500"]};
      border-bottom: 6px solid ${(props) => props.theme["blue-300"]};
    }
  }
`;
