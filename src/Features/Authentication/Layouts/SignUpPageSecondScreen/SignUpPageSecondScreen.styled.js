import styled from "styled-components";

const transition = "400ms ease all";

const fontFamily = "'IBM Plex Sans', sans-serif;";

export const All = styled.div`
  display: ${(p) => (p.secondScreen ? "none" : "block")};
`;
export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 280px;
  margin: 0px auto 0;
  position: relative;
  display: ${(p) => (p.secondScreen ? "none" : "block")};
  width: 280px;
`;

export const BackSpan = styled.span`
  margin-bottom: 25px;
  position: absolute;
  top: -10%;

  svg {
    width: 25px;
    height: 25px;
    color: ${({ theme }) => theme.color.subColor};
  }
`;

export const AuthContainerDiv = styled.span`
  display: ${(p) => (p.secondScreen ? "none" : "block")};
`;

export const Group = styled.div`
  position: relative;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(p) => (p.secondScreen ? "350px" : "auto")};

  input[type="password"] {
    letter-spacing: 0.3em;
  }

  span {
    position: absolute;
    right: 5%;
    transition: ${transition};
    color: ${({ theme }) => theme.color.blueValid};
  }
`;

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Photo = styled.div`
  background-image: url(https://www.redditstatic.com/accountmanager/bbb584033aa89e39bad69436c504c9bd.png);
  width: 10%;
  height: 100vh;
  min-height: 430px;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const LogInContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;

  > div {
    margin: 0 0 0 20px;
  }
`;

export const Privacy = styled.span`
  color: ${({ theme }) => theme.color.link};
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
  color: ${({ theme }) => theme.color.authParagraphColor};
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
  
  margin-top: ${(p) => (p.valid ? "-35px" : "0")};
  color: ${(p) => (p.validColor ? ({ theme }) => theme.color.blueValid : ({ theme }) => theme.color.errorColor)};
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

  transform: scale(1.19);
  div#singInDiv {
    width:100% !important;
    display: none !important;

   
  }
  iframe {
    min-width:100%;
    border: none;
  }
  
  }
`;

export const SignInWithFacebook = styled.div`
display: flex;
justify-content: center;
width: 280px;


margin: 20px 0 5px 0;



span {
  width: 100%;
 
  button{
    transition: ${transition}
    position: relative;
    width: 100%;
    border-radius: 5px;
    background-color: white;
    height: 47px;
    border-color: ${({ theme }) => theme.color.signInWithFacebookColor};
    color:${({ theme }) => theme.color.signInWithFacebookColor};
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
        height: 60px;
        position: absolute;
        left: 1%;

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
export const FirstDiv = styled.div`
  min-height: calc(14vh - 20px);
  margin: 20px 0 0 20px;
`;
export const MidDiv = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: calc(69vh - 20px);
  padding: 20px 20px 0 20px;
  flex-wrap: wrap;
`;
export const LastDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: calc(14vh - 20px);
  padding: 0 20px 0 20px;
  background-color: ${({ theme }) => theme.color.mainInputBackGroundColor};
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;
export const BackButton = styled.button`
  border: none;
  background-color: transparent;
`;
export const RandomContainer = styled.div`
  p {
    color: ${({ theme }) => theme.color.link};
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.color.blueValid};
    }
  }
`;
export const Reload = styled.span`
  margin-left: 10px;
  font-size: 18px;
  cursor: pointer;
  color: ${({ theme }) => theme.color.blueValid};
`;

export const ReCAPTCHAContainer = styled.div`
  transform: translateX(-3%) scale(0.9);
  margin: 10px 0;
  max-width: 100%;
  display: ${(p) => (p.validEmail ? "block" : "none")};
`;
