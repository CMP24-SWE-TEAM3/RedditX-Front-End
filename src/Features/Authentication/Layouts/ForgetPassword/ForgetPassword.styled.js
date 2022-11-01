import styled from "styled-components";

const fontFamily = "'IBM Plex Sans', sans-serif;";

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90%;
  margin: 0px auto 0;
  position: relative;
  display: "block";
  width: 350px;
`;

export const AuthContainerDiv = styled.span`
  display: "block")};
`;

export const Privacy = styled.span`
  color: ${({ theme }) => theme.color.link};
`;
export const AuthHeader = styled.h2`
  font-family: ${fontFamily};
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  max-width: 350px;
  text-transform: none;
`;
export const AuthParagraph = styled.div`
  color: ${({ theme }) => theme.color.authParagraphColor};
  font-family: Noto Sans, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 45%;
`;
export const ErrorParagraph = styled.p`
  color: ${({ theme }) => theme.color.errorColor};
  margin-top: ${(p) => (p.valid ? "-30px" : "0")};
  font-size: 12px;
  transition: all 0.2s ease-in-out;
  padding: 0 0 0 20px;

  @media (max-width: 330px) {
    margin-top: ${(p) => (p.valid ? "-35px" : "0")};
  }
`;

export const UserNameInput = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const OrHeader = styled.h2`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.orHeaderColor};
  line-height: 0.1em;
  margin: 30px 0;
  line-height: 0 !important;
  color: ${({ theme }) => theme.color.orHeaderColor};
  font-size: 12px !important;

  span {
    background: ${({ theme }) => theme.color.baseButtonColor};
    padding: 0 10px;
  }
`;
export const Forget = styled.span`
  font-size: 13px;

  span,
  button {
    padding: 0;

    font-weight: 700;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.color.link};
    font-family: ${fontFamily};
  }
`;

export const RedditIcon = styled.div``;
