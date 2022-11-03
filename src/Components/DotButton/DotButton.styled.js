import styled from "styled-components";
export const Button = styled.button`
  display: inline-flex;
  position: relative;
  align-items: center;
  width: 36px;
  border: none;
  height: 38.4px;
  font-size: 14px;
  line-height: 17px;
  font-weight: 700;
  margin-right: 8px;
  border-radius: 20px;
  background-color: ${({theme}) => theme.background.primary};
  color: ${({theme}) => theme.color.secondary};

  &:hover {
    background-color: ${({theme}) => theme.background.muted};
  }

  & span{
    color: ${({theme}) => theme.color.primary};
    padding-left: 6px;
    font-weight: 700;
  }
  @media (max-width: 1010px){
    display: none;
  }

`


