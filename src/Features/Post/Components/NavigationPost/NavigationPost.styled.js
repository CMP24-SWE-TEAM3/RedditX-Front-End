import styled from "styled-components";

// styles of heading
export const Header = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  margin: auto;
  max-width: 1128px;
  padding: 0 12px 0 32px;
  width: 100%;

  @media (min-width: 960px) {
    padding: 0 32px;
  }
  @media (max-width: 550px){
    padding: 0;
  }

  // content styles
  .content {
    align-items: center;
    display: -ms-flexbox;
    display: flex;
    flex: 1;
    max-width: calc(100% - 324px);
    width: 100%;
    
  }
`
// rate container
export const Rate = styled.div`
  align-items: center;;
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0 2px;


  // styles of up button and before
  .but-up {
    height: 24px;
    width: 24px;
    background: transparent;
    border: none;
    color: inherit;
    cursor: pointer;
    padding: initial;
  }

  :before {
    border-right: 1px solid #343536;
    content: "";
    display: inline-block;
    height: 16px;
    vertical-align: text-bottom;
    width: 0;
    margin-right: 8px;

  }

  // styles of down button and after
  .but-down {
    background: transparent;
    height: 24px;
    width: 24px;
    border: none;
    color: inherit;
    cursor: pointer;
    padding: initial;
  }

  :after {
    border-right: 1px solid #343536;
    content: "";
    display: inline-block;
    height: 16px;
    vertical-align: text-bottom;
    width: 0;
    margin: 0 8px;
  }


  // number of likes
  .score {
    line-height: 15px;
    margin: 0 1px;
    text-align: center;
    width: 32px;
    color: rgb(215, 218, 220);
    font-size: 12px;
    font-weight: 700;
    pointer-events: none;
    word-break: normal;
    padding-top: 8px;
  }
`
export const Arrow = styled.span
  `
      color: white;
      display: inline-block;
      overflow: hidden;
      height: 24px;
      width: 24px;
      font-size: 16px;
      line-height: 24px;
      position: relative;
    `

// styles of Gallery img element
export const Gallery = styled.span
  `
      color: #d7dadc;
      font-size: 16px;
      margin-right: 8px;
      @media (max-width: 550px){
        display:none;
      }
    `
export const Title = styled.div
  `
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: flex;
      min-width: 0;
      font-size: 14px;
      font-weight: 300;
      line-height: 18px;
      margin-right: 3px;

      h6 {
        display: inline-block;
        color: white;
        font-weight: inherit;
        margin-bottom: 0.2rem;
      }
      @media(max-width: 1070px){
        display:none;
      }
    `
// styles of category title
export const FlairTitle = styled.div
  `
      display: inline-flex;
      margin: 0;
      padding: 0;
      vertical-align: text-top;

      :first-child {
        display: inline-block;
      }

      a {
        text-decoration: inherit;
        text-decoration: inherit;
      }

      .text-flair {
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        border-radius: 2px;
        display: inline-block;
        margin-right: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        vertical-align: text-bottom;
        white-space: pre;
        word-break: normal;
        margin-left: 0;
        padding: 0 4px;
        background-color: rgb(0, 166, 165);
        color: rgb(255, 255, 255);
      }
      @media (max-width:550px){
        display: none;
      }
    `

export const CloseButtonContainer = styled.div
  `
      display: flex;
      -ms-flex-pack: end;
      justify-content: flex-end;
      margin-left: 12px;
      width: 312px;
      font-size: 12px;
      font-weight: 700;
      line-height: 16px;
    `
export const CloseButton = styled.button
  `
      background: transparent;
      color: #d7dadc;
      position: relative;
      border: 1px solid transparent;
      font-family: Noto Sans, Arial, sans-serif;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: unset;
      line-height: 16px;
      text-transform: unset;
      min-height: 24px;
      min-width: 24px;
      padding: 4px 8px;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      text-align: center;
      width: auto;
      align-items: baseline;

      i {
        display: inline-block;
        height: 16px;
        width: 16px;
        font-size: 20px;
        line-height: 16px;
        padding: 0 4px 0 0;
        margin-right: 4px;
      }
    `