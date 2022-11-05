import styled from "styled-components";
export const Container = styled.div`
  & a {
    margin-bottom: 0;
    border-bottom: thin solid ${({ theme }) => theme.lineColor.PostBorder};
    padding-bottom: 16px;
    border-radius: 4px 4px 0 0;
    padding-top: 16px;
    display: flex;
    flex-direction: column;
    margin-top: -1px;
    padding: 16px;
    color: inherit;
    text-decoration: inherit;
  }

  /* @media (max-width: 380px) { */
  & a {
    padding: 10px;
  }
  /* } */
  & .item {
    align-items: center;

    display: flex;

    justify-content: space-between;
  }
  @media (max-width: 380px) {
    & .item {
      display: flex;
      flex-direction: column;
    }
  }
  & .item img {
    background-color: #205493;
    font-size: 36px;
    height: 36px;
    max-height: 36px;
    max-width: 36px;
    overflow: hidden;
    width: 36px;
    line-height: normal;
    -ms-flex-negative: 0;
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
    font-weight: 500;
    line-height: 16px;
    color: ${({ theme }) => theme.color.titleText_of_link};
    font-weight: 700;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media (max-width: 380px) {
    & .info2 h6 {
      margin: auto;
      margin-bottom: 5px;
      margin-top: 5px;
    }
  }
  & .info2 h6:hover {
    text-decoration: underline;
  }
  & .info2 p {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: ${({ theme }) => theme.color.muted};
  }
  @media (max-width: 380px) {
    & .info2 p {
      margin: auto;
      margin-bottom: 5px;
    }
  }
  & .button {
    flex-shrink: 0;
    width: 88px;
  }

  & button {
    width: 100%;
    position: relative;
    background-color: ${({ theme }) => theme.background.active};
    border: 1px solid transparent;
    color: ${({ theme }) => theme.color.secondary};
    fill: ${({ theme }) => theme.color.secondary};
    font-family: Noto Sans, Arial, sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: unset;
    line-height: 17px;
    text-transform: unset;
    min-height: 32px;
    min-width: 32px;
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
    background-color: ${({ theme }) => theme.background.card_hover};
  }
`;
