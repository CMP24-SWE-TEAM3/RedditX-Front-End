import styled from "styled-components";

const subColor = "#797b7d";
const blueValid = "#24a0ed";
const transition = "400ms ease all";



export const BackSpan = styled.span`
  margin-bottom: 25px;

  svg {
    width: 25px;
    height: 25px;
    color: ${subColor};
  }
`;


export const AuthContainerDiv = styled.span`
display:  ${p => (p.secondScreen ? "none"  : "block")};
`;



export const Group = styled.div`
  position: relative;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  input[type="password"] {
    letter-spacing: 0.3em;
  }

  


  span {
    position: absolute;
    right: 10%;
    transition: ${transition};
    color: ${blueValid};
  }
`;
