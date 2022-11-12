import styled from "styled-components";

export const Button = styled.button`
  display: inline-flex;
  position: relative;
  width: 68.66px;
  border: none;
  height: 32px;
  font-size: 14px;
  line-height: 17px;
  font-weight: 700;
  padding: 6px 8px;
  margin: auto 0 auto ;
  border-radius: 1.5em;
  background-color: ${({theme}) => theme.background.primary};
  color: ${({theme}) => theme.color.muted};

  &:hover {
    background-color: ${({theme}) => theme.background.muted};
  }

  & .word {
    color: ${({theme}) => theme.lineColor.muted};
    padding-left: 6px;
    font-weight: 700;
  }
  @media (max-width: 1010px){
    display: none;
  }

`


