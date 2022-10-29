import styled from "styled-components";
import {RiImage2Line} from "react-icons/ri";
import LightTheme from "Theme/lightTheme";

export const IconStyled = styled(RiImage2Line)`
  color: ${({theme})=>theme.color.muted};
  display: flex;
  position: relative;
`
export const ImageButtonStyled = styled.button
    `
      background: none;
      border: none;
      outline: none;
      margin: 4px;
      width: 38px;
      height: 38px;

      &:hover {
        background: ${({theme}) => theme.background.post_background};
      }

      color: ${LightTheme.color.primary};
    `