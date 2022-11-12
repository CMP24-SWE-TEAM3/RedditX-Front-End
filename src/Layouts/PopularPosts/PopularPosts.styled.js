import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 58px;
  //left: auto;
  border-radius: 4px;
  //position: relative;
  background-color: ${({theme})=>theme.background.primary};
  @media only screen and (max-width: 961px) {
    width: 100%;
  }
  align-items: center;
  border: 1px solid ${({theme}) => theme.background.primary};
  box-sizing: border-box;
  flex-flow: row nowrap;
  justify-content: flex-start;
  margin-bottom: 16px;
  padding: 10px 12px;
`