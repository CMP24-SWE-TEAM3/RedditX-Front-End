import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-bottom: 16px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid ${({theme}) => theme.background.primary};
  //vertical-align: baseline;
  background-color: ${({theme})=>theme.background.primary};
  @media only screen and (max-width: 961px) {
    width: 100%;
  }
`