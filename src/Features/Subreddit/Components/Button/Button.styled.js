import styled from "styled-components";

export const StyledButton = styled.div`
  display: flex;


  .width {
    width: 96px;
  }

  button {
    width: 100%;
    position: relative;
    background-color: ${({joined, theme})=>joined?theme.background.primary:theme.color.secondary}   ;
    border: ${({joined, theme})=>joined?`1px solid ${theme.color.secondary}`:"none"};
    color: ${({joined, theme})=>joined?theme.color.secondary:theme.background.primary};
    font-family: "Noto Sans", Arial, sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: unset;
    line-height: 17px;
    text-transform: unset;
    min-height: 32px;
    min-width: 32px;
    padding: 4px 16px;
    border-radius:100px;
  }

  button:hover{
    background-color:${({joined})=>joined?"#f4f9fd":"#1483d6"} ;
  }

`;
