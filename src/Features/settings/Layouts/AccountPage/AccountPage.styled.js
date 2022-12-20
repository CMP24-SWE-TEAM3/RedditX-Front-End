import styled from "styled-components";

const fontFamily = "'IBM Plex Sans', sans-serif;";

export const GoogleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Text = styled.div``;
export const Header = styled.h4`
  font-size: 16px;
  color: ${({ theme }) => theme.color.primary};

`;
export const Par = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.borderColor.primary};
`;

export const SignInWithGoogle = styled.div`
display: flex;
justify-content: center;
width: 280px;
margin: 20px 0 5px 0;
 
  button{
   
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
