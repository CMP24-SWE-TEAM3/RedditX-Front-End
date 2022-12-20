import { useAuth } from "Features/Authentication/Contexts/Authentication";
import FlairContext from "Features/Moderator/Contexts/Safe-context";
import DeleteFlair from "Features/Moderator/Services/DeleteFlair";
import useFetchFunction from "Hooks/useFetchFunction";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useParams } from "react-router-dom";
import { CancelButton, DeleteButton, StyledModal } from "./DeleteModal.styled";
const DeleteModal = ({ ShowModal, setShowModal, id }) => {
  console.log(ShowModal);
  const [show, setShow] = useState(ShowModal);
  const handleClose = () => {
    setShow(false);
    setShowModal(false);
  };
  const ctx = useContext(FlairContext);
  const auth = useAuth();
  const [Community, error, isLoading, fetchData] = useFetchFunction();
  const handleShow = () => setShow(true);
  const { subredditId } = useParams();
  useEffect(() => {
    console.log("Community = = = ", Community);
  }, [Community]);
  const DeleteHandler = () => {
    setShow(false);
    setShowModal(false);
    console.log(id);
    const obj = {
      id: id,
    };
    DeleteFlair(fetchData, obj, auth, subredditId);
    ctx.ChangeFetchHandler(!ctx.ChangeFetch);
  };
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
          <DeleteButton onClick={DeleteHandler}>Delete</DeleteButton>
        </Modal.Footer>
      </StyledModal>
    </>
  );
};

export default DeleteModal;
