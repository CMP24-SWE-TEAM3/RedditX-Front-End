import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 58px;
  left: auto;
  padding: 8px;
  border-radius: 4px;
  position: relative;
  background-color: ${({theme})=>theme.background.primary};
  @media only screen and (max-width: 961px) {
    width: 100%;
  }
`