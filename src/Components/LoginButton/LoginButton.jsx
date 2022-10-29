import React, {useContext} from 'react';
import {LoginStyled} from "./LoginButton.styled";
import AuthContext from "Contexts/auth-context";

const LoginButton = () => {
    const ctx = useContext(AuthContext);
    const alertLoginButton = () => {
        alert("You have been logged in!");
    }
    return (
        <>
            <LoginStyled  onClick={()=>{ctx.onLogin()}} variant="outline-primary rounded-pill h-4">Log In</LoginStyled>
        </>

    );
};

export default LoginButton;
