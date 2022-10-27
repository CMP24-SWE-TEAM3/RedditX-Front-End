import styled from "styled-components";

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

      color: ${({theme})=>theme.color.primary};
      

    `