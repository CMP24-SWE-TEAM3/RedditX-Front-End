import styled from 'styled-components'
import lightTheme from 'Theme/lightTheme'
import {CiSearch} from "react-icons/ci";
import LightTheme from "../../Theme/lightTheme";
export const StyledSearchButton = styled.div`
  display: flex;
  border-radius: 20px;
  height: 40px;
  width: 500px;
  background: #f6f7f8;
  
`
export const StyledSearchIcon = styled(CiSearch)`
  color: ${LightTheme.color.muted};
  position: absolute;
  margin-top: 10px;
  min-width: 50px;
`