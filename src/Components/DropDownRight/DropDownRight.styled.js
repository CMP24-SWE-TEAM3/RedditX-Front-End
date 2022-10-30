import Dropdown from 'rsuite/Dropdown';
import styled from 'styled-components';
import {BsPerson} from 'react-icons/bs';


export const Container = styled(Dropdown)`
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
    //justify-content: flex-end;
    //margin-top: 4px;
    padding-bottom: 8px;
    padding-top: 8px;
    width: 254px;
    //background-color: red;
    height: auto;
    overflow-y: auto;
    overflow-x: hidden;
    
  }

  & #menu-4 {
    position: absolute;
    left: -142px;
  }

  & .rs-dropdown-item {
    color: ${({theme}) => theme.color.primary};
    
    :hover{
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
