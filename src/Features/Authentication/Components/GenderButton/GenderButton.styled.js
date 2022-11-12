import styled from "styled-components";

const fontFamily = "'IBM Plex Sans', sans-serif;";

export const BaseButton = styled.button`
  line-height: 40px;
  background-color: ${({ theme }) => theme.color.mainInputBackGroundColor};

  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-family: Noto Sans, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  border-radius: ${(p) => (p.page ? "5px" : "999px")};
  color: black;
  height: 40px;
  padding: 0 16px;
  font-family: ${fontFamily};
  text-transform: unset;
  margin-top: 8px;
  width: 100%;

  

  cursor: pointer;

  &:hover {
    background-color: white;
    border: 1px solid black;
  }
`;
