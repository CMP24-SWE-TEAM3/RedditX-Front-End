import styled from "styled-components";

export const PostsPart = styled.div`
  @media (min-width: 960px) {
    width: 640px;
  }
  min-width: 0;
`;
export const Cards = styled.div`
  @media (min-width: 1100px) {
    display: flex;
  }
  flex: 0 0 312px;
  height: auto;
  margin-left: 24px;
  max-width: 312px;
  width: 312px;
  flex-direction: column;
  /* display: block; */
  display: none;
`;
export const Layout = styled.div`
  margin-bottom: -8px;
`;
