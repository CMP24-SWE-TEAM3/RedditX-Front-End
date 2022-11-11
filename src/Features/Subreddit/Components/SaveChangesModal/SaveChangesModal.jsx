import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {XButton, Title} from "Features/Subreddit/Components/SelectYourFlair/SelectYourFlair.styled";
import {MdOutlineClear} from "react-icons/md"
import { StyledModal } from "./saveChangesModal.styled";

/**
 * modal appear when unsaved changes blured
 *
 * @param {boolean} show - boolean to show modal
 * @param {function} onDiscard - handle on click discard
 * @param {function} onSave - handle on click save
 * @param {function} onHide - handle on click x
 * @param {boolean} showX - boolean to show x button or not
 * @returns {React.Component}
 */
const SaveChangesModal = ({show, onDiscard, onSave,onHide,showX}) => {
  return (
    <StyledModal
      // {...props}
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton={false}>
        {/* <Modal.Title id="contained-modal-title-vcenter">
          Save changes before leaving?
        </Modal.Title> */}
        <Title>Save changes before leaving?</Title>
        {showX && <XButton onClick={onHide}>
          <MdOutlineClear />
        </XButton>}
      </Modal.Header>
      <Modal.Body>
        <p>
          You have made some changes to your community, do you wish to leave
          this menu without saving?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onDiscard} className="discard">
          Discard
        </Button>
        <Button variant="primary" className="save" onClick={onSave}>
          Save
        </Button>
      </Modal.Footer>
    </StyledModal>
  );
};

export default SaveChangesModal;
