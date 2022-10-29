import styled from "styled-components";


export const ProfileLogoStyled = styled.img`
  width: 150%;
  height:auto;
  margin: -6px -6px 0 -6px;
  min-width: 38px;
  
`
export const ProfileButtonStyled = styled.button`
  height: 49.4px;
  border: 1px solid transparent;
  border-radius: 50px;
  outline: none;
  margin: 2px;
  background-color: ${({theme})=>theme.background.search_bar_background};
  bottom: 8px;
  width: 49.4px;
  position: relative;
`