import styled from 'styled-components';
import {BsPerson} from 'react-icons/bs';
import Dropdown from 'react-bootstrap/Dropdown';
import {NavDropdown} from "react-bootstrap";

export const Container = styled(NavDropdown)`
  color: ${({theme}) => theme.color.primary};
  background-color: ${({theme}) => theme.background.primary};

  .dropdown-toggle::after {
    vertical-align: 0.1em;
    color: #878a8c
  }
  margin: 5px;
  display: flex;
  vertical-align: center;
  .dropdown-toggle::after{
    margin-left: 2.255em;
  }


  .accordion-button::after {
    //width:1rem; !important;
  }

  color: ${({theme}) => theme.color.primary};
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
    font-size: 14px;
    padding: 0 20px 0 0;
  }

  .accordion-header {
    display: flex;
    flex-direction: row;
    height: 100%;
    padding: 0.25rem 1rem;
  }

  .accordion-button {
    padding: 5px;
    font-size: 16px;
    width: 100%;
    height: 40px;
    white-space: nowrap;
    color: ${({theme}) => theme.color.primary};


    //text-align: center;

    :focus {
      box-shadow: 0 0;
    }

    :hover {
      background-color: ${({theme}) => theme.background.primary};
    }
  }

  & span {
    padding: 3px;
    //align-items: start;
  }

  color: ${({theme}) => theme.color.muted};
  //left:10%;


  .rs-dropdown-toggle.rs-btn {
    background-color: ${({theme}) => theme.background.primary};
    display: block;
    position: relative;
  }

  .rs-dropdown-toggle.rs-btn:hover {
      //border-color: ${({theme}) => theme.background.primary} !important;
    border-color: red !important;
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
    height: 578px;
  }

  .dropdown-item {
    white-space: break-spaces;
    height: 40px;
    width: 100%;

    :active {
      background-color: unset !important;
      color: unset !important;
    }
  }

  :active {
    background-color: ${({theme}) => theme.background.post_background};
  }

  & .rs-dropdown-item {
    color: ${({theme}) => theme.color.primary};

    :hover {
      background-color: ${({theme}) => theme.background.muted};

    }
  }

  @media only screen and (max-width: 1290px) {
    left: 20px;
  }

`
export const DropdownButtonIconStyled = styled(BsPerson)`
  color: grey;
  width: 20px;
  height: 20px;
  margin-right: 2px;
`
