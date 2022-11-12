import styled from "styled-components";
import cover from "Assets/Images/background.png";


export const Container = styled.div`
  background-color: ${({theme}) => theme.background.primary};
  border: thin solid ${({theme}) => theme.lineColor.primary};

  & .buts {
    margin-top: 12px;
  }

  & .out-fav {
    margin-bottom: 8px;
    position: relative;
  }

  & .sub-but1 {
    color: ${({theme}) => theme.background.primary};
    border-color: ${({theme}) => theme.color.secondary};
    background-color: ${({theme}) => theme.color.secondary};
    font-family: Noto Sans, Arial, sans-serif;
    font-size: 12px;
    font-weight: 700;
    height: 32px;
    line-height: 17px;
    border: none;
    text-transform: unset;
    text-align: center;
    width: 95%;
    border-radius: 9999px;
    box-sizing: border-box;
    cursor: pointer;

    :hover, :active {
      background-color: ${({theme}) => theme.background.hover_background_button_blue};
    }

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
  
  & .sub-but2:hover {
    background-color: ${({theme}) => theme.background.post_background};
    color: ${({theme}) => theme.color.secondary};
  }

  & .sub-but2:focus-visible {
    outline: none;

  }

  & .content {
    max-height: none;
    padding: 12px;
  }

  & .block-home {
    margin-left: 10px;
    margin-top: 30px;
    display: inline-block;
    vertical-align: middle;
  }

  & .cover {
    background-image: url(${cover});
    background-size: cover;
    background-position-y: center;
    background-position-x: center;
    background-repeat: no-repeat;
    border-radius: 3px 3px 0 0;
    height: 34px;
    margin: -12px -12px 10px;
  }

  & .home {
    display: flex;
    margin-top: -23px;
    align-items: center;
    margin-bottom: 8px;
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
    height: 1px;
    margin: 0;
  }

  @media (max-width: 960px) {
    display: none;
  }
`

