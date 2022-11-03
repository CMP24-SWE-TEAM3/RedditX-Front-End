import styled from 'styled-components';
import {BsPerson} from 'react-icons/bs';
import Dropdown from 'react-bootstrap/Dropdown';
import {NavDropdown} from "react-bootstrap";

export const Container = styled(NavDropdown)`
  .accordion {
    color: ${({theme}) => theme.color.primary};
    white-space: break-spaces;
    padding: 0;
  }

  .accordion-item {
    border: none;
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
    white-space: nowrap;
    color: ${({theme}) => theme.color.primary};
    //text-align: center;

    :focus {
      box-shadow: 0 0;
    }

    :hover {
      background-color: ${({theme}) => theme.background.primary};
    }

    & span {
      padding: 3px;
      align-items: start;
    }

    color: ${({theme}) => theme.color.muted};
    //left:10%;

    & button {
      background-color: white;

      &:hover {
        background-color: white !important;
        border-color: red !important;
      }
    }

    & .rs-dropdown-toggle.rs-btn {
      background-color: ${({theme}) => theme.background.primary};
      display: block;
      position: relative;
    }

    & .rs-dropdown-toggle.rs-btn:hover {
        //border-color: ${({theme}) => theme.background.primary} !important;
      border-color: red !important;
      background-color: ${({theme}) => theme.background.primary} !important;
    }

    & .rs-dropdown {
      display: block;
      color: ${({theme}) => theme.color.primary};
      padding: 5px;
      // :hover{
        //   background-color: ${({theme}) => theme.background.muted};
      //
      // }
    }

    & .rs-dropdown-menu {
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

    .dropdown-item {


      :active {
        background-color: ${({theme}) => theme.background.post_background};
      }
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
export const DropDownMenu = styled(Dropdown)`
  max-width: 100%;

`