import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { StyledModal } from "./saveChangesModal.styled";

/**
 * modal appear when unsaved changes blured
 * 
 * @param {object} props 
 * @returns {React.Component} CreatePost component
 */
const SaveChangesModal = (props) => {
  return (
    <StyledModal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Save changes before leaving?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          You have made some changes to your community, do you wish to leave
          this menu without saving?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onDiscard} className="discard">Discard</Button>
        <Button variant="primary" className="save" onClick={props.onSave}>Save</Button>
      </Modal.Footer>
    </StyledModal>
  );
};

export default SaveChangesModal;
