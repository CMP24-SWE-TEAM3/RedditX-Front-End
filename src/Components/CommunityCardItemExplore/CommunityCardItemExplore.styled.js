import styled from "styled-components";
export const ContainerAlibash = styled.div`
  & a {
    margin-bottom: 0 !important;
    /* border-bottom: thin solid ${({ theme }) =>
      theme.lineColor.PostBorder} !important; */
    /* padding-bottom: 16px !important; */
    border-radius: 4px 4px 0 0 !important;
    padding-top: 16px !important;
    display: flex !important;
    flex-direction: column !important;
    margin-top: -1px !important;
    /* padding: 16px !important; */
    color: inherit !important;
    text-decoration: inherit !important;
  }

  /* @media (max-width: 380px) { */
  & a {
    /* padding: 10px !important; */
  }
  /* } */
  & .item {
    align-items: center !important;

    display: flex !important;

    justify-content: space-between !important;
  }
  @media (max-width: 380px) {
    & .item {
      display: flex !important;
      flex-direction: column !important;
    }
  }
  & .item img {
    background-color: #205493 !important;
    font-size: 32px !important;
    height: 32px !important;
    max-height: 32px !important;
    max-width: 32px !important;
    overflow: hidden !important;
    width: 32px !important;
    line-height: normal !important;
    -ms-flex-negative: 0 !important;
    flex-shrink: 0 !important;
    border-radius: 100% !important;
    vertical-align: middle !important;
  }
  & .info {
    flex-grow: 1 !important;
    padding: 0 8px !important;
    overflow: hidden !important;
    overflow-wrap: break-word !important;
  }
  & .info2 {
    display: flex !important;
    align-items: baseline !important;
    flex-direction: column !important;
  }
  & .info2 div {
    font-size: 12px !important;
    font-weight: 500 !important;
    line-height: 16px !important;
    color: ${({ theme }) => theme.color.titleText_of_link} !important;
    font-weight: 500 !important;
    max-width: 100% !important;
    white-space: nowrap !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
  }
  @media (max-width: 380px) {
    & .info2 div {
      margin: auto !important;
      margin-bottom: 5px !important;
      margin-top: 5px !important;
    }
  }
  & .info2 div:hover {
    text-decoration: underline !important;
  }
  & .info2 p {
    font-size: 12px !important;
    font-weight: 400 !important;
    line-height: 16px !important;
    color: ${({ theme }) => theme.color.muted} !important;
  }
  @media (max-width: 380px) {
    & .info2 p {
      margin: auto !important;
      margin-bottom: 5px !important;
    }
  }
  /* & .button {
    flex-shrink: 0 !important;
    width: 88px !important;
  } */

  & button {
    transition: 0.3s !important;
    color: ${({ theme }) => theme.color.secondary} !important;
    fill: ${({ theme }) => theme.color.secondary} !important;
    padding-bottom: 0 !important;
    padding-top: 2px !important;
    width: auto !important;
    flex: 0 0 auto !important;
    margin-left: -9px !important;
    min-width: 52px !important;
    font-family: Noto Sans, Arial, sans-serif !important;
    font-size: 14px !important;
    font-weight: 700 !important;
    letter-spacing: unset !important;
    line-height: 17px !important;
    text-transform: unset !important;
    min-height: 32px !important;
    padding: 4px 16px !important;
    position: relative !important;
    border: 1px solid transparent !important;
    align-items: center !important;
    border-radius: 9999px !important;
    box-sizing: border-box !important;
    display: flex !important;
    justify-content: center !important;
    text-align: center !important;
    background: transparent !important;
  }

  & button:hover {
    background-color: ${({ theme }) => theme.background.card_hover} !important;
  }
`;
