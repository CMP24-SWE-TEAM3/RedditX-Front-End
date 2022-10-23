import styled from "styled-components";

export const StyledIcon = styled.img`
  height: 32px;
  margin: 8px 8px 8px 0;
  width: 32px;
  @media (max-width: 768px){
    height: 24px;
    margin: 4px 4px 4px 0;
    width: 25%;
  }
  

`
export const StyledTextLogo = styled.img`
  height: 18px;
  margin: 0 20px 0 0;
  width: 57px;
  @media only screen and (max-width: 768px) {
    width: 25%;
  }
`
export const StyledLink = styled.div`
 @media(max-width: 768px) {
   margin: 0 20px 0 0;
   width: 50%;
   flex-direction:  column;
  
} 
`
// export const StyledHeader = styled.header
//     `
//       position: fixed;
//       top: 0;
//       left: 0;
//       width: 100%;
//       height: 49px;
//       background-color: white;
//       color: white;
//       display: flex;
//       padding: 0 20px;
//       align-items: center;
//       box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
//       z-index: 10;
//     `