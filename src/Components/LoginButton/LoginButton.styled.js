import styled from "styled-components";
import {Button} from "react-bootstrap";

export const LoginStyled = styled(Button)`
  color: ${({theme})=>theme.background.primary};
  border: none !important;
  background-color: ${({theme})=>theme.color.secondary};
  width: 120px;
  margin: 15px;
  height: 32px;
  padding:0 10px;
  &:hover {
    background-color: ${({theme})=>theme.background.hover_background_button_blue} !important;
    color: ${({theme})=>theme.background.primary};
    border:none !important;
  }
  &:active {
    background-color: ${({theme}) => theme.btnColor.primary} !important;
    color: ${({theme})=>theme.background.primary} !important;
  }
  :focus-visible{
    box-shadow: none;
    background: unset !important;
  }

  font-weight:bold;
`