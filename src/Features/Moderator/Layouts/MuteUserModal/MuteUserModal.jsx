import { useState } from "react";

import Modal from "react-bootstrap/Modal";
import MuteUser from "../MuteUser/MuteUser";

import {
  MyModal,
  MyModalHeader,
  HaveAccount,
} from "./MuteUserModal.styled";



/**
 * MuteUserModal layout that is in user management
 * @returns {React.Component}  MuteUserModal layout that is in user management
 */

const MuteUserModal = ({ ...props }) => {

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
      <MyModalHeader closeButton>Mute user</MyModalHeader>
      <Modal.Body data-testid="loginModalId">
        {!showSignUp && (
          <>
            <MuteUser communityName={props.communityName} setModalShowSignUp={props.setModalShowSignUp} setModalShowApproveUser={setModalShowApproveUser} />{" "}
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

export default MuteUserModal;
