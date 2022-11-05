import styled from "styled-components";
import Button from "react-bootstrap/Button";

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

`