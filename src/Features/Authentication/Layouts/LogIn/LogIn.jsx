import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

import FacebookLogin from "react-facebook-login";

import FormInput from "Features/Authentication/Components/FormInput/FormInput";

import Button from "Features/Authentication/Components/Button/Button";


import {
  AuthContainer,
  ButtonsContainer,
  Privacy,
  ErrorParagraph,
  SignInWithGoogle,
  SignInWithFacebook,
  OrHeader,
  AuthParagraph,
  AuthHeader
} from "./LogIn.styled";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,20}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const defaultFormFields = {
  email: "",
  password: "",
};

const LogIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);
  const [initialFocus, setInitialFocus] = useState(true);
  const { email, password } = formFields;

  useEffect(() => {
    if (email.length > 0) {
      setInitialFocus(false);
      console.log("Entered");
    }
    setValidName(USER_REGEX.test(email));
  }, [user]);

  

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setValidName(USER_REGEX.test(email));
      //console.log(validName);
    }
    setFormFields({ ...formFields, [name]: value });
  };

  const handleCallbackResponse = (response) => {
    let userObject = jwt_decode(response.credential);
    console.log(userObject);
  };

  useEffect(() => {
    /* global google */

    google.accounts.id.initialize({
      client_id:
        "598360538255-siv9rljce260ek4mvdsu2fk63h3u1g3b.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  const responseFacebook = (response) => {
    console.log(response);
  };

 

  return (
    <>
      {
        <AuthContainer>
          <AuthHeader>Log In</AuthHeader>
          <AuthParagraph>
            By continuing, you agree are setting up a Reddit account and agree
            to our <Privacy>User Agreement</Privacy> and{" "}
            <Privacy>Privacy Policy</Privacy>.
          </AuthParagraph>
          <SignInWithGoogle>
            <div id="signInDiv"></div>
          </SignInWithGoogle>

          <SignInWithFacebook>
            <FacebookLogin
              appId="648981979946188"
              autoLoad={true}
              fields="name,email,picture"
              callback={responseFacebook}
              cssClass="my-facebook-button-class"
              icon="fa-facebook"
            />
          </SignInWithFacebook>

          <OrHeader>
            <span>OR</span>
          </OrHeader>

          <form onSubmit={handleSubmit}>
            <FormInput
              valid={validName}
              showIcon={true}
              label="Username"
              type="text"
              required
              onChange={handleChange}
              name="email"
              value={email}
              onFocus={() => {
                setUserFocus(true);
                setInitialFocus(false);
              }}
              onBlur={() => setUserFocus(false)}
            />

            <ErrorParagraph valid={validName || initialFocus}>
              Username must be between 3 and 20 characters
            </ErrorParagraph>

            <FormInput
              label="Password"
              showIcon={true}
              type="password"
              required
              onChange={handleChange}
              name="password"
              value={password}
            />
            <ButtonsContainer>
              <Button type="submit">Log In</Button>
            </ButtonsContainer>
          </form>
        </AuthContainer>
      }
    </>
  );
};

export default LogIn;
