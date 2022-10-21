import styled, { css } from "styled-components";

const subColor = "#797b7d";
const mainInputColor = "black";
const borderColor = "#86888a";
const blueValid = "#24a0ed";
const transition = "400ms ease all";
const fontFamily = "'IBM Plex Sans', sans-serif;";


const shrinkLabelStyles = css`
  top: -1px;
  transform: translateY(0);
  font-size: 12px;
  font-weight: normal;
  padding: 2px 0;
  color: ${borderColor};
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: 550;
  position: absolute;
  pointer-events: none;
  left: 20px;
  top: 50%;
  transition: ${transition};
  transform: translateY(-50%);
  ${({ shrink }) => shrink && shrinkLabelStyles};
`;

export const Input = styled.input`
  background: none;
  background-color: #f6f7f8;
  color: ${mainInputColor};
  border-radius: 100px;
  font-family: ${fontFamily};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  height: 46px;
  border:1px solid ${p => (p.valid ? blueValid :p.initialFocus? "transparent" : "red")};
  width: calc(100% - 0px);
  padding: 0px 20px;
  transition: ${transition};


  &:focus {
    outline: none;
    border: 1px solid ${p => (p.valid ? blueValid :p.initialFocus? borderColor : "red")};
  }
  &:hover {
    border: 1px solid ${p => (p.valid ? blueValid :p.initialFocus? borderColor : "red")};
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
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  input[type="password"] {
    letter-spacing: 0.3em;
  }


  span {
    display: ${p => (p.valid ? "block" : "none")};
    position: absolute;
    right: 10%;
    transition: ${transition};
    color: ${blueValid};
  }
`;
