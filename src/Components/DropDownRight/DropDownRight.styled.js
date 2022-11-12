import styled from 'styled-components';
import {BsPerson} from 'react-icons/bs';
import {NavDropdown} from "react-bootstrap";

export const Container = styled(NavDropdown)`
  //@media (max-width: 450px) {
  //  display: none;
  //}
  @media(max-width:990px){
    max-width:fit-content;
    width:fit-content;
  }
  font-size: 20px;
  font-weight: 500;
  color: ${({theme}) => theme.color.primary} !important;
  //background-color: ${({theme}) => theme.background.primary} !important;
  background: unset !important;
  .dropdown-toggle::after {
    vertical-align: 0.1em;
    color: #878a8c
  }

  .ico {
    font-size: 20px;
  }

  .first-sec {
    padding: 0 20px;
  }

  .accordion {
    --bs-accordion-bg: ${({theme}) => theme.canvas.primary} !important;
    --bs-accordion-active-bg: none;

    :hover {
      //background-color: ${({theme})=>theme.background.muted} !important;
    }

    --bs-accordion-active-color: none;

  }
  .child.accordion-body {
    padding: 0.25rem 0 0.25rem 0.3rem !important;

  }

  .accordion-body {
    padding: 0.25rem 0 0.25rem 1.7rem !important;
    :hover{
      background: none !important;
    }
  }

  margin: 5px;
  display: flex;
  vertical-align: center;

  .dropdown-toggle::after {
    margin-left: 2.255em;
  }


  white-space: break-spaces;
  padding: 0;
  max-width: 252px;
  border-color: ${({theme}) => theme.background.primary} !important;

  :active {
    background-color: ${({theme}) => theme.background.primary};
  }


  span {
    padding-right: 10px;

  }

  .accordion-item {
    border: none;
    font-weight: 500;
    line-height: 18px;
    align-items: center;
    font-size: 16px;
    padding: 0 20px 0 0;
    :hover{
      background-color: ${({theme}) => theme.background.muted} !important;
    }
  }

  .accordion-header {
    display: flex;
    flex-direction: row;
    height: 100%;
    padding: 0.25rem 0.8rem;
  }

  .accordion-button {
    padding: 5px;
    font-size: 14px;
    width: 100%;
    font-weight: 500;
    height: 100%;
    box-shadow: none;
    white-space: nowrap;
    color: ${({theme}) => theme.color.primary};
    :hover{
      background:none !important;
    }

    //text-align: center;
    :focus {
      box-shadow: 0 0;
    }

  }

  & span {
    padding: 3px;
  }
  

  color: ${({theme}) => theme.color.muted};


  .rs-dropdown-toggle.rs-btn {
    background-color: ${({theme}) => theme.background.primary};
    display: block;
    position: relative;
  }

  .rs-dropdown-toggle.rs-btn:hover {
    border-color: ${({theme}) => theme.background.primary} !important;
    //border-color: red !important;
    background-color: ${({theme}) => theme.background.primary} !important;
  }

  .rs-dropdown {
    display: block;
    color: ${({theme}) => theme.color.primary};
    padding: 5px;
  }

  .rs-dropdown-menu {
    -webkit-box-shadow: none !important;
    position: relative;
    display: block;
    left: 0;
    right: 20px;
    top: 39.5px;
    border-radius: 4px;
    padding-bottom: 8px;
    padding-top: 8px;
    width: 254px;
    height: auto;
    overflow-y: auto;
    overflow-x: hidden;
    max-width: 100%;

  }

  .dropdown-menu {
    //max-width: 100%;
    overflow: hidden scroll;
    transform: translate3d(0px, 35px, 0px) !important;
    height: 578px;
    background-color: ${({theme}) => theme.background.primary} !important;
    left: -140px;
    top: 10px;
    @media (max-width:990px){
      width:fit-content;
    }

    .stuff {
      font-weight: 500;
      font-size: 14px;
      padding-left: 5px;
      color: ${({theme}) => theme.color.muted};
    }

    i {
      font-weight: 500;
      font-size: 20px;
    }

    .switch-but {
      position: absolute;
      width: 100%;
      height: fit-content;
      right: -170px;
      //padding-left: 30px;
    }
  }

  .dropdown-item-text {
    white-space: break-spaces;
    font-weight: 500;
    font-size: 14px;
    height: 40px;
    width: 100%;
    padding-left:18px;

    span {
      color: ${({theme}) => theme.color.primary};
    }

    :hover {
      background-color: ${({theme}) => theme.background.muted} !important;
    }

  }

  .dropdown-item {
    white-space: break-spaces;
    font-weight: 500;
    font-size: 14px;
    height: 40px;
    width: 100%;
    color: ${({theme}) => theme.color.primary} !important;

    :hover {
      background-color: ${({theme}) => theme.background.muted} !important;
    }
    :focus{
      background-color: unset !important;
    }

    span {
      flex: 0 0;
      //font-size: 20px;
      height: 20px;
      min-width: 20px;
      width: 20px;
      color: ${({theme}) => theme.color.primary};

    }

    :active {
      background-color: unset !important;
      color: unset !important;
    }
  }

  :active {
    background-color: ${({theme}) => theme.background.post_background};
  }

  // & .rs-dropdown-item, {
    //   color: ${({theme}) => theme.color.primary};
  // }

  @media only screen and (max-width: 1290px) {
    //left: 20px;
  }

  .footer {
    font-weight: 400;
    line-height: 16px;
    font-size: 14px;
    margin-bottom: 20px;
    padding: 12px 20px;
  }

  .ico {
    color: ${({theme}) => theme.color.muted} !important;
  }

`
export const DropdownButtonIconStyled = styled(BsPerson)`
  color: grey;
  width: 20px;
  height: 20px;
  margin-right: 2px;
`
