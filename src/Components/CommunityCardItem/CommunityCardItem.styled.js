import styled from "styled-components";

export const Container = styled.div`
  
  & a {
    margin-bottom: 0;
      //border-bottom: thin solid ${({theme}) => theme.lineColor.PostBorder};
    border-radius: 4px 4px 0 0;
    //padding-top: 16px;
    display: flex;
    flex-direction: column;
    margin-top: -1px;
    padding: 16px;
    color: inherit;
    text-decoration: inherit;
  }

  & .item span {
    color: ${({theme}) => theme.color.primary};
    font-weight: 500;
    line-height: 18px;
  }

  .item .caret {
    color: rgb(70 209 96);
    font-size: 20px;
    font-weight: 400;
    height: 20px;
    line-height: 20px;
    vertical-align: middle;
    width: 20px;
    margin-left: 8px;
  }

  & .item {
    align-items: center;

    display: flex;

    justify-content: space-between;
  }

  & .item img {
    border: none;
    background-color: #205493;
    font-size: 36px;
    height: 36px;
    max-height: 36px;
    max-width: 36px;
    overflow: hidden;
    width: 36px;
    line-height: normal;
    //-ms-flex-negative: 0;
    //margin: 0 8px;
    flex-shrink: 0;
    border-radius: 100%;
    vertical-align: middle;
  }

  & .info {
    flex-grow: 1;
    padding: 0 8px;
    overflow: hidden;
    overflow-wrap: break-word;
  }

  & .info2 {
    display: flex;
    align-items: baseline;
    flex-direction: column;
  }

  & .info2 h6 {
    font-size: 12px;
    //font-weight: 500;
    line-height: 16px;
    color: ${({theme}) => theme.color.primary};
    font-weight: 700;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & .info2 h6:hover {
    text-decoration: none;
  }

  & .info2 p {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: ${({theme}) => theme.color.muted};
  }

  & .button {
    flex-shrink: 0;
    //width: 88px;
    border: none;
  }

  & button {
    position: relative;
    background-color: ${({theme}) => theme.color.secondary};
    border: 1px solid transparent;
    color: ${({theme}) => theme.background.primary};
    fill: ${({theme}) => theme.color.secondary};
    font-family: Noto Sans, Arial, sans-serif;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: unset;
    line-height: 17px;
    text-transform: unset;
    height: 24px;
    width: 56px;
    padding: 4px 16px;
    align-items: center;
    border-radius: 9999px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    text-align: center;
    cursor: pointer;
  }

  & button:hover {
    background-color: ${({theme}) => theme.background.hover_background_button_blue};
  }

  & .num {
    color: ${({theme}) => theme.color.primary};
    text-align: right;
    min-width: 20px;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    
  }
`