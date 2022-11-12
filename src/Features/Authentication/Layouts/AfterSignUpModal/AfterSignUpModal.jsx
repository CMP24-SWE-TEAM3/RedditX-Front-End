import Modal from "react-bootstrap/Modal";

import { MyModal } from "./AfterSignUpModal.styled";

import AfterSignUp from "../AfterSignUp/AfterSignUp";

/**
 * AfterSignUpModal component that is used to show the modal of AfterSignUp
 * @returns {React.Component} AfterSignUpModal component that is used to show the modal of AfterSignUp
 */

const AfterSignUpModal = ({ ...props }) => {
  return (
    <MyModal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop={"static"}
    >
      <Modal.Body>
        <AfterSignUp setModalAfterSignUp={props.setModalAfterSignUp} />
      </Modal.Body>
    </MyModal>
  );
};

export default AfterSignUpModal;
