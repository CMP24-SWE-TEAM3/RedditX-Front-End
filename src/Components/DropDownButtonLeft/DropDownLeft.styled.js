import styled from "styled-components";
import Dropdown from 'react-bootstrap/Dropdown';


export const DropDownLeftStyled = styled(Dropdown)`

  & h6 {
    display: inline;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    color: ${({theme}) => theme.color.primary};
    @media only screen and (max-width: 990px) {
      display: none ;
    }
  }

  .home-ico {
    position: relative;
    span:first-child{
      padding-right: 10px;
    }
  }

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

  .all-drop {
    border-radius: 4px 4px 0 0;
    border-color: ${({theme}) => theme.lineColor.primary};
    display: flex;
  }

  a:hover {
    color: ${({theme}) => theme.color.primary};
  }


  // down form ico
  .down-form {
    svg {
      polyline {
        stroke: ${({theme}) => theme.color.primary} !important;
        stroke-width:1;
      }
    }

    @media (max-width: 890px) {
      display: none;
    }
  }

`