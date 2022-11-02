/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import FacebookLogin from "react-facebook-login";

import FormInput from "Features/Authentication/Components/FormInput/FormInput";

import Button from "Features/Authentication/Components/Button/Button";

import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

import {
  signInWithGooglePopup,
  signInWithFacebookPopup,
} from "Features/Authentication/Utils/Firebase";

import {
  AuthContainer,
  ButtonsContainer,
  Privacy,
  ErrorParagraph,
  SignInWithGoogle,
  SignInWithFacebook,
  OrHeader,
  AuthParagraph,
  AuthHeader,
  Forget,
  AuthContainerDiv,
} from "./LogInScreen.styled";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,20}$/;
const PWD_REGEX = /^[A-z][A-z0-9-_]{8,20}$/;

/**
 * LoginScreen component that is used in Login Component
 * @param {Object} formFields Object contain the values of input fields
 * @param {Function} setFormFields Function to update the values of input fields
 * @param {boolean} validName Prop to know if the userName is valid or not
 * @param {Function} setValidName Function to set the validity of the userName
 * @param {boolean} validPassword Prop to know if the password is valid or not
 * @param {Function} setValidPassword Function to set the validity of the password
 * @param {boolean} userNameScreen Prop to know if we are in the userName screen or not
 * @param {Function} setUserNameScreen Function to set the state of userNameScreen
 * @param {boolean} passwordScreen Prop to know if we are in the password screen or not
 * @param {Function} setPasswordScreen Function to set the state of passwordScreen
 * @param {boolean} initialFocus Prop to know if the user made at least one focus on the input field or not
 * @param {Function} setInitialFocus Function to set the state of initialFocus
 * @param {Function} setErrMsg Function to set the error message
 * @returns {React.Component}  LoginScreen component that is used in Login Component
 */

const LogInScreen = ({
  formFields,
  setFormFields,
  validName,
  setValidName,
  validPassword,
  setValidPassword,
  userNameScreen,
  setUserNameScreen,
  passwordScreen,
  setPasswordScreen,
  initialFocus,
  initialFocus2,
  setInitialFocus,
  setInitialFocus2,
  setErrMsg,
}) => {
  const { userName, password } = formFields;

  /**
   * useEffect for userName field to check if the userName that the user entered is valid or not
   */
  useEffect(() => {
    if (userName.length > 0) {
      setInitialFocus(false);
    }
    setValidName(USER_REGEX.test(userName));
  }, [userName]);

  /**
   * useEffect for password field to check if the userName that the user entered is valid or not
   */
  useEffect(() => {
    if (password.length > 0) {
      setInitialFocus(false);
    }
    setValidPassword(PWD_REGEX.test(password));
  }, [password]);

  /**
   * Function to handle the submit of the form of login
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
    if (name === "userName") {
      setValidName(USER_REGEX.test(userName));
    }
    if (name === "password") {
      setValidPassword(PWD_REGEX.test(password));
    }
    setFormFields({ ...formFields, [name]: value });
  };

  /**
   * Function to handle the response coming from sign in with google
   * @param {*} response
   */
  const handleCallbackResponse = (response) => {};

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
  const responseFacebook = (response) => {};

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
  };
  const logFacebookUser = async () => {
    const { user } = await signInWithFacebookPopup();
   // console.log(user);
  };

  return (
    <>
      {
        <AuthContainer userNameScreen={userNameScreen}>
          <AuthContainerDiv userNameScreen={userNameScreen || passwordScreen}>
            <AuthHeader>Log In</AuthHeader>
            <AuthParagraph>
              By continuing, you agree are setting up a Reddit account and agree
              to our <Privacy>User Agreement</Privacy> and{" "}
              <Privacy>Privacy Policy</Privacy>.
            </AuthParagraph>
            <SignInWithGoogle>
              {/* <div id="signInDiv"></div> */}
              <button onClick={() => logGoogleUser()}>
                <FcGoogle size={22} />
                <span> Continue With Google</span>
              </button>
            </SignInWithGoogle>

            <SignInWithFacebook>
              <button onClick={() => logFacebookUser()}>
                <BsFacebook size={22} />
                <span> Continue With Facebook</span>
              </button>
            </SignInWithFacebook>

            <OrHeader>
              <span>OR</span>
            </OrHeader>

            <form onSubmit={handleSubmit}>
              <FormInput
                valid={validName}
                initialFocus={initialFocus}
                showIcon={true}
                label="Username"
                type="text"
                onChange={handleChange}
                name="userName"
                value={userName}
                onFocus={() => {
                  setInitialFocus(false);
                }}
              />

              {/* Show error message if the userName is not valid and the user made a focus on the it's input field */}
              <ErrorParagraph valid={validName || initialFocus}>
                Username must be between 3 and 20 characters
              </ErrorParagraph>

              <FormInput
                label="Password"
                valid={validPassword}
                initialFocus={initialFocus2}
                showIcon={true}
                type="password"
                onChange={handleChange}
                name="password"
                value={password}
                onFocus={() => {
                  setInitialFocus2(false);
                }}
              />

              <Forget>
                Forget your{" "}
                <button
                  onClick={() => {
                    setInitialFocus(true);
                    setUserNameScreen(true);
                    setPasswordScreen(false);

                    setErrMsg("Not a valid email address");
                  }}
                >
                  username
                </button>{" "}
                or{" "}
                <button
                  onClick={() => {
                    setInitialFocus(true);
                    setUserNameScreen(false);
                    setPasswordScreen(true);

                    setErrMsg("Not a valid email address");
                  }}
                >
                  password
                </button>
              </Forget>

              <ButtonsContainer>
                {/** Show an enabled button if the password and userName are valid */}
                {validName && validPassword && (
                  <Button
                    valid={validName && validPassword}
                    type="button"
                    onClick={() => {}}
                  >
                    Log In
                  </Button>
                )}

                {/** Show an disabled button if the password or userName are not valid */}

                {(!validName || !validPassword) && (
                  <Button
                    disabled
                    valid={validName && validPassword}
                    type="button"
                  >
                    Log In
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

export default LogInScreen;
