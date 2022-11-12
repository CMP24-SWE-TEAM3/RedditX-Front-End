// imports
import React from 'react';
import {SignUpStyled} from "Components/SignUp/SignUp.styled";

/**
 * Component that displays SignUp button in Navbar'
 * @returns {React.Component}
 */
const SignUp = () => {
    const alertSignUp = () => {
        alert("Welcome on Board!");
    }
    return (
        <SignUpStyled id={'sign-up-button-from-HomePage'} onClick={alertSignUp} variant="outline-primary rounded-pill h-4">Sign Up</SignUpStyled>
    );
};

export default SignUp;
