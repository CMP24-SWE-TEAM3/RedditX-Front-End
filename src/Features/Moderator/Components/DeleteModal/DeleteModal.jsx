import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CancelButton, DeleteButton, StyledModal } from "./DeleteModal.styled";
const DeleteModal = ({ ShowModal, setShowModal }) => {
  console.log(ShowModal);
  const [show, setShow] = useState(ShowModal);
  const handleClose = () => {
    setShow(false);
    setShowModal(false);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}

      <StyledModal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete post flair?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you wish to delete this post flair?</Modal.Body>
        <Modal.Footer>
          <CancelButton onClick={handleClose}>Cancel</CancelButton>
          <DeleteButton>Delete</DeleteButton>
        </Modal.Footer>
      </StyledModal>
    </>
  );
};

export default DeleteModal;
