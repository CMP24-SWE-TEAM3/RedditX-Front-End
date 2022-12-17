import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

export const ButtonStyled = styled(Button)`
  display: contents;
  background: none !important;
  color: ${({ theme }) => theme.color.primary};
  border: none;
  :hover,
  :active,
  :focus-visible {
    background: none !important;
    color: ${({ theme }) => theme.color.primary} !important;
    box-shadow: none;
  }
  @media (max-width: 1530px) {
    display: none;
  }
`;

// canvas styles
export const OffcanvasBody = styled(Offcanvas)`
  .offcanvas-body {
    overflow-y: scroll;
  }
  width: 270px !important;

  background: ${({ theme }) => theme.background.primary};

  .btn-close:focus {
    box-shadow: none !important;
  }

  .btn-close {
    color: ${({ theme }) => theme.color.primary} !important;
  }
`;

export const OpenSide = styled.div`
  width: fit-content;
  height: 100%;
  display: inline-block;
  @media (max-width: 770px) {
    display: none;
  }
`;
