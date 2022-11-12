import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const fontFamily = "'IBM Plex Sans', sans-serif";

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px auto 0;
  position: relative;
  width: 100%;
  background-image: url(https://www.redditstatic.com/desktop2x/img/confetti_background.png);
  height: 100%;
  min-width: 102%;
  position: absolute;
  top: 0;
  left: -4px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  .spinner-border {
    color: white;
  }
`;

export const AuthHeader = styled.h2`
  font-family: ${fontFamily};
  line-height: 24px;
  max-width: 280px;
  text-transform: none;
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 22px;
  margin: 10px 0;
  color: white;
`;
export const AuthParagraph = styled.div`
  color: white;
  font-family: Noto Sans, sans-serif;
  font-size: ${(p) => (p.identity ? "14px" : "12px")};
  font-weight: ${(p) => (p.identity ? "550" : "400")};
  line-height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
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
    transform: translateX(18px);
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

export const GlobalStyles = createGlobalStyle`
.modal-body {
    position: relative;
    flex: 1 1 auto;
    padding: 0;
}`;
