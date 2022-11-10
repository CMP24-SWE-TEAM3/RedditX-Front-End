import styled from "styled-components";
import Dropdown from "react-bootstrap/Dropdown";

export const ButtonModerator = styled(Dropdown)`
  border: none;
  outline: none;
  width: 38px;
  //height: 38px;
  margin: 0 8px;
  color:${({theme}) => theme.color.muted} !important;

  &:hover {
    background: ${({theme}) => theme.background.post_background};
  }

  span {
    padding-right: 3px;
  }

  .dropdown-item {
    color: ${({theme}) => theme.color.primary} !important;
    :active {
      background: none !important;
      color: unset !important;
    }
    :hover{
      background: ${({theme}) => theme.background.post_background} !important;
    }
  }

  .dropdown-menu {
    background: ${({theme}) => theme.background.primary} !important;
  }

`