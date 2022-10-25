import styled from 'styled-components'
import {CiSearch} from 'react-icons/ci'

import LightTheme from "Theme/lightTheme";

export const StyledSearchButton = styled.div`
  display: flex;
  border-radius: 20px;
  height: 40px;
  width: 50%;
  background: #f6f7f8;
  margin-left: 48px;
`
export const StyledSearchIcon = styled(CiSearch)`
  color: ${LightTheme.color.muted};
   position: absolute;
    margin-top: 10px;
    min-width: 50px;
`