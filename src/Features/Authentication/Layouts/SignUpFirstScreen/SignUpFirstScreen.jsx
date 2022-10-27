/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

import FacebookLogin from "react-facebook-login";

import FormInput from "Features/Authentication/Components/FormInput/FormInput";
import Button from "../../Components/Button/Button";




import {
  ButtonsContainer,
  Privacy,
  ErrorParagraph,
  SignInWithGoogle,
  SignInWithFacebook,
  OrHeader,
  AuthParagraph,
  AuthHeader,
} from "../LogIn/LogIn.styled";

import { AuthContainer, AuthContainerDiv } from "./SignUpFirstScreen.styled";

const USER_EMAIL =
  /[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9._-]{3,}[.]{1}[a-zA-Z0-9._-]{2,}/;



/**
 * SignUpFirstScreen component that is used in Signup Component
 * @returns {React.Component}  SignUpFirstScreen component that is used in Signup Component
 */

const SignUpFirstScreen = ({
  validEmail,
  setValidEmail,
  secondScreen,
  setSecondScreen,
  initialFocus,
  setInitialFocus,
  changeUserName,
  formFields,
  setFormFields
}) => {
 

  /**
   * state to know what error message should be shown
   */
  const [errMsg, setErrMsg] = useState("");
  const { email } = formFields;

  /**
   * useEffect for email field to check if the email that the user entered is valid or not
   */
  useEffect(() => {
    if (email.length > 0) {
      setInitialFocus(false);
      setErrMsg("Not a valid email address");
    } else if (email.length === 0) {
      setErrMsg("Please enter an email address to continue");
      // console.log(errMsg);
    }

    setValidEmail(USER_EMAIL.test(email));
  }, [email]);

  /**
   * Function to handle the submit of the form of signup
   * @param {*} event
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  /**
   * Function to handle any change on the input field of the login form (check if the userName or the email or the password is valid or not)
   * @param {*} event
   */
  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "email") {
      setValidEmail(USER_EMAIL.test(email));
    }

    setFormFields({ ...formFields, [name]: value });
  };

  /**
   * Function to handle the response coming from sign in with google
   * @param {*} response
   */
  const handleCallbackResponse = (response) => {
    let userObject = jwt_decode(response.credential);
    console.log(userObject);
  };

  /**
   * Function to check email by sending request to the api and make sure that the email is good to show the second screen after that
   * @param {string} mail The email that the user entered
   */
  const checkEmail = (mail) => {
    /* After mail checked */

    setInitialFocus(true);
    setSecondScreen(true);
    changeUserName();
  };

  /**
   * Adding some configurations to the signIn with google feature
   */
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

  /**
   * Function to handle the response coming from sign in with facebook
   * @param {*} response
   */
  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    <>
      {
        <AuthContainer secondScreen={secondScreen}>
          <AuthContainerDiv secondScreen={secondScreen}>
            <AuthHeader>Sign Up</AuthHeader>
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
                autoLoad={false}
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
                valid={validEmail}
                initialFocus={initialFocus}
                showIcon={true}
                label="Email"
                type="email"
                required
                onChange={handleChange}
                name="email"
                value={email}
                onFocus={() => {
                  setInitialFocus(false);
                }}
              />

              {/* Show error message if the email is not valid and the user made a focus on the it's input field */}
              <ErrorParagraph valid={validEmail || initialFocus}>
                {errMsg}
              </ErrorParagraph>

              <ButtonsContainer>
                {/** Show an enabled button if the email is valid */}
                {validEmail && (
                  <Button
                    valid={validEmail}
                    type="button"
                    onClick={() => checkEmail(email)}
                  >
                    Continue
                  </Button>
                )}

                {/** Show an disabled button if the email is not valid */}
                {!validEmail && (
                  <Button disabled valid={validEmail} type="button">
                    Continue
                  </Button>
                )}
              </ButtonsContainer>
            </form>
          </AuthContainerDiv>
        </AuthContainer>
      }
    </>
  );
};

export default SignUpFirstScreen;
