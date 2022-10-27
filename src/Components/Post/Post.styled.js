import styled from "styled-components";
import Form from "react-bootstrap/Form";

export const PostStyled = styled(Form.Control)`
  width: 70%;
  height: 38px;
  padding: 0 16px;
  margin-right: 8px;
  border-radius: 4px;
  flex-grow: 1;
  background-color: ${({theme})=>theme.background.post_background};
  color: #333;
  font-size: 16px;
  border: 1px solid ${({theme})=>theme.background.post_background};
  display: inline;

  &:hover ,&:focus {
    background-color: ${({theme})=>theme.background.post_background};
    border-color: ${({theme})=>theme.color.secondary};
    outline-color: ${({theme})=>theme.color.secondary};
  }
  box-shadow: 0 0 !important;
  @media only screen and (max-width: 961px){
    width: 100%;
  }
`