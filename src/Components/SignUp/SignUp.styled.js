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
    color: #1779d3 !important;
    background-color: #f5fafd !important;
  }

  &:active {
    color: #1779d3 !important;
    background-color: #ebf4fc!important;
  }

  font-weight: bold;
  //height: min-content;
`