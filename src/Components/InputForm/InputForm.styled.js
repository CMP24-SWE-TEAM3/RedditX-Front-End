import styled from "styled-components";

export const StyledSearcherInput = styled.input`
  border-radius: 18px;
  background-color: ${({theme})=>theme.background.post_background};
  //background-color: #272729;
  //color: ${({theme})=>theme.lineColor.secondary};
  color:${({theme})=>theme.color.primary};
  font-size: 14px;
  border: 1px solid ${({theme})=>theme.background.primary};
  width: 100%;
  &:active, &:hover, &:focus {
    border-color: ${({theme})=>theme.color.secondary};
    outline: none;
  }

  &::placeholder {
    font-size: 14px;
    color: ${({theme})=>theme.lineColor.secondary};
  }

  line-height: normal;

  white-space: nowrap;
  text-indent: 30px;
  padding: 15px;
`