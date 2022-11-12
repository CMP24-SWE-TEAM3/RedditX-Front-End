import { useState } from "react";

import Modal from "react-bootstrap/Modal";

import {
  MyModal,
  MyModalHeader,
  HaveAccount,
} from "./LogInVerticalModal.styled";

import LogIn from "Features/Authentication/Layouts/LogIn/LogIn";

import SignUp from "Features/Authentication/Layouts/SignUp/SignUp";

/**
 * LogInVerticalModal component that is used to show the modal of login
 * @returns {React.Component}  LogInVerticalModal component that is used to show the modal of login
 */

const LogInVerticalModal = ({ ...props }) => {

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
      <MyModalHeader closeButton></MyModalHeader>
      <Modal.Body>
        {showSignUp && (
          <>
            <SignUp />{" "}
            <HaveAccount>
              Already a redditor?{" "}
              <button id="logInButtonFromSignupModal" onClick={() => setShowSignUp(false)}>Log in</button>
            </HaveAccount>
          </>
        )}
        {!showSignUp && (
          <>
            <LogIn />{" "}
            <HaveAccount>
              New to Reddit?{" "}
              <button onClick={() => setShowSignUp(true)}>Sign up</button>
            </HaveAccount>
          </>
        )}
      </Modal.Body>
    </MyModal>
  );
};

export default LogInVerticalModal;
