import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({theme}) => theme.background.primary};
  border: thin solid ${({theme}) => theme.lineColor.primary};
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 6%);
  //width: 312px;
  height: 202px;
  margin-top: 16px;

  & .content {
    padding: 0;
    max-height: none;
  }

  & .menu-1 {
    border-bottom: 1px solid #e9ebed;
    display: flex;
    padding-top: 8px;
    padding-bottom: 8px;
    margin-left: 12px;
    margin-right: 12px;
  }

  & .sec {
    display: flex;
    flex-flow: column nowrap;
    width: 50%;
    padding: 0 4px;
    text-align: start;
  }

  & a {
    font-family: Noto Sans, Arial, sans-serif;
    font-size: 12px;
    font-weight: 400;
    color: ${({theme}) => theme.color.primary};
    line-height: 16px;
    display: inline-block;
    text-decoration: none;
    text-transform: capitalize;
    margin-top: 3px;
    margin-bottom: 3px;
  }

  & .inc {
    font-family: Noto Sans, Arial, sans-serif;
    font-size: 12px;
    font-weight: 400;
    color: ${({theme}) => theme.color.primary};
    line-height: 16px;
    display: flex;
    padding: 12px;
  }

  @media (max-width: 960px) {
    display: none;

  }
`
