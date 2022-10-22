import { useState } from "react";

import Modal from "react-bootstrap/Modal";

import {
  MyModal,
  MyModalHeader,
  HaveAccount,
} from "./SignUpVerticalModal.styled";

import SignUp from "Features/Authentication/Layouts/SignUp/SignUp";
import LogIn from "Features/Authentication/Layouts/LogIn/LogIn";

// let showRedditor = true;

// export const HideRedditor = () => {
//   console.log(showRedditor);
//   showRedditor = !showRedditor;
// }

const SignUpVerticalModal = ({ ...props }) => {
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
        {!showLogIn && <SignUp />}
        {showLogIn && <LogIn />}
        {!showLogIn && (
          <HaveAccount>
            Already a redditor?{" "}
            <button onClick={() => setShowLogIn(true)}>Log in</button>
          </HaveAccount>
        )}
        {showLogIn && (
          <HaveAccount>
            New to Reddit?{" "}
            <button onClick={() => setShowLogIn(false)}>Sign up</button>
          </HaveAccount>
        )}
      </Modal.Body>

      {/* <button onClick={() => HideRedditor()}>hide</button> */}
    </MyModal>
  );
};

export default SignUpVerticalModal;
