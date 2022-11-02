import styled from "styled-components";






const transition = "300ms ease all";

const fontFamily = "'IBM Plex Sans', sans-serif;";

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 280px;
  margin: 0px auto 0;
  position: relative;
  display: ${(p) => (p.userNameScreen ? "none" : "block")};
  width: 280px;
`;

export const AuthContainerDiv = styled.span`
  display: ${(p) => (p.userNameScreen ? "none" : "block")};
`;

export const Privacy = styled.span`
  color:  ${({ theme }) => theme.color.link};
`;
export const AuthHeader = styled.h2`
  font-family: ${fontFamily};
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  max-width: 280px;
  text-transform: none;
`;
export const AuthParagraph = styled.div`
  color: #1a1a1b;
  font-family: Noto Sans, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ErrorParagraph = styled.p`
  color: ${({ theme }) => theme.color.errorColor};
  margin-top: ${(p) => (p.valid ? "-30px" : "0")};
  font-size: 12px;
  transition: all 0.2s ease-in-out;
  padding: 0 0 0 20px;
`;

export const UserNameInput = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SignInWithGoogle = styled.div`
display: flex;
justify-content: center;
width: 280px;
margin: 20px 0 5px 0;
 
  button{
    transition: ${transition}
    position: relative;
    width: 100%;
    border-radius: 5px;
    background-color: white;
    height: 47px;
    border-color: ${({ theme }) => theme.color.signInWithFacebookColor};
    color: ${({ theme }) => theme.color.signInWithFacebookColor};
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    outline: none;
    padding: 0 0 0 20px;

    svg{
      
      width: 40px;
      height: 40px;
      position: absolute;
      left: 1%;
      border-radius: 6px;

        path{
          color: ${({ theme }) => theme.color.signInWithFacebookColor};
        }

    }


    &:hover {
      background-color: ${({ theme }) => theme.color.signInWithFacebookColor};
      color: white;
      border: none;
      path{
        color: white;
      }

      svg {
        background-color: white;
      }
  }
}


}
`;

export const SignInWithFacebook = styled.div`
display: flex;
justify-content: center;
width: 280px;
margin: 20px 0 5px 0;
 
  button{
    transition: ${transition}
    position: relative;
    width: 100%;
    border-radius: 5px;
    background-color: white;
    height: 47px;
    border-color: ${({ theme }) => theme.color.signInWithFacebookColor};
    color: ${({ theme }) => theme.color.signInWithFacebookColor};
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    outline: none;
    padding: 0 0 0 20px;

    svg{
      
      width: 40px;
      height: 40px;
      position: absolute;
      left: 1%;
      border-radius: 6px;

        path{
          color: ${({ theme }) => theme.color.signInWithFacebookColor};
        }

    }


    &:hover {
      background-color: ${({ theme }) => theme.color.signInWithFacebookColor};
      color: white;
      border: none;
      path{
        color: white;
      }

      
  }
}


}
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
  font-size: 12px;

  button {
    padding: 0;
    font-weight: 700;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.color.link};
    font-family: ${fontFamily};
  }
`;
