import styled from "styled-components";
import {AiFillHome} from "react-icons/ai";
import Dropdown from 'react-bootstrap/Dropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


export const DropDownLeftStyled = styled(Dropdown)`
  //padding: 12px !important;
  // @media (min-width:995px){
  //  width: 270px;
  //}
  height: 36px;
  left: 0;
  line-height: 34px;
  bottom: 0;
  overflow: hidden;
  padding-left: 40px;
  padding-right: 56px;
  position: relative;
  text-align: left;
  text-overflow: ellipsis;
  top: 0;
  display: contents;
  white-space: nowrap;
  background-color: ${({theme}) => theme.background.primary};

  :hover {
    border-color: ${({theme}) => theme.background.primary};
  }

  color: ${({theme}) => theme.color.primary};

  // images in dropdown list in left side 
  & img {
    height: 20px;
    width: 20px;
    border-radius: 100%;
    vertical-align: middle;
  }

  & .community {
    //padding: 8px 24px;
    position: relative;
    align-items: center;
    display: flex;
    flex-direction: row;
  }

  & .word {
    flex-grow: 1;
    margin-left: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & h6 {
    display: inline;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    color: ${({theme}) => theme.color.primary};
    @media only screen and (max-width: 990px) {
      display: none ;
    }
  }

  & span {
    flex-grow: 0;
    height: 20px;
    max-height: 20px;
    margin-right: 5px;
    max-width: 20px;
    width: 20px;
  }

  & .right-span {
    margin-left: 8px;
  }

  & .feed {
    padding: 16px 24px 8px;
    color: #878a8c;
    font-size: 10px;
    font-weight: 500;
    line-height: 16px;
    text-transform: uppercase;
  }

  & .dropdown-item {
    padding: 8px 24px;
    //position: relative;
    text-decoration: none;

    :active {
      background-color: unset !important;

    }
  }

  & .form-control {
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

  & .form-control:focus {
    border-color: ${({theme}) => theme.color.secondary} !important;
    box-shadow: none;
  }

  & .dropdown-menu {
    background-color: ${({theme}) => theme.background.post_background};
    border: 1px solid white;
    border-top: 0 solid var(--newRedditTheme-line);
    border-radius: 0 0 4px 4px;
    box-sizing: border-box;
    //color: var(--newRedditTheme-bodyText);
    left: -1px;
    margin-top: -1px;
    max-height: 482px;
    overflow-x: hidden;
    overflow-y: scroll;
    position: absolute;
    right: 0;
    top: 100%;
    width: 270px;
  }

  & a {
    //position: absolute;
    //left: 80%;
    //margin-top: 0.7em;
  }
`
export const IconStyled = styled(AiFillHome)`
  color: black;
  width: 20%;
  margin-bottom: 8px;
  @media only screen and (max-width: 1200px) {
    //display: none;
  }
`
export const OffcanvasBody = styled(Offcanvas)`
    width: 270px !important;
  position: relative;
`
