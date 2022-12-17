import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import {
  ModalContainer,
  ButtonModal,
} from "./ModalAfterCreateCommunity.styled";

const ModalAfterCreateCommunity = ({
  showModal,
  setShowWelcomeModal,
  community,
}) => {
  const handleClose = () => setShowWelcomeModal(false);
  const navigate = useNavigate();

  return (
    <ModalContainer
      show={showModal}
      onHide={handleClose}
      backdrop="static"
      keyboard={true}
    >
      <Modal.Header closeButton>
        <Modal.Title>Create your first post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Welcome to your new community, r/{community}! Set the tone for your
        community and welcome new members with a post.
      </Modal.Body>
      <Modal.Footer>
        <ButtonModal
          show={false}
          onClick={() => {
            handleClose();
            navigate(`/subreddit/t5_${community}`);
          }}
        >
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
