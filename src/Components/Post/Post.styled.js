import styled from "styled-components";
import Form from "react-bootstrap/Form";
import LightTheme from "Theme/lightTheme";

export const PostStyled = styled(Form.Control)`
  width: 70%;
  height: 38px;
  padding: 0 16px;
  margin-right: 8px;
  border-radius: 4px;
  flex-grow: 1;
  background-color: #f6f7f8;
  color: #333;
  font-size: 16px;
  border: 1px solid #edeff1;
  display: inline;

  &:hover {
    border-color: #0079d3;
    outline-color: ${LightTheme.color.link};
  }

  box-shadow: 0 0 !important;
`