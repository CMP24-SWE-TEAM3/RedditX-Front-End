import styled from "styled-components";
import {NavLink} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

export const TestNav = styled(NavLink)`
  align-self: center;
  align-items: center;
  display: flex;
  //width: 90%;
  span {
    @media (min-width: 770px) {
      display: none;
    }
    padding-left: 10px;
  }

  @media (min-width: 992px) {
    .navbar-expand-lg.navbar-collapse {
      display: flex !important;
      flex-basis: auto;
      justify-content: flex-end !important;
    }
  }

  .nav {
    display: flex !important;
    flex-basis: auto;
    justify-content: flex-end !important;
  }
`
export const StyledHeader = styled.header
    `
      justify-content: space-between;
      //position: sticky;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 49px;
      background-color: ${({theme}) => theme.background.primary};
      color: white;
      display: flex;
      padding: 0 20px;
      align-items: center;
      @media (max-width: 969px) {
        position: fixed;
      }

      .logged-out {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .search {
        display: flex;
        flex: 1;
      }
    `
export const StyledSeperator = styled.div
    `
      border-left: 1px solid silver;
      height: 75%;
      margin-left: 8px;
      @media (max-width: 790px) {
        display: none;
      }
    `
export const ContainerNavbar = styled(Navbar)
    `
      --bs-navbar-toggler-border-color: unset !important;

      .navbar-toggler:focus {
        box-shadow: none;
      }

      @media (max-width: 770px) {
        height: 70px;
      }
      width: 100% !important;
      height: 49px;

      .container {
        @media (min-width: 1400px) {
          max-width: 100% !important;
        }
        @media (max-width: 1500px) {
          max-width: 100% !important;
        }

        @media (max-width: 770px) {
          display: flex;
          justify-content: center;
          flex-direction: column;
        }
        display: flex;

      }

      .navbar-collapse {
        margin-top: 10px;
        @media (max-width: 450px) {
        }
      }

      .navbar-brand {
        @media (max-width: 790px) {
          display: flex;
          justify-content: space-between;
        }
      }

      .navbar-nav {
        //width: 30% !important;
        display: flex;
        flex-direction: row;

      }

    `