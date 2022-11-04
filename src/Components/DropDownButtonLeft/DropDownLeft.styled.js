import styled from "styled-components";
import Dropdown from 'react-bootstrap/Dropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


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

`
// canvas styles
export const OffcanvasBody = styled(Offcanvas)`
  width: 270px !important;
  position: absolute;
`