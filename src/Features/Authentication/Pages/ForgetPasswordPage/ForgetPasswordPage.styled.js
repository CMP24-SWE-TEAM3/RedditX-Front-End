import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 330px) {
    align-items: center;
    margin: 50px auto;
  }
`;

export const Photo = styled.div`
  background-image: url(https://www.redditstatic.com/accountmanager/bbb584033aa89e39bad69436c504c9bd.png);
  width: 10%;
  height: 100vh;
  min-height: 430px;
  background-repeat: no-repeat;
  background-size: cover;


  @media (max-width: 330px) {
    display: none;
    padding:20px;
  }
`;

export const LogInContainer = styled.div`
 width: 90%;
 display:flex;
 align-items: center;

 >div {
    margin:0 0 0 20px;

    @media (max-width: 330px) {
      margin: auto;
    }
 }

 @media (max-width: 330px) {
  width: 100%;
  margin: auto;
}
`;



