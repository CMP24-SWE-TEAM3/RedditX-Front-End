import { useState } from "react";

import Modal from "react-bootstrap/Modal";
import InviteModerators from "../InviteModerators/InviteModerators";

import {
  MyModal,
  MyModalHeader,
  HaveAccount,
} from "./InviteModeratorsModal.styled";



/**
 * InviteModeratorsModal layout that is in user management
 * @returns {React.Component}  InviteModeratorsModal layout that is in user management
 */

const InviteModeratorsModal = ({ ...props }) => {

  /**
   * state to know what component should be shown in the modal
   */
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <MyModal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onExit={() => {
        setShowSignUp(false);
      }}
    >
      <MyModalHeader closeButton>Invite Moderators</MyModalHeader>
      <Modal.Body data-testid="loginModalId">
        {!showSignUp && (
          <>
            <InviteModerators setModalShowLogIn={setShowSignUp} />{" "}
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

export default InviteModeratorsModal;
