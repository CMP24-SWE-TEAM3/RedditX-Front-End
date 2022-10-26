import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.background.primary};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  margin-bottom: 16px;
  padding: 10px 12px;
`;

export const InnerContainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;

  a.icon {
    display: inline-flex;
    text-decoration: none;
    text-transform: capitalize;
    margin-right: 8px;
    position: relative;
    border: 1px solid transparent;
    min-height: unset;
    min-width: unset;
    padding: 6px 8px;
    border-radius: 20px;
    font-family: "Noto Sans", Arial, sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: unset;
    line-height: 17px;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
    text-align: center;
    width: auto;
  }

  a.active {
    background-color: ${({ theme }) => theme.background.active};
    color: blue;

    .fire-icon {
      color: blue;
      fill: blue;
    }

    .fire-txt {
      color: blue;
    }
  }

  a:hover {
    background-color: #ececec;
    border-radius: 20px;
  }

  .fire-icon {
    display: inline-block;
    padding: 0 8px 0 0;
    height: 20px;
    width: 20px;
    font-size: 20px;
    line-height: 20px;
    font-weight: 400;
    flex: 0 0 auto;
    color: #878a8c;
    fill: #878a8c;
  }

  .fire-txt {
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 18px;
    max-height: 54px;
    display: flow-root;
    display: inline-box;
    line-clamp: 3;
    white-space: normal;
    box-orient: vertical;
    text-align: left;
    text-transform: unset;
    letter-spacing: unset;
    color: #878a8c;
  }
`;

export const Dots = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  box-sizing: border-box;

  :hover {
    background-color: #f6f7f8;
    border-radius: 20px;
  }

  div {
    align-items: center;
    border-radius: 4px;
    display: flex;
  }

  button {
    display: inline-block;
    background-color: transparent;
    border-radius: 20px;
    outline: none;
    padding: 5px;
    border: 1px solid transparent;
  }

  span {
    font-size: 20px;
    font-weight: 400;
    height: 10px;
    line-height: 20px;
    vertical-align: middle;
    color: #878a8c;
  }
`;
