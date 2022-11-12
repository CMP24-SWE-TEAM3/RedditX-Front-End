import Button from "react-bootstrap/Button";
import React from "react";

import SignUpVerticalModal from "../Layouts/SignUpVerticalModal/SignUpVerticalModal";
import LogInVerticalModal from "../Layouts/LogInVerticalModal/LogInVerticalModal";

import AfterSignUpModal from "../Layouts/AfterSignUpModal/AfterSignUpModal";
import { BrowserRouter, Routes } from "react-router-dom";

export const toggle = () => {};

const TestHome = () => {
  const [modalShowSignUp, setModalShowSignUp] = React.useState(false);
  const [modalShowLogIn, setModalShowLogIn] = React.useState(false);
  const [modalAfterSignUp, setModalAfterSignUp] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShowSignUp(true)}>
        Launch Signup
      </Button>
      <br></br>
      <br></br>
      <br></br>
      <Button variant="primary" onClick={() => setModalShowLogIn(true)}>
        Launch Login
      </Button>
      <br></br>
      <br></br>
      <br></br>
      <Button variant="primary" onClick={() => setModalAfterSignUp(true)}>
        Launch After Signup
      </Button>

      <SignUpVerticalModal
        show={modalShowSignUp}
        onHide={() => setModalShowSignUp(false)}
      />
      <LogInVerticalModal
        show={modalShowLogIn}
        onHide={() => setModalShowLogIn(false)}
      />
      <AfterSignUpModal
        show={modalAfterSignUp}
        onHide={() => setModalAfterSignUp(false)}
      />
    </>
  );
};

export default TestHome;
