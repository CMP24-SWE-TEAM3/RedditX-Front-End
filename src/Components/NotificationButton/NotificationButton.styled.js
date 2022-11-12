import styled from "styled-components";

export const Container = styled.div`
  //background-color: ${({theme}) => theme.background.primary};
  color: ${({theme}) => theme.color.muted};


  .popover {
    background-color: ${({theme}) => theme.background.primary};
    border-radius: 4px;
    box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
    //margin-top: 8px;
    overflow-y: unset;
    overflow: unset;
    width: 375px;
    max-width: 375px;
    // z-index: 100;
  }

  & .word {
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-right: 12px;
  }

  & .right-side {
    align-items: center;
    display: flex;
    overflow: hidden;
  }

  & .popover-header {
    background-color: ${({theme}) => theme.background.primary};
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    padding: 16px;
    border-bottom: none !important;
  }

  & .message {
    border-right: 1px solid ${({theme}) => theme.background.primary};
    padding-right: 8px;

    a {
      text-decoration: none;
      font-family: Noto Sans, Arial, sans-serif;
      font-size: 12px;
      line-height: 16px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: 600;
      color: ${({theme}) => theme.color.gray};

      :hover {
        text-decoration: none !important;
      }
    }
  }

  & button {
    //margin-left: 8px;
    background: transparent;
    border: none;
    color: inherit;
    cursor: pointer;
    padding: initial;

  }

  i {
    color: ${({theme}) => theme.color.gray};
    font-size: 20px;
    font-weight: 400;
    height: 20px;
    line-height: 20px;
    vertical-align: middle;
    width: 20px;
  }

  .setting {
    margin-left: 8px;
  }


  // body of notification
  .popover-body {
    //height: 77px;
    max-height: 250px;
    background-color: ${({theme}) => theme.background.primary};
    overflow: hidden;
    overflow-y: auto;
    padding: 0;
    transition: max-height .3s ease-out;
  }

  .pop {
    margin: 0 16px;
  }

  .content-i {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }

  .content {
    position: relative;


    img {
      border-radius: 50%;
      height: 32px;
      width: 32px;
      background-color: ${({theme}) => theme.background.hover_background};
      display: block;
      object-fit: cover;
    }
  }

  .content-a {
    display: flex;
    padding: 16px;
    text-decoration: none;
  }

  .span-info {
    flex: 1 0;
  }

  .a-span {
    padding-right: 8px;
    position: relative;
  }

  .child {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;
  }

  .sub-child {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }

  .info {
    font-size: 14px;
    line-height: 21px;
    font-family: Noto Sans, Arial, sans-serif;
    font-weight: 400;
    color: ${({theme}) => theme.color.primary};
  }

  .dot {
    font-size: 12px;
    font-weight: 400;
    margin: 0 5px;
    line-height: 16px;
    color: ${({theme}) => theme.color.gray};

    :hover {
      background-color: ${({theme}) => theme.background.post_background};
    }
  }

  .time {
    font-family: Noto Sans, Arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: ${({theme}) => theme.color.gray};
    line-height: 19px;
  }

  .info-child {
    font-family: Noto Sans, Arial, sans-serif;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    -webkit-box-orient: vertical;
    font-size: 14px;
    color: ${({theme}) => theme.color.gray};
    word-break: break-word;
    line-height: 18px;
    max-height: 54px;
    -webkit-line-clamp: 3;
  }

  // footer styles
  footer {
    align-items: center;
    background-color: ${({theme}) => theme.background.post_background};
    border-radius: 0 0 4px 4px;
    display: flex;
    height: 49px;
    justify-content: center;
    padding: 0 12px;

    a {
      font-size: 14px;
      font-weight: 700;
      letter-spacing: .5px;
      line-height: 32px;
      text-decoration: none;
      text-transform: uppercase;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #24a0ed;
    }
  }
`