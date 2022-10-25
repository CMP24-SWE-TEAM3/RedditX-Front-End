import styled from 'styled-components';
import LightTheme from "Theme/lightTheme";

export const ButtonStyled = styled.button`
  position: relative;
  left: 20%;
  bottom: 40px;
  height: 32px;
  z-index: 1;
  cursor: pointer;
  color: white;
  border-color: ${LightTheme.color.secondary};
  background-color: ${LightTheme.color.secondary};
  width: 112px;

  &:hover {
    background-color: #1484d6 !important;
  }

  &:active {
    background-color: #0079d3 !important;
  }

  border-radius: 9999px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  min-height: 32px;
  min-width: 32px;
  padding: 4px 16px;
`
