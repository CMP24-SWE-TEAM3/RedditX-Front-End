import {DropdownButton} from "react-bootstrap";
import styled from "styled-components";

export const Container = styled(DropdownButton)
    `
      position: relative;
      margin-left: auto;
      flex-direction: row;
      text-align: left;
      width: 52px;
      height: 32px;

      & .dropdown-item span {
        font-size: 20px;
        font-weight: 400;
        height: 20px;
        line-height: 20px;
        vertical-align: middle;
        width: 20px;
      }

      & .btn-primary {
        background-color: ${props => props.theme.background.primary};
        border-color: ${props => props.theme.background.primary};

        &:hover {
          background-color: ${props => props.theme.background.muted};
        }
      }

      & span {
        color: ${({theme}) => theme.color.primary};
      }

      & .dropdown-item:hover {
        text-decoration: none
      }

      & .dropdown-menu {
        left: 654.2px;
        top: 360.2px;
        margin-left: -9px;
        min-width: 52px;
        border: 1px solid #edeff1;
        border-radius: 4px;
        box-shadow: 0 2px 4px 0 #edeff1;
        color: #1c1c1c;
        overflow: hidden;
        background-color: white;
        position: absolute;
        // z-index: 10;
      }

    `