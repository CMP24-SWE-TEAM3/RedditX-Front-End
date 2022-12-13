import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import {
  ModalContainer,
  ButtonModal,
} from "./ModalAfterCreateCommunity.styled";

const ModalAfterCreateCommunity = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const navigate = useNavigate();

  return (
    <ModalContainer
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={true}
    >
      <Modal.Header closeButton>
        <Modal.Title>Create your first post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Welcome to your new community, r/mangaaaae! Set the tone for your
        community and welcome new members with a post.
      </Modal.Body>
      <Modal.Footer>
        <ButtonModal show={false} onClick={handleClose}>
          Continue
        </ButtonModal>
        <ButtonModal onClick={() => navigate("/submit")} show={true}>
          Create A Post
        </ButtonModal>
      </Modal.Footer>
    </ModalContainer>
  );
};

export default ModalAfterCreateCommunity;
