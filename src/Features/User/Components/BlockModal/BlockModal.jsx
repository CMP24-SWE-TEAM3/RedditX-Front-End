import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  XButton,
  Title,
} from "Features/Subreddit/Components/SelectYourFlair/SelectYourFlair.styled";
import { MdOutlineClear } from "react-icons/md";
import { StyledModal } from "./BlockModal.styled";
import { useUserID } from "Features/User/Contexts/UserIDProvider";

/**
 * modal appear when click block button
 *
 * @param {boolean} show - boolean to show modal
 * @param {function} onCancel- handle on click cancel
 * @param {function} onUnBlock - handle on click unblock
 * @param {function} onHide - handle on click x
 * @returns {React.Component}
 */
const BlockModal = ({ show, onCancel, onUnBlock, onHide }) => {
  const { userID } = useUserID();

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
        <Title>{userID && `Unblock u/${userID.substring(3)}?`}</Title>
        <XButton onClick={onHide}>
          <MdOutlineClear />
        </XButton>
      </Modal.Header>
      <Modal.Body>
        <p>
          They won’t be notified, but they’ll be able to message you, follow
          you, and you’ll start seeing notifications from them. You won’t be
          able to block them again for 24 hours.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onCancel} className="discard">
          Cancel
        </Button>
        <Button variant="primary" className="save" onClick={onUnBlock}>
          Unblock
        </Button>
      </Modal.Footer>
    </StyledModal>
  );
};

export default BlockModal;
