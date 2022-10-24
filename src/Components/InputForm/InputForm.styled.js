import styled from "styled-components";
import LightTheme from "Theme/lightTheme";
export const StyledSearcherInput = styled.input`
  border-radius: 22px;
  //border-color: transparent;
  background-color: #f6f7f8;
  border-width: 2px;
  border-style: solid;
  width: 100%;

  &:active, &:hover, &:focus {
    border-color: #0079d3;
    outline-color: ${LightTheme.color.link};;
  }
  
  &::placeholder {
    font-size: 16px;
  }
  line-height: normal;

  white-space: nowrap;
  text-indent: 30px;
  padding: 15px;
`