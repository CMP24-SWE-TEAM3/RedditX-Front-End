import styled from "styled-components";

export const Container = styled.div`
  min-width: 0;
  width: 640px;

  .create-post {
    width: 100%;
    height: 57.5px;
    padding: 8px;
    border: solid 0.75px ${({theme})=>theme.borderColor.secondary};
    margin-bottom: 16px;
    background-color: white;
  }

  @media (max-width:960px){
    width:95%;
    margin: auto;
  }
`;
