import React, {useContext} from 'react';
import {LoginStyled} from "./LoginButton.styled";
import AuthContext from "Contexts/auth-context";

/**
 * Component  that displays the login button
 * @returns {Component.React} returns a login button component
 */
const LoginButton = () => {
    /**
     * ctx is the context  for the login button component that will be disappeared after the login button has been clicked
     * to show navigation in authenticated state
     *
     * @type {{onLogin: function(), onLogout: function(), isLoggedIn: boolean}}
     */
    const ctx = useContext(AuthContext);
    return (
        <>
            <LoginStyled id={'login-button-from-HomePage'} onClick={() => {
                ctx.onLogin()
            }} variant="outline-primary rounded-pill h-4">Log In</LoginStyled>
        </>

    );
};

export default LoginButton;
