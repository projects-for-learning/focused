import styled from "styled-components";

export const HistoryContainer = styled.main`
  display: flex;
  flex: 1;
  padding: 3.5rem 1rem;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme["gray-100"]};
  }

  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: ${(props) => props.theme["blue-300"]} ${(props) => props.theme["blue-300"]};
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 2px;
    height: 6px;
    border-radius: 8px;
  }

  *::-webkit-scrollbar-track {
    background: ${(props) => props.theme["gray-600"]};
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme["blue-300"]};
    border-radius: 8px;
    border: 2px solid ${(props) => props.theme["blue-300"]};
  }
`;

export const HistoryList = styled.div`
  margin-top: 2rem;
  max-height: 70vh;
  flex: 1;
  overflow: auto;
  table {
    min-width: 800px;
    width: 100%;
    border-collapse: collapse;
    th {
      background-color: ${(props) => props.theme["gray-600"]};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme["gray-100"]};
      font-size: 0.875rem;
      line-height: 1.6;
      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }
      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }
    td {
      background-color: ${(props) => props.theme["gray-700"]};
      border-top: 4px solid ${(props) => props.theme["gray-800"]};
      padding: 0.8rem;
      font-size: 0.875rem;
      line-height: 1.6rem;
      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }
      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`;

const STATUS_COLORS = {
  yellow: "yellow-500",
  red: "red-500",
  blue: "blue-500",
} as const;

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS;
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${(props) =>
      props.theme[STATUS_COLORS[props.statusColor]]};
  }
`;
