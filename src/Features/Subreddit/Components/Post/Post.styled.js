import styled from "styled-components";
import Form from "react-bootstrap/Form";

export const PostStyled = styled(Form.Control)`
  flex-grow: 1;
  height: 38px;
  margin-right: 8px;
  outline: none;
  padding: 0 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  font-family: inherit;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: ${({theme}) => theme.background.post_background};
  color: #333;
  border: 1px solid ${({theme}) => theme.background.post_background};
  display: block;
  box-shadow: 0 0 !important;

  &:hover, &:focus {
    background-color: ${({theme}) => theme.background.post_background};
    border-color: ${({theme}) => theme.color.secondary};
    outline-color: ${({theme}) => theme.color.secondary};
  }

  @media only screen and (max-width: 961px) {
    width: 100%;
  }
`