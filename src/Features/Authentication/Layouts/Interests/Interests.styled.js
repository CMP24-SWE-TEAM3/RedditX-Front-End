import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const fontFamily = "'IBM Plex Sans', sans-serif";

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 95%;
  margin: 0px auto 0;
  position: relative;
  width: 95%;
`;

export const AuthHeader = styled.h2`
  font-family: ${fontFamily};
  line-height: 24px;
  max-width: 280px;
  text-transform: none;
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 24px;
  margin: 10px 0;
  transform: translateX(22px);
`;
export const AuthParagraph = styled.div`
  color: ${({ theme }) => theme.color.authParagraphColor};
  font-family: Noto Sans, sans-serif;
  font-size: ${(p) => (p.identity ? "14px" : "12px")};
  font-weight: ${(p) => (p.identity ? "550" : "400")};
  line-height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

export const Privacy = styled.span`
  color: ${({ theme }) => theme.color.link};
`;

export const RedditIcon = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  svg {
    transform: translateX(-10px);
  }
`;

export const Upper = styled.div`
  display: flex;
  justify-content: center;

  span {
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
  }
`;

export const Skip = styled.span``;

export const InterestsContainer = styled.div`
  height: 335px;
  display: flex;
  flex-wrap: wrap;
  overflow: scroll;
  overflow-x: hidden;
`;

export const GlobalStyles = createGlobalStyle`
    /* width */
::-webkit-scrollbar {
    width: 10px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }`;
