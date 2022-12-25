import React from "react";
import { LoginStyled } from "./LoginButton.styled";
// import AuthContext from "Contexts/auth-context";
/**
 * Component  that displays the login button
 * @returns {Component.React} returns a login button component
 */
const LoginButton = ({ setModalShowLogIn }) => {
  /**
     * ctx is the context  for the login button component that will be disappeared after the login button has been clicked
     * to show navigation in authenticated state
     *
     @param{setModalShowLogIn} - function which set modal show log in state true or false
     */
  return (
    <>
      <LoginStyled
        data-testid="loginId"
        id={"login-button-from-HomePage"}
        onClick={() => setModalShowLogIn(true)}
        variant="outline-primary rounded-pill h-4"
      >
        Log In
      </LoginStyled>
    </>
  );
};

export default LoginButton;
