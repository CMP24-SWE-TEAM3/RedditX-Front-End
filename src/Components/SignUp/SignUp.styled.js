import styled from "styled-components";
import LightTheme from "Theme/lightTheme";
import {Button} from "react-bootstrap";

export const SignUpStyled = styled(Button)`
  color: #1779d3;
  border-color: ${LightTheme.color.secondary};
  width: 118px;
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
  height: min-content;
`