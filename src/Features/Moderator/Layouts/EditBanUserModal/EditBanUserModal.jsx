import { useState } from "react";

import Modal from "react-bootstrap/Modal";
import EditBanUser from "../EditBanUser/EditBanUser";

import {
  MyModal,
  MyModalHeader,
  HaveAccount,
} from "./EditBanUserModal.styled";



/**
 * EditBanUserModal layout that is in user management
 * @returns {React.Component}  EditBanUserModal layout that is in user management
 */

const EditBanUserModal = ({ ...props }) => {

  /**
   * state to know what component should be shown in the modal
   */
  const [showSignUp, setModalShowApproveUser] = useState(false);

  return (
    <MyModal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onExit={() => {
        setModalShowApproveUser(false);
      }}
    >
      <MyModalHeader closeButton>Edit ban for: u/{props.moderator.userName}</MyModalHeader>
      <Modal.Body data-testid="loginModalId">
        {!showSignUp && (
          <>
            <EditBanUser setModalShowSignUp={props.setModalShowSignUp} setModalShowLogIn={setModalShowApproveUser} moderator={props.moderator}/>{" "}
            {/* <HaveAccount>
              New to Reddit?{" "}
              <button onClick={() => setShowSignUp(true)}>Sign up</button>
            </HaveAccount> */}
          </>
        )}
      </Modal.Body>
    </MyModal>
  );
};

export default EditBanUserModal;
