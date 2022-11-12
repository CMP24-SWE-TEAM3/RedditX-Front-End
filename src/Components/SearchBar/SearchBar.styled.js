import styled from 'styled-components'
import {CiSearch} from "react-icons/ci";

export const StyledSearchButton = styled.div`
  display: flex;
  border-radius: 20px;
  height: 40px;
  //width: 35%;
  background: ${({theme}) => theme.background.post_background};
  margin: auto;
  //width:100%;
  @media (min-width: 1286px) {
    min-width: 516px;
  }

`
export const StyledSearchIcon = styled(CiSearch)`
  color: ${({theme}) => theme.color.muted};
  position: absolute;
  margin-top: 10px;
  min-width: 50px;
`