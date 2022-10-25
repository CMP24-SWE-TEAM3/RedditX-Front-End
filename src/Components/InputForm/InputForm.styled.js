import styled from "styled-components";

export const StyledSearcherInput = styled.input`
  border-radius: 22px;
  background-color: #f6f7f8;
  color: #333;
  font-size: 16px;
  border: 1px solid #edeff1;
  width: 100%;

  &:active, &:hover, &:focus {
    border-color: #0079d3;
    outline: none;
  }

  &::placeholder {
    font-size: 16px;
  }

  line-height: normal;

  white-space: nowrap;
  text-indent: 30px;
  padding: 15px;
`