import styled from "styled-components";
import cover from "Assets/web.jpg";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.background.primary};
  border: thin solid ${({theme}) => theme.lineColor.primary};
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 6%);
  //margin-bottom: 16px;
  //max-width: 100%;
  width: 312px;
  height: 262px;

  & .sub-but1 {
    color: ${({theme}) => theme.background.primary};
    border-color: ${({theme}) => theme.color.secondary};
    background-color: ${({theme}) => theme.color.secondary};
    font-family: Noto Sans, Arial, sans-serif;
    font-size: 12px;
    font-weight: 700;
    height: 32px;
    line-height: 17px;
    text-transform: unset;
    text-align: center;
    width: 95%;
    border-radius: 9999px;
    box-sizing: border-box;
    cursor: pointer;

  }

  & .sub-but2 {
    position: relative;
    color: ${({theme}) => theme.color.secondary};
    background-color: ${({theme}) => theme.background.primary};
    border: 1px solid ${({theme}) => theme.color.secondary};
    font-family: Noto Sans, Arial, sans-serif;
    font-size: 12px;
    font-weight: 700;
    height: 32px;
    line-height: 17px;
    text-transform: unset;
    text-align: center;
    width: 95%;
    border-radius: 9999px;
    box-sizing: border-box;
    cursor: pointer;
  }
  & .sub-but1:hover {
    background-color: #1484d6 !important;
  }

  & .sub-but1:active {
    background-color: #0079d3 !important;
  }

  & .sub-but2:hover {
    background-color: ${({theme}) => theme.background.hover_background};
    color: #1779d3;
  }


  & .cover {
    background-image: url(${cover});
    background-size: cover;
    background-position-y: center;
    background-position-x: center;
    background-repeat: no-repeat;
    border-radius: 3px 3px 0 0;
    height: 34px;
  }

  & .home {
    display: flex;
    width: fit-content;
    padding: 12px
  }

  & img {
    background-size: 40px 68px;
    height: 68px;
    width: 40px;
    position: relative;
  }

  & .word {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    display: inline-block;
    margin-left: 10px;
    margin-top: 30px;
    color: ${({theme}) => theme.color.primary};
  }

  & .fav-com {
    position: relative;
    margin-bottom: 8px;
    color: ${({theme}) => theme.color.primary};
    font-family: Noto Sans, Arial, sans-serif;
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
    word-wrap: break-word;
    overflow: hidden;
  }

  & hr {
    background-color: rgb(26 26 27 / 7%);
    border: none;
    height: 1px;
    margin: 0;
  }

  @media (max-width: 960px) {
    display: none;
  }
`

