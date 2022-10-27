import styled from 'styled-components'
import {CiSearch} from 'react-icons/ci'


export const StyledSearchButton = styled.div`
  display: flex;
  border-radius: 20px;
  height: 40px;
  width: 45%;
  background: #f6f7f8;
  margin: auto;
`
export const StyledSearchIcon = styled(CiSearch)`
  color: ${({theme})=>theme.color.muted};
   position: absolute;
    margin-top: 10px;
    min-width: 50px;
`