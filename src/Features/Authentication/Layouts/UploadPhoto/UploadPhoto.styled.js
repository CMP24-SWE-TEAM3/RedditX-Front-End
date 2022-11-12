// Import styled
import styled from "styled-components";

const fontFamily = "'IBM Plex Sans', sans-serif";

export const RedditIcon = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  svg {
    transform: translateX(6px);
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
  text-align: center;
  color: ${({ theme }) => theme.color.authParagraphColor};
  font-family: Noto Sans, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${({ theme }) => theme.color.muted};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 95%;
  margin: 0px auto 0;
  position: relative;
  width: 95%;
`;
