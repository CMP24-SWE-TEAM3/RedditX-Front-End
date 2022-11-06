import styled from "styled-components";

export const DropDownMenuStyled = styled.div`

  .dropdown-menu {
    background-color: ${({theme}) => theme.background.primary};
    border: 1px solid white;
    border-radius: 0 0 4px 4px;
    box-sizing: border-box;
    //transform: none !important;
    margin-top: -1px;
    height: 482px;
    //min-height: 100%;
    overflow: hidden scroll;
    position: fixed;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    left: 0;
    bottom: 0;
    right: 0;
    top: 48px;
    width: 270px;
  }

  .form-control {
    background-color: ${({theme}) => theme.background.post_background};
    border: 1px solid ${({theme}) => theme.color.secondary};
    color: ${({theme}) => theme.color.primary};
    height: 30px;
    margin: 16px 16px 0;
    outline: none;
    padding: 0 6px;
    box-sizing: border-box;
    border-radius: 0;
    width: calc(100% - 32px);
  }

  .form-control:focus {
    border-color: ${({theme}) => theme.color.secondary} !important;
    box-shadow: none;
  }
`