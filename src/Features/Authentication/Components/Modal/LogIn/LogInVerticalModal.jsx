import { useState } from "react";

import Modal from "react-bootstrap/Modal";

import {
  MyModal,
  MyModalHeader,
  HaveAccount,
} from "./LogInVerticalModal.styled";

import LogIn from "Features/Authentication/Layouts/LogIn/LogIn";

import SignUp from "Features/Authentication/Layouts/SignUp/SignUp";

const LogInVerticalModal = ({ ...props }) => {
  const [showLogIn, setShowLogIn] = useState(false);

  return (
    <MyModal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onExit = {()=> {setShowLogIn(false)}}
    >
      <MyModalHeader closeButton></MyModalHeader>
      <Modal.Body>
        {showLogIn && <SignUp />}
        {!showLogIn && <LogIn />}
        {showLogIn && (
          <HaveAccount>
            Already a redditor?{" "}
            <button onClick={() => setShowLogIn(false)}>Log in</button>
          </HaveAccount>
        )}
        {!showLogIn && (
          <HaveAccount>
            New to Reddit?{" "}
            <button onClick={() => setShowLogIn(true)}>Sign up</button>
          </HaveAccount>
        )}
      </Modal.Body>
    </MyModal>
  );
};

export default LogInVerticalModal;
