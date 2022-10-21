import styled from "styled-components";

const logInButtonColor = "#d93a00";
const logInButtonColorHovered = "#dc4a14";
const fontFamily = "'IBM Plex Sans', sans-serif;";

export const BaseButton = styled.button`
  line-height: 40px;
  background-color: ${logInButtonColor};
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-family: Noto Sans, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  border-radius: 999px;
  color: #fff;
  height: 40px;
  padding: 0 16px;
  font-family: ${fontFamily};
  text-transform: unset;
  margin-top: 8px;
  width: 100%;

  opacity: ${p => (p.valid ? "1" : "0.3")};

  cursor: ${p => (p.valid ? "pointer" : "default")};

  &:hover {
    background-color: ${p => (p.valid ? logInButtonColorHovered : logInButtonColor)};
  }
`;
