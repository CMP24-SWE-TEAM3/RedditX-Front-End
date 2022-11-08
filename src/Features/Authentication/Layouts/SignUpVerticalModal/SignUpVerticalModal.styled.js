import styled from "styled-components";
import Modal from "react-bootstrap/Modal";

const fontFamily = "'IBM Plex Sans', sans-serif;";


export const MyModal = styled(Modal)`
.modal-content {
  box-shadow: 0px 0px 10px 3px #8080808a;
  height: 600px;
  width: 90%;
  margin: auto;
  max-width: 380px;
}

> div {
  min-width:350px;
}
`;

export const MyModalHeader = styled(Modal.Header)`
  border: none;

  button {
    font-size: 10px;
  }
`;
export const HaveAccount = styled.span`
padding: 0 0 0 33px;
  font-size: 12px;
  margin-bottom: 100px;

  button {
    padding: 0;
    font-weight: 700;
    border: none;
    background-color: transparent;
    text-decoration: underline;
    color: ${({ theme }) => theme.color.link};
    font-family: ${fontFamily};
  }
`;
