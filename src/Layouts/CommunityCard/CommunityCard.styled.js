import styled from "styled-components";
import web from 'Assets/Images/banner-background.png';

export const CommunityContainer = styled.div`
  & .cover {
    background-image: url(${web});
    color: black;
    height: 80px;
    background-position: 50%;
    text-align: left;
    background-repeat: no-repeat;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    position: relative
  }

  .filter {
    background: linear-gradient(0deg, rgba(0, 0, 0, .7) 0, transparent);
    width: 100%;
    height: 100%;;
  }

  & .sub-but {
    position: relative;
    background-color: ${({theme}) => theme.background.post_background};
    border: 1px solid transparent;
    color: ${({theme}) => theme.color.secondary};
    fill: ${({theme}) => theme.color.secondary};
    font-family: Noto Sans, Arial, sans-serif;
    font-size: 12px;
    font-weight: 700;
    //letter-spacing: unset;
    line-height: 17px;
    text-transform: unset;
    height: 24px;
    margin: 4px;
    text-align: center;
    width: fit-content;
    border-radius: 9999px;
    box-sizing: border-box;
    cursor: pointer;

    :hover {
      background-color: ${({theme}) => theme.lineColor.primary};
    }
  }

  & .row-but {
    display: flex;
    flex-flow: row wrap;
    justify-content: start;
    padding: 0 8px 12px;
  }

  background-color: ${({theme}) => theme.background.primary};
  border: thin solid ${({theme}) => theme.lineColor.primary};
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 6%);
  margin-bottom: 16px;

  //max-width: 100%;
  width: 310px;

  & .title {
    font-size: 16px;
    line-height: 20px;
    color: ${({theme}) => theme.color.muted};
    padding: 16px 16px 0;
    font-weight: 500;
  }

  & .more {
    font-size: 14px;
    line-height: 18px;
    color: ${({theme}) => theme.color.link};
    padding: 16px;
    font-weight: 500;
  }

  & .more a {
    font-weight: 500;
    text-decoration: none;
  }

  a {
    text-decoration: none;
  }

  p {
    margin: 0;
    padding: 0;
  }

  h6,
  a,
  h4,
  p {
    margin: 0;
    padding: 0;
  }

  & h2 {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    bottom: 8px;
    color: ${({theme}) => theme.color.primary};
    left: 16px;
    position: absolute;
  }

  & h2 a {
    color: ${({theme}) => theme.background.primary};
  }

  @media (max-width: 960px) {
    display: none;
  }

  & .view-all {
    color: ${({theme}) => theme.background.primary};
    border-color: ${({theme}) => theme.color.secondary};
    background-color: ${({theme}) => theme.color.secondary};
    width: 95%;
    height: 32px;
    position: relative;
    border: none;
    justify-content: center;
    border-radius: 9999px;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: unset;
    line-height: 17px;
    text-transform: unset;
    min-height: 32px;
    min-width: 32px;
    margin-bottom: 10px;

    :hover, :active {
      background-color: ${({theme}) => theme.background.hover_background_button_blue};
    }
  }

`