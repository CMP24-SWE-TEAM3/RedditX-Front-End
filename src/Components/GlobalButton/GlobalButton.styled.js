import styled from "styled-components";
import LightTheme from "Theme/lightTheme";
export const GlobalButtonStyled = styled.button
    `
      background: none;
      border: none;
      outline: none;
      margin: 4px;
      width: 38px;
      height: 38px; 

      &:hover {
        background: #ededed;
      }

      color: ${LightTheme.color.primary};

    `