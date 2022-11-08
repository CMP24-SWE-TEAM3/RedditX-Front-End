import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  margin-left: 24px;
  margin-top: 0;
  flex: 0 0 312px;
  width: 312px;

  @media (max-width: 960px) {
    display: none;
  }
`;

export const InnerContainer = styled.div`
  width: inherit;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
