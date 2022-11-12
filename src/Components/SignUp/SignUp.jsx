// imports
import React from 'react';
import {SignUpStyled} from "Components/SignUp/SignUp.styled";

/**
 * Component that displays SignUp button in Navbar'
 * @returns {React.Component}
 */
const SignUp = ({setModalShowSignUp}) => {
    return (
        <SignUpStyled id={'sign-up-button-from-HomePage'} onClick={() => setModalShowSignUp(true)}
                      variant="outline-primary rounded-pill h-4">Sign Up</SignUpStyled>
    );
};

export default SignUp;
