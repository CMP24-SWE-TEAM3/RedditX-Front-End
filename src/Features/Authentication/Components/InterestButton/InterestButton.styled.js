import styled from "styled-components";

const fontFamily = "'IBM Plex Sans', sans-serif;";

export const BaseButton = styled.button`
  line-height: 40px;
  background-color: ${(p) =>
    p.selected
      ? "#9c8282"
      : ({ theme }) => theme.color.mainInputBackgroundColor};

  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-family: Noto Sans, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  border-radius: ${(p) => (p.page ? "5px" : "999px")};
  color: ${(p) => (p.selected ? "white" : "black")};
  height: 40px;
  padding: 0 16px;
  font-family: ${fontFamily};
  text-transform: unset;
  margin: 5px 3px;
  width: fit-content;
  cursor: pointer;
  align-items: center;

  svg {
    margin-right: 5px;
  }
`;
