import styled from "styled-components";

let greenColor = "#1fc132;";

export const Container = styled.div`
  height: 40px;
  width: 8px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-direction: column;
`;
export const Child = styled.div`
  ${(p) =>
    p.strength >= 9
      ? (greenColor = "#1fc132;")
      : p.strength >= 5
      ? (greenColor = "#e1c511;")
      : p.strength >= 3
      ? (greenColor = "#e5801b;")
      : (greenColor = "#e1001f;")};
  height: 5px;
  border-radius: ${(p) =>
    p.bottom ? "0   0 100% 100%" : p.top ? " 100% 100% 0   0" : "0 0 0 0"};

  background-color: ${(p) =>
    p.strength < 12 && p.number === 5
      ? "#d5d5d5;"
      : p.strength < 9 && p.number === 4
      ? "#d5d5d5;"
      : p.strength < 7 && p.number === 3
      ? "#d5d5d5;"
      : p.strength < 5 && p.number === 2
      ? "#d5d5d5;"
      : p.strength < 2 && p.number === 1
      ? "#d5d5d5;"
      : greenColor};
`;
