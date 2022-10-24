import React from 'react';
import {LoginStyled} from "./LoginButton.styled";

const LoginButton = () => {
    const alertLoginButton = () => {
        alert("You have been logged in!");
    }
    return (
        <>
            <LoginStyled onClick={alertLoginButton} variant="outline-primary rounded-pill h-4">Log In</LoginStyled>>
        </>

    );
};

export default LoginButton;
