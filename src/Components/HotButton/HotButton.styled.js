import styled from "styled-components";
export const Button = styled.button`
  display: inline-flex;
  position: relative;
  width: 70px;
  height: 32px;
  font-size: 14px;
  border: none;
  line-height: 17px;
  font-weight: 700;
  padding: 6px 8px;
  margin-right: 8px;
  border-radius: 1.5em;
  background-color: ${({theme}) => theme.background.post_background};
  color: ${({theme}) => theme.color.secondary};

  &:hover {
    background-color: ${({theme}) => theme.background.muted};
  }

  & .word{
  color: ${({theme}) => theme.color.secondary};
    padding-left: 6px;
    font-weight: 700;
  }

`


