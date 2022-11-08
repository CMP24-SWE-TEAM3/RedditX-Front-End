import styled from "styled-components";

export const ImageButtonStyled = styled.button
    `
      border-radius: 4px;
      background-color: ${({theme}) => theme.background.primary};
      color: ${({theme}) => theme.color.primary};
      border: 1px solid ${({theme}) => theme.background.primary};

      &:hover {
        background: ${({theme}) => theme.background.post_background};
      }

      & i {
        color: ${({theme}) => theme.color.muted};
        height: 20px;
        width: 20px;
        font-size: 20px;
        line-height: 20px;
        margin: 2px;
        padding: 0;
        display: inline-block;
      }
    `