import Dropdown from 'rsuite/Dropdown';
import styled from 'styled-components';
import {BsPerson} from 'react-icons/bs';
import LightTheme from "Theme/lightTheme";


export const DropdownButtonStyled = styled(Dropdown)`
  color: ${LightTheme.color.muted};
`
export const DropdownButtonIconStyled = styled(BsPerson)`
  color: grey;
  min-width: 20px;
  min-height: 20px;
  margin-right: 5px;
`
export const DropdownCoainterStyled = styled.div`
  margin-left: 100px;
  
`