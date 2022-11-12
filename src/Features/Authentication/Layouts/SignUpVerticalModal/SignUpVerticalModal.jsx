import { useState } from "react";

import Modal from "react-bootstrap/Modal";

import {
  MyModal,
  MyModalHeader,
  HaveAccount,
} from "./SignUpVerticalModal.styled";

import SignUp from "Features/Authentication/Layouts/SignUp/SignUp";
import LogIn from "Features/Authentication/Layouts/LogIn/LogIn";

/**
 * SignUpVerticalModal component that is used to show the modal of signup
 * @returns {React.Component}  SignUpVerticalModal component that is used to show the modal of signup
 */

const SignUpVerticalModal = ({ ...props }) => {
  /**
   * state to know what component should be shown in the modal
   */
  const [showLogIn, setShowLogIn] = useState(false);

  return (
    <MyModal
      id="signUpModal"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onExit={() => {
        setShowLogIn(false);
      }}
    >
      <MyModalHeader closeButton></MyModalHeader>
      <Modal.Body>
        {!showLogIn && (
          <>
            <SignUp />{" "}
            <HaveAccount>
              Already a redditor?{" "}
              <button
                id="logInButtonFromSignupModal"
                onClick={() => setShowLogIn(true)}
              >
                Log in
              </button>
            </HaveAccount>
          </>
        )}
        {showLogIn && (
          <>
            {" "}
            <LogIn />{" "}
            <HaveAccount>
              New to Reddit?{" "}
              <button onClick={() => setShowLogIn(false)}>Sign up</button>
            </HaveAccount>
          </>
        )}
      </Modal.Body>
    </MyModal>
  );
};

export default SignUpVerticalModal;
