import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

export const ButtonStyled = styled(Button)`
  @media (max-width: 1530px) {
    display: none;
  }
  width: 10px;
  background: none;
  color: ${({theme}) => theme.color.primary};
  border: none;

  :hover, :active, :focus-visible {
    background: none !important;
    color: ${({theme}) => theme.color.primary} !important;
    box-shadow: none;
  }

  .open-side {
    margin-left:110px;
  }

`
// canvas styles
export const OffcanvasBody = styled(Offcanvas)`
  .offcanvas-body {
    overflow-y: scroll;
  }
  width: 270px !important;
  position: absolute;
  background: ${({theme}) => theme.background.primary};

  .btn-close:focus {
    box-shadow: none !important;
  }

  .btn-close {
    color: ${({theme}) => theme.color.primary} !important;
  }
`