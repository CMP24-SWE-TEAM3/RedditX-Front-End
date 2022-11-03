import styled from "styled-components";
import Dropdown from "rsuite/Dropdown";
export const ButtonModerator = styled(Dropdown)`
  border: none;
  outline: none;
  margin: 4px;
  width: 38px;
  height: 38px;

  &:hover {
    background: ${({theme}) => theme.background.post_background};
  }

  color: ${({theme})=>theme.color.primary};
    
`