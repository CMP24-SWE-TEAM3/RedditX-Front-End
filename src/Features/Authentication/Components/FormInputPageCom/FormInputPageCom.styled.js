import styled, { css } from "styled-components";

const transition = "300ms ease all";
const fontFamily = "'IBM Plex Sans', sans-serif;";

const shrinkLabelStyles = css`
  top: -1px;
  transform: translateY(0);
  font-size: 8px;

  width: 130px;
  padding: 2px 0;

  span {
    display: none !important;
  }
`;

export const FormInputLabel = styled.label`
  color: ${({ theme }) => theme.color.initialLabelColor};
  font-size: 10px;
  font-weight: 700;
  position: absolute;
  pointer-events: none;
  left: 20px;
  top: 50%;
  transition: ${transition};
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  width: 130px;
  span {
    display: block !important;
  }

  ${({ shrink }) => shrink && shrinkLabelStyles};
`;

export const Input = styled.input`
  background: none;
  background-color: ${({ theme }) => theme.color.mainInputBackGroundColor};
  color: ${({ theme }) => theme.color.mainInputColor};
  border-radius: 5px;
  font-family: ${fontFamily};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  height: 46px;
  border: 1px solid
    ${(p) =>
      p.valid
        ? ({ theme }) => theme.color.blueValid
        : p.initialFocus
        ? ({ theme }) => theme.color.initialBorderColor
        : "red"};
  width: calc(100% - 0px);
  padding: 0px 20px;
  transition: ${transition};
  letter-spacing: 0em !important;

  &:focus {
    outline: none;
    background-color: white;
    border: 1px solid
      ${(p) =>
        p.valid
          ? ({ theme }) => theme.color.blueValid
          : p.initialFocus
          ? ({ theme }) => theme.color.borderColor
          : "red"};
  }
  &:hover {
    background-color: white;
    border: 1px solid
      ${(p) =>
        p.valid
          ? ({ theme }) => theme.color.blueValid
          : p.initialFocus
          ? ({ theme }) => theme.color.borderColor
          : "red"};
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles};
  }
  &:hover ~ ${FormInputLabel} {
    ${shrinkLabelStyles};
  }
`;

export const Group = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px 0;
  input[type="password"] {
    letter-spacing: 0.3em;
  }

  span {
    display: ${(p) => (p.valid ? "block" : "none")};
    position: absolute;
    right: 5%;
    transition: ${transition};
    color: ${({ theme }) => theme.color.blueValid};
  }
`;
