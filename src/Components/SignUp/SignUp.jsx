import React from 'react';
import {SignUpStyled} from "Components/SignUp/SignUp.styled";

const SignUp = () => {
    const alertSignUp = () => {
        alert("Welcome on Board!");
    }
    return (
        <>
            <SignUpStyled onClick={alertSignUp} variant="outline-primary rounded-pill h-4">Sign Up</SignUpStyled>
        </>


    );
};

export default SignUp;
