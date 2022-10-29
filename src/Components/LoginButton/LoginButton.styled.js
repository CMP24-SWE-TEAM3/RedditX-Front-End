import styled from "styled-components";
import {Button} from "react-bootstrap";

export const LoginStyled = styled(Button)`
  color: ${({theme})=>theme.background.primary};
  border-color: ${({theme})=>theme.color.secondary};
  background-color: ${({theme})=>theme.color.secondary};
  width: 120px;
  margin: 15px;
  height: 32px;
  padding:0 10px;
  &:hover {
    background-color: #1484d6 !important;
  }
  &:active {
    background-color: #0079d3 !important;
  }

  font-weight:bold;
`