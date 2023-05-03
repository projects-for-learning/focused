import styled from "styled-components";

export const CountdownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  padding: 2rem 0;

  background: rgba(255, 255, 255, 0.04);
  border-radius: 8px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.9px);
  -webkit-backdrop-filter: blur(5.9px);

  span {
    font-size: 8rem;
    padding: 0 0.4rem;
  }
`;