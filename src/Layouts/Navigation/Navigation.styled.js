import {Container, Navbar, NavbarBrand} from "react-bootstrap";
import styled from "styled-components";

export const ContainerNav = styled(Container)`
  @media (min-width: 992px) {
    max-width: 100% ;
  }
  display: flex;

  .navbar-collapse {
    justify-content: flex-end;
  }

  .navbar-nav {
    @media (max-width: 992px) {
      align-items: flex-start;
    }

  }

  .nav-link {
    display: inherit;
    align-items: center;
  }

  .nav-dropdown .nav-link {
    display: block !important;
  }

`
export const NavBarContent = styled(Navbar)`
  width: 100%;
  background: ${({theme}) => theme.background.primary};
  --bs-navbar-toggler-border-color: unset !important;
  .navbar-toggler {
   background: white;
  }

  .navbar-toggler:focus {
    box-shadow: none;
  }

  @media (min-width: 992px) {
    height: 49px;
  }

  .drop-caret {
    width: 17%
  }
`
export const Span = styled.span`
  font-size: 16px;
  padding-left: 10px;
  color:${({theme}) => theme.color.primary};
  @media (min-width: 992px) {
    display: none;
  }
`

export const AppHeader = styled.header`
  background-color: ${({ theme }) => theme.canvas};
  //min-height: 48vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const AppContainer = styled.div`
  text-align: center;
`;