import styled from "styled-components";
import LightTheme from "Theme/lightTheme";
import {Button} from "react-bootstrap";

export const LoginStyled = styled(Button)`
  color: white;
  border-color: ${LightTheme.color.secondary};
  background-color: ${LightTheme.color.secondary};
  width: 118px;
  margin: 15px 0 15px 0;
  &:hover {
    background-color: #1484d6 !important;
  }
  &:active {
    background-color: #0079d3 !important;
  }

  font-weight:bold;
`