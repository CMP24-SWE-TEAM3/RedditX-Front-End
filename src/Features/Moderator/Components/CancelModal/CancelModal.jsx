import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { CancelButton, DeleteButton, StyledModal } from "./CancelModal.styled";
const CancelModal = ({ ShowModal, setShowModal, onDiscard }) => {
  console.log(ShowModal);
  const [show, setShow] = useState(ShowModal);
  const handleClose = () => {
    setShow(false);
    setShowModal(false);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <StyledModal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Discard changes before leaving?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You have made some changes to your flair, do you wish to discard the
          changes to the flair you are editing?
        </Modal.Body>
        <Modal.Footer>
          <CancelButton onClick={handleClose}>Cancel</CancelButton>
          <DeleteButton onClick={onDiscard}>Discard</DeleteButton>
        </Modal.Footer>
      </StyledModal>
    </>
  );
};

export default CancelModal;
