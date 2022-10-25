import styled from "styled-components";
import {IoIosLink} from "react-icons/io";
import LightTheme from "Theme/lightTheme";

export const IconStyled = styled(IoIosLink)`
  color: ${LightTheme.color.muted};
  display: flex;
`
export const LinkButtonStyled = styled.button
    `
      background: none;
      border:1px solid transparent;
      border-radius:4px;
      outline: none;
      margin: 4px;
      width: 38px;
      height: 38px;

      &:hover {
        background: #ededed;
      }
      color: ${LightTheme.color.primary};
    `