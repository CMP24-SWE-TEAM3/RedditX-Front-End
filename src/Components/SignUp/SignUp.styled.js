import styled from "styled-components";
import {Button} from "react-bootstrap";

export const SignUpStyled = styled(Button)`
  //color: #1779d3;
  color:${({theme})=>theme.color.secondary};
  border-color: ${({theme})=>theme.color.secondary};
  width: 118px;
  height: 32px;
  padding: 0 15px;
  margin-left: 5%;
  font-size: 14px;

  &:hover {
    color:${({ theme }) => theme.background.hover_background_button_blue} !important;
    background-color: ${({theme})=>theme.borderColor.sideBtnHover};
    border-color: unset !important;
  }

  &:active {
    color: #1779d3 !important;
    background-color: #ebf4fc!important;
  }
  :focus-visible{
    background:none !important;
    box-shadow: none !important;
  }

  font-weight: bold;
  //height: min-content;
`