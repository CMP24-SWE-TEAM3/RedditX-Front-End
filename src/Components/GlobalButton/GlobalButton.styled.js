import styled from "styled-components";

export const GlobalButtonStyled = styled.button
    `
      background: none;
      border: none;
      outline: none;
      //margin: 4px;
      width: 38px;
      height: 38px;

      &:hover {
        background: ${({theme}) => theme.background.post_background};
      }

      color: ${({theme})=>theme.color.muted};
      

    `
export const ButtonsGroupStyled = styled.div
`
  //@media (max-width:790px){
  //  display:none;
  //}
`