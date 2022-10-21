import styled from "styled-components";

const linkColor = "#0079d3";
const errorColor = "#ea0027";

const fontFamily = "'IBM Plex Sans', sans-serif;";

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 280px;
  margin: 100px auto;
  display:  ${p => (p.secondScreen ? "none"  : "block")};
  width: 280px;
`;

export const Privacy = styled.span`
  color: ${linkColor};
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
  color: ${errorColor};
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

  transform: scale(1.19);
  div#singInDiv {
    width:100% !important;
    display: block !important;

    div{
      width:100% !important;
      border: none;

      div{
        width:100% !important;
        border: none;
      }
    }
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
    width: 100%;
    border-radius: 8px;
    background-color: #237df3;
    height: 47px;
    border-color: transparent;
    color: white;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
}


}
`;

export const OrHeader = styled.h2`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #93908e;
  line-height: 0.1em;
  margin: 20px 0;
  line-height: 0 !important;
  color: #93908e;
  font-size: 12px !important;

  span {
    background: #fff;
    padding: 0 10px;
  }
`;
