import styled from "styled-components";

export const AnchorToggle = styled.a`
  color: ${({theme}) => theme.color.primary};
  text-decoration: none;
  margin: 5px;
  //background-color: ${({theme})=> theme.background.primary};
  display: flex;
  flex: 1 ;
  -webkit-flex: 1;
  -ms-flex: 1;
  //max-width: 15%;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: space-around;
  justify-content: space-between;
  align-items: center;
  @media (max-width:1000px){
    display: inline-flex;
  }
`