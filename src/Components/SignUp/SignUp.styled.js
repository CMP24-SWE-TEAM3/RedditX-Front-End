import styled from "styled-components";
import LightTheme from "Theme/lightTheme";
import {Button} from "react-bootstrap";

export const SignUpStyled = styled(Button)`
  color: #1779d3;
  border-color: ${LightTheme.color.secondary};
  width: 118px;
  margin-left: 100px;
  font-size: 14px;

  &:hover, &:active ,&:focus,&:visited {
    color: #1779d3;
    background-color: #f5fafd;
  }

  font-weight: bold;
  height: min-content;
`