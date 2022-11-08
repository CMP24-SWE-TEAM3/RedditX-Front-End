import styled from "styled-components";
import Dropdown from "react-bootstrap/Dropdown";

export const ButtonModerator = styled(Dropdown)`
  border: none;
  outline: none;
  width: 38px;
  //height: 38px;
  margin: 0 8px;

  &:hover {
    background: ${({theme}) => theme.background.post_background};
  }

  span {
    padding-right: 3px;
  }

  color: ${({theme}) => theme.color.primary} !important;
  .dropdown-item:active{
    background: none !important;
    color: unset !important;
  }

`