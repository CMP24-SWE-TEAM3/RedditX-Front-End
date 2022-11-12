import styled from "styled-components";

export const StyledHeader = styled.header
    `
      justify-content: space-between;
      //position: sticky;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 49px;
      background-color: ${({theme}) => theme.background.primary};
      color: white;
      display: flex;
      padding: 0 20px;
      align-items: center;
      @media (max-width: 969px) {
        position: fixed;
      }

      .logged-out {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .search {
        display: flex;
        flex: 1;
      }
    `
export const StyledSeperator = styled.div
    `
      border-left: 1px solid silver;
      height: 75%;
      margin-left: 8px;
      @media(max-width: 990px){
        display: none;
      }
    `