import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 58px;
  display: flex;
  left: auto;
  //margin-bottom: 16px;
  padding: 8px;
  border-radius: 4px;
  //vertical-align: baseline;
  position: relative;
  background-color: ${({theme})=>theme.background.primary};
  @media only screen and (max-width: 961px) {
    width: 90%;
  }
`