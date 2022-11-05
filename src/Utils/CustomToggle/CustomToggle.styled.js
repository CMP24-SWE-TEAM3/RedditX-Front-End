import styled from "styled-components";

export const AnchorToggle = styled.a`
  color: ${({theme}) => theme.color.primary};
  text-decoration: none;
  margin: 5px;
  background-color: white;
  display: flex;
  flex: 1 ;
  -webkit-flex: 1;
  -ms-flex: 1;
  max-width: 15%;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: space-between;
  align-items: center;
`