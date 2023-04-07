import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0 1rem;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    a {
      text-decoration: none;
      color: ${(props) => props.theme["blue-500"]};
      font-size: 1rem;
      font-weight: 700;
      letter-spacing: 0.04rem;
      line-height: 0.685rem;
      transition: color 0.2s;

      &:hover {
        color: ${(props) => props.theme["blue-300"]};
      }
    }

    li {
      list-style-type: none;
    }
  }
`;
