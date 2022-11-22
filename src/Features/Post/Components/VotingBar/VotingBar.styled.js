import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: ${({ theme }) => theme.background.sideBarPost};
  padding: 5px;
  width: 7%;
  heigth: 100%;
`;

export const Up = styled.button`
  border: none;
  background-color: transparent;

  svg {
    color: ${(p) => (p.choosed ? ({ theme }) => theme.color.orange : "gray")};
  }

  &:hover {
    background-color: #e1e0e0 !important;

    svg {
      color: ${({ theme }) => theme.color.orange} !important;
    }
  }
`;

export const Down = styled.button`
  border: none;
  background-color: transparent;
  color: gray;
  svg {
    color: ${(p) => (p.choosed ? "#7193ff" : "gray")};
  }

  &:hover {
    background-color: #e1e0e0 !important;

    svg {
      color: #7193ff !important;
    }
  }
`;

export const Count = styled.div`
  color: ${(p) =>
    p.up
      ? ({ theme }) => theme.color.orange
      : p.down
      ? "#7193ff"
      : ({ theme }) => theme.color.primary};
  font-size: 13px;
  font-weight: 500;
`;
