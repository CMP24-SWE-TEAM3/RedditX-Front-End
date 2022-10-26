import styled from "styled-components";

export const StyledButton = styled.div`
  display: flex;


  .width {
    width: 96px;
  }

  button {
    width: 100%;
    position: relative;
    background-color: #0079d3;
    border: none;
    color: #fff;
    fill: #fff;
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
    background-color: #1483d6;
  }

  /* button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 9999px;
    background: #fff;
    opacity: 0;
    font-family: "Noto Sans", Arial, sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: unset;
    line-height: 17px;
    text-transform: unset;
  } */
`;
