import styled from "styled-components";
import {IoIosLink} from "react-icons/io";

export const IconStyled = styled(IoIosLink)`
  color: ${({theme}) => theme.color.muted};
  height: 20px;
  width: 20px;
  font-size: 20px;
  line-height: 20px;
  padding: 0;
  margin: 2px;
  display: inline-block;
`
export const LinkButtonStyled = styled.button
    `
      border-radius: 4px;
      background-color: ${({theme}) => theme.background.primary};
      color: ${({theme}) => theme.color.primary};
      border: 1px solid ${({theme}) => theme.background.primary};

      &:hover {
        background: ${({theme}) => theme.background.post_background};
      }
      color: ${({theme}) => theme.color.primary};
    `