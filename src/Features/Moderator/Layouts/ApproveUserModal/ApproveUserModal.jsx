import { useState } from "react";

import Modal from "react-bootstrap/Modal";
import ApproveUser from "../ApproveUser/ApproveUser";

import {
  MyModal,
  MyModalHeader,
  HaveAccount,
} from "./ApproveUserModal.styled";



/**
 * ApproveUserModal layout that is in user management
 * @returns {React.Component}  ApproveUserModal layout that is in user management
 */

const ApproveUserModal = ({ ...props }) => {

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
      <MyModalHeader closeButton>Add approved user</MyModalHeader>
      <Modal.Body data-testid="loginModalId">
        {!showSignUp && (
          <>
            <ApproveUser setModalShowSignUp={props.setModalShowSignUp} setModalShowLogIn={setModalShowApproveUser} />{" "}
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

export default ApproveUserModal;
