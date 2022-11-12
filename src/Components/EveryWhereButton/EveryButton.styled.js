import styled from "styled-components";
import {DropdownButton} from "react-bootstrap";

export const Container = styled(DropdownButton)`

  & .btn-primary {
    width: 132.21px;
    height: 32px;
    border-radius: 20px;
    border-color: ${({theme}) => theme.background.primary};
    font-size: 14px;
    padding: 6px 8px;
    line-height: 17px;
    font-weight: 700;
    background: ${({theme}) => theme.background.post_background};
    color: ${({theme}) => theme.color.secondary};

    & select {
      appearance: none !important;
      -moz-appearance: none !important;
      -webkit-appearance: none !important;
      background-color: transparent !important;
    }

    // &:hover {
      //   background-color: ${({theme}) => theme.background.muted};
    // }
  }

  & .btn:focus-visible {
    box-shadow: none;
  }

  & .btn:first-child:active {
    background: ${({theme}) => theme.background.post_background} !important;
    color: ${({theme}) => theme.color.secondary} !important;
    border-color: ${({theme}) => theme.background.primary} !important;
  }

  & .dropdown-menu {
    margin-top: -5px;
    max-height: 300px;
    overflow-y: scroll;
    overflow-x: hidden;
    width: 138px;
    margin-left: -8px;
  }

  & .dropdown-item {
    &:hover {
      text-decoration: none;
    }
  }

  & .dropdown-toggle::after {

  }
`