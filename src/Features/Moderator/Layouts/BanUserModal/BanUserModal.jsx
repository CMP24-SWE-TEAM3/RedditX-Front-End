import { useState } from "react";

import Modal from "react-bootstrap/Modal";
import BanUser from "../BanUser/BanUser";

import {
  MyModal,
  MyModalHeader,
  HaveAccount,
} from "./BanUserModal.styled";



/**
 * BanUserModal layout that is in user management
 * @returns {React.Component}  BanUserModal layout that is in user management
 */

const BanUserModal = ({ ...props }) => {

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
      <MyModalHeader closeButton>Ban a user:</MyModalHeader>
      <Modal.Body data-testid="loginModalId">
        {!showSignUp && (
          <>
            <BanUser setModalShowBaneUser={props.setModalShowBaneUser} setModalShowLogIn={setModalShowApproveUser} />{" "}
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

export default BanUserModal;
