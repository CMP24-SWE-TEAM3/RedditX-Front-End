import styled from "styled-components";
import LightTheme from "Theme/lightTheme";
import {Button} from "react-bootstrap";

export const LoginStyled = styled(Button)`
  color: white;
  border-color: ${LightTheme.color.secondary};
  background-color: ${LightTheme.color.secondary};
  width: 118px;
  margin: 15px;
  &:hover {
    background-color: #1484d6;

  }

  font-weight:bold;
`