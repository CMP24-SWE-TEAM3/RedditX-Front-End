import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Members = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  div {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }

  p {
    font-weight: 400;
    color: ${({ theme }) => theme.color.muted};
    font-size: 12px;
    line-height: 16px;
    display: inline-block;
    word-break: break-word;
    margin: 0;
  }
`;

export const Online = styled.div`
  div {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }

  div::before {
    content: "●";
    margin-right: 4px;
    color: #46d160;
  }

  p {
    font-weight: 400;
    color: ${({ theme }) => theme.color.muted};
    font-size: 12px;
    line-height: 16px;
    display: inline-block;
    word-break: break-word;
    margin: 0;
  }
`;
