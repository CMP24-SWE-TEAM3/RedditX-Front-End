import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  font-size: 12px;
`;

export const Members = styled.div`
  height: fit-content;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  div {
    font-size: 16px;
    font-weight: 500;
  }

  p {
    font-weight: 400;
    color: ${({ theme }) => theme.color.muted};
    font-size: 12px;
    display: inline-block;
    word-break: break-word;
    margin: 0;
  }
`;

export const Online = styled.div`
  height: fit-content;

  div {
    font-size: 16px;
    font-weight: 500;
    width: fit-content;
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
    display: inline-block;
    word-break: break-word;
    margin: 0;
    width: fit-content;
  }
`;

export const OnlineMembersContainer = styled.div`
  width: fit-content;
`;
