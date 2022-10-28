import styled from "styled-components";

const fontFamily = "'IBM Plex Sans', sans-serif;";

export const BaseButton = styled.button`
  line-height: 40px;
  background-color: ${(p) =>
    p.page
      ? ({ theme }) => theme.color.link
      : ({ theme }) => theme.color.orange};

  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-family: Noto Sans, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  border-radius: ${(p) => (p.page ? "5px" : "999px")};
  color: ${({ theme }) => theme.color.baseButtonColor};
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
          ? ({ theme }) => theme.color.logInButtonColorHovered
          : ({ theme }) => theme.color.orange
        : ({ theme }) => theme.color.logInBlueHovered};
  }
`;
