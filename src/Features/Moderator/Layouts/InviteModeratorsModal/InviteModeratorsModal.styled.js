import styled from "styled-components";
import Modal from "react-bootstrap/Modal";

const fontFamily = "'IBM Plex Sans', sans-serif;";


export const MyModal = styled(Modal)`
  .modal-content {
    box-shadow: 0px 0px 10px 3px #8080808a;
    height: auto;
    width: 90%;
    margin: auto;
    max-width: 550px;
  }

  > div {
    min-width:350px;
  }
`;
export const MyModalHeader = styled(Modal.Header)`
  border: none;
  border-bottom: 1px solid #eee;

  button {
    font-size: 10px;
  }
`;
export const MyBody = styled.div`
  border: none;
  width: 100%;
  height: 100%;
  opacity: 0.3;
`;

export const HaveAccount = styled.span`
  
`;

