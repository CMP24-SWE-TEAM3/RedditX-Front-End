import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from "react";

import SignUpVerticalModal from '../Components/Modal/SignUp/SignUpVerticalModal';
import LogInVerticalModal from '../Components/Modal/LogIn/LogInVerticalModal';


export const toggle = () => {
    
}


const TestHome = () => {
    const [modalShowSignUp, setModalShowSignUp] = React.useState(false);
    const [modalShowLogIn, setModalShowLogIn] = React.useState(false);

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

      <SignUpVerticalModal
        show={modalShowSignUp}
        onHide={() => setModalShowSignUp(false)}
      />
      <LogInVerticalModal
        show={modalShowLogIn}
        onHide={() => setModalShowLogIn(false)}
      />
    </>
  );
}

export default TestHome;