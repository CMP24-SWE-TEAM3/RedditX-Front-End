import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Photo = styled.div`
  background-image: url(https://www.redditstatic.com/accountmanager/bbb584033aa89e39bad69436c504c9bd.png);
  width: 156px;
  height: 100vh;
  min-height: 430px;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const LogInContainer = styled.div`
 width: calc(100% - 156px);
 display:flex;
 align-items: center;

 >div {
    margin:0 0 0 20px;
 }
`;


