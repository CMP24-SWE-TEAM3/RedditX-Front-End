import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { CancelButton, DeleteButton, StyledModal } from "./CancelModal.styled";
/**
 * Component that Contain CancelModal
 *
 * @Component
 * @param {boolean} ShowModal -  the state that show the modal
 * @param {function} setShowModal -  the function that show the modal
 * @param {function} onDiscard -  the function that will be called when the modal is discarded
 * @returns {React.Component}
 */

const CancelModal = ({ ShowModal, setShowModal, onDiscard }) => {
  console.log(ShowModal);
  const [show, setShow] = useState(ShowModal);
  const handleClose = () => {
    setShow(false);
    setShowModal(false);
  };
  /**
   * it is the function that handle the state of the show modal.
   *
   */
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
