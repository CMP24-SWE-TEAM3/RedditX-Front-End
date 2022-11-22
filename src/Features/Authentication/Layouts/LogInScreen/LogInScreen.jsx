/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import FormInput from "Features/Authentication/Components/FormInput/FormInput";

import Button from "Features/Authentication/Components/Button/Button";

import LoadingSpinner from "Features/Authentication/Components/LoadingSpinner/LoadingSpinner";

import Checked from "Features/Authentication/Components/Checked/Checked";

import { useAuth } from "Features/Authentication/Contexts/Authentication";

import useFetchFunction from "Hooks/useFetchFunction";

import {
  loginApi,
  loginWithGoogle,
  loginWithFacebook,
} from "Features/Authentication/Services/authApi";

import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

import {
  signInWithGooglePopup,
  signInWithFacebookPopup,
} from "Features/Authentication/Utils/Firebase";
import { useNavigate } from "react-router-dom";

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

const USER_REGEX = /^[A-z0-9-_]{3,20}$/;
const PWD_REGEX = /^[A-z0-9-_`~!@#$%^&*()_|+\-=?;:'",.<>]{8,20}$/;

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
 * @param {boolean} isLoading Prop to know if there is a loading operation or not
 * @param {Function} setIsLoading Function to set the state of loading operation
 * @param {boolean} finishedLoading Prop to know if the loading finished with true or not
 * @param {Function} setFinishedLoading Function to set the state of finishedLoading
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
  setModalShowLogIn,
}) => {
  const auth = useAuth();

  const [data, error, isLoading, dataFetch] = useFetchFunction();

  const { userName, password } = formFields;

  /**
   * state to know what error message should be shown
   */
  const [finishedLoading, setFinishedLoading] = useState(false);
  /**
   * state to if the user submitted the form or not
   */
  const [wantSubmit, setWantSubmit] = useState(false);


  const [signupSubmit, setSignupSubmit] = useState(false);

  const navigate = useNavigate();
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
      setInitialFocus2(false);
    }
    setValidPassword(PWD_REGEX.test(password));
  }, [password]);

  /**
   * Function to handle the submit of the form of login
   * @param {*} event
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (wantSubmit) {
      loginApi(dataFetch, {
        type: "bare email",
        username: "t2_"+userName,
        password: password,
      });

      setSignupSubmit(true);

      // if (!error) {
      //   setFinishedLoading(true);
      //   auth.login(data);
      //   setModalShowLogIn(false);
      //   navigate("/");
      // }

      setWantSubmit(false);
    }
  };


  useEffect(() => {
    if (signupSubmit) {
      setSignupSubmit(false);
     // console.log("out useEffect", data);

      if (!error && data.token) {
        setFinishedLoading(true);
        auth.login(data);
        setModalShowLogIn(false);
        navigate("/");
      }
    }
  }, [data]);

  /**
   * Function to handle any change on the input field of the login form (check if the userName or the email or the password is valid or not)
   * @param {*} event
   */

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "userName") {
      setValidName(USER_REGEX.test(userName));
      setInitialFocus(false);
    }
    if (name === "password") {
      setValidPassword(PWD_REGEX.test(password));
      setInitialFocus2(false);
    }
    setFormFields({ ...formFields, [name]: value });
  };

  /**
   * Function to handle the sing in with google
   */
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();

    loginWithGoogle(dataFetch, {
      type: "google",
      googleOrFacebookToken: user.accessToken,
    });

    if (!error) {
      setFinishedLoading(true);
      auth.login(data);
      navigate("/");
    }
  };

  /**
   * Function to handle sign in with facebook
   */
  const logFacebookUser = async () => {
    const { user } = await signInWithFacebookPopup();

    loginWithFacebook(dataFetch, {
      type: "facebook",
      googleOrFacebookToken: user.accessToken,
    });

    console.log("error : " + error);

    if (!error) {
      setFinishedLoading(true);
      auth.login(data);
      navigate("/");
    }
  };

  return (
    <>
      {
        <AuthContainer id="login-modal" userNameScreen={userNameScreen}>
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
                data-testid="username"
                id="login-username"
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

              <ErrorParagraph
                data-testid="username-error"
                id="username-error"
                valid={validName || initialFocus}
              >
                Username must be between 3 and 20 characters
              </ErrorParagraph>

              {error && <ErrorParagraph valid={!error}>{error}</ErrorParagraph>}

              <FormInput
                data-testid="password"
                id="login-password"
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
                  data-testid="forgetUserName"
                  id="forgetUserName"
                  onClick={() => {
                    // setIsLoading(false);
                    setFinishedLoading(false);
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
                  data-testid="forgetPassword"
                  id="forgetPassword"
                  onClick={() => {
                    // setIsLoading(false);
                    setFinishedLoading(false);
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
                {!isLoading && !finishedLoading && (
                  <Button
                    disabled={!validName || !validPassword}
                    valid={validName && validPassword}
                    type="submit"
                    onClick={() => {
                      setWantSubmit(true);
                    }}
                  >
                    Log In
                  </Button>
                )}
                {isLoading && (
                  <Button disabled valid={true} type="submit">
                    <LoadingSpinner></LoadingSpinner>
                  </Button>
                )}
                {!isLoading && finishedLoading && (
                  <Button disabled valid={true} type="submit">
                    <Checked></Checked>
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
