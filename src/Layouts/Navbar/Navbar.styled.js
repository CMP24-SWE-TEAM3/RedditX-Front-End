import styled from "styled-components";

export const StyledHeader = styled.header
    `
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      height: 49px;
      background-color: ${({theme})=>theme.background.primary};
      color: white;
      display: flex;
      padding: 0 20px;
      align-items: center;
      @media (max-width: 969px) {
        position: fixed;
      }
    `
export const StyledSeperator = styled.div
    `
      border-left: 1px solid silver;
      height: 75%;
      margin-left: 8px;
    `