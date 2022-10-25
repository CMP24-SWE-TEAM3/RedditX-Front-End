import Dropdown from 'rsuite/Dropdown';
import styled from 'styled-components';
import {BsPerson} from 'react-icons/bs';
import LightTheme from "Theme/lightTheme";


export const DropdownButtonStyled = styled(Dropdown)`
  color: ${LightTheme.color.muted};

  & button {
    background-color: white;

    &:hover {
      background-color: white !important;
      border-color: red !important;
    }
  }

  &:active {
    transition-duration: unset !important;
    transition-delay: unset !important;
  }

  left: 160px;
  @media only screen and (max-width: 1290px) {
    left: 30px;
  }
`
export const DropdownButtonIconStyled = styled(BsPerson)`
  color: grey;
  width: 20px;
  height: 20px;
  margin-right: 5px;
`
