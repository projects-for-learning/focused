import styled from "styled-components";

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

export const InputTaskName = styled(InputBase)`
  flex: 1;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const InputCounter = styled(InputBase)`
  width: 90px;
`;
