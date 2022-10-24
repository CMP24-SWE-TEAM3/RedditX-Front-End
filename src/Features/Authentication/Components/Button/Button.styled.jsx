import styled from "styled-components";

const logInButtonColor = "#d93a00";
const logInButtonColorHovered = "#dc4a14";
const logInBlue = "#0079d3";
const logInBlueHovered = "#3394dc";
const fontFamily = "'IBM Plex Sans', sans-serif;";

export const BaseButton = styled.button`
  line-height: 40px;
  background-color: ${(p) => (p.page ? logInBlue : logInButtonColor)};
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-family: Noto Sans, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  border-radius: ${(p) => (p.page ? "5px" : "999px")};
  color: #fff;
  height: 40px;
  padding: 0 16px;
  font-family: ${fontFamily};
  text-transform: unset;
  margin-top: 8px;
  width: 100%;

  opacity: ${(p) => (p.valid || p.page ? "1" : "0.3")};

  cursor: ${(p) => (p.valid || p.page ? "pointer" : "default")};

  &:hover {
    background-color: ${(p) =>
      !p.page
        ? p.valid
          ? logInButtonColorHovered
          : logInButtonColor
        : logInBlueHovered};
  }
`;
