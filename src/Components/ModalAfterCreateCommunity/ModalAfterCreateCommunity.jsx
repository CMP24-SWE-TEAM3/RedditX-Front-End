// Import Components
import React from "react";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import {
  ModalContainer,
  ButtonModal,
} from "./ModalAfterCreateCommunity.styled";

/**
 * Component that displays a modal after creating a new community
 * @param {boolean,function (boolean),string}
 * @returns {React.Component}
 */
const ModalAfterCreateCommunity = ({
  showModal,
  setShowWelcomeModal,
  community,
}) => {
  // close the modal
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
        <ButtonModal
          onClick={() => navigate(`/submit/t5_${community}`)}
          show={true}
        >
          Create A Post
        </ButtonModal>
      </Modal.Footer>
    </ModalContainer>
  );
};

export default ModalAfterCreateCommunity;
