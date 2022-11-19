import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: #cccccc2b;
  padding: 5px;
  width: 7%;
  heigth: 100%;
`;

export const Up = styled.button`
  border: none;
  background-color: transparent;

  svg {
    color: ${(p) => (p.choosed ? "red" : "gray")};
  }

  &:hover {
    background-color: #e1e0e0 !important;

    svg {
      color: red !important;
    }
  }
`;

export const Down = styled.button`
  border: none;
  background-color: transparent;
  color: gray;
  svg {
    color: ${(p) => (p.choosed ? "#0000ff8a" : "gray")};
  }

  &:hover {
    background-color: #e1e0e0 !important;

    svg {
      color: #0000ff8a !important;
    }
  }
`;

export const Count = styled.div`
  color: ${(p) => (p.up ? "red" : p.down ? "#0000ff8a" : "black")};
  font-size: 13px;
  font-weight: 500;
`;
