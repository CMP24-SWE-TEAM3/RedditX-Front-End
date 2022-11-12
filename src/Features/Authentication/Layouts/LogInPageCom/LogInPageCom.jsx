/* eslint-disable no-unused-vars */
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import { useState, useEffect } from "react";

import FacebookLogin from "react-facebook-login";

import FormInputPageCom from "Features/Authentication/Components/FormInputPageCom/FormInputPageCom";
import Button from "Features/Authentication/Components/Button/Button";
import LoadingSpinner from "Features/Authentication/Components/LoadingSpinner/LoadingSpinner";

import Checked from "Features/Authentication/Components/Checked/Checked";

import axios from "API/axios";

import useFetchFunction from "Hooks/useFetchFunction";

import {
  loginApi,
  loginWithGoogle,
  loginWithFacebook,
} from "Features/Authentication/Services/authApi";

import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

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
} from "./LogInPageCom.styled";

const USER_REGEX = /^[A-z0-9-_]{3,20}$/;
const PWD_REGEX = /^[A-z0-9-_]{8,20}$/;

const defaultFormFields = {
  userName: "",
  password: "",
};

/**
 * LoginPageCom component that is used in Login page
 * @returns {React.Component}  LoginPageCom component that is used in Login page
 */
const LogInPageCom = () => {
  const [data, error, isLoading, dataFetch] = useFetchFunction();

  const auth = useAuth();
  /**
   * state to handel any change the user make in the input fields
   */
  const [formFields, setFormFields] = useState(defaultFormFields);

  /**
   * state to know if the userName is valid or not to control what to show to the user
   */
  const [validName, setValidName] = useState(false);

  /**
   * state to know if the password is valid or not to control what to show to the user
   */
  const [validPassword, setValidPassword] = useState(false);

  /**
   * state to know if the user focused on input field at least one time
   */
  const [initialFocus, setInitialFocus] = useState(true);
  /**
   * state to know if the user focused on input field at least one time
   */
  const [initialFocus2, setInitialFocus2] = useState(true);

  /**
   * state to know what error message should be shown
   */
  // const [isLoading, setIsLoading] = useState(false);

  /**
   * state to know what error message should be shown
   */
  const [finishedLoading, setFinishedLoading] = useState(false);
  /**
   * state to if the user submitted the form or not
   */
  const [wantSubmit, setWantSubmit] = useState(false);

  /**
   * state to if the user submitted the form or not
   */
  const [loginErrorMsg, setLoginErrorMsg] = useState("");
  /**
   * state to if the user submitted the form or not
   */
  const [showLoginErrorMsg, setShowLoginErrorMsg] = useState(false);

  const { userName, password } = formFields;

  const navigate = useNavigate();
  /**
   * useEffect for userName field to check if the userName that the user entered is valid or not
   */
  useEffect(() => {
    if (userName.length > 0) {
      setInitialFocus(false);
    }
    setValidName(USER_REGEX.test(userName));
    setShowLoginErrorMsg(false);
  }, [userName]);

  /**
   * useEffect for password field to check if the userName that the user entered is valid or not
   */
  useEffect(() => {
    if (password.length > 0) {
      setInitialFocus(false);
    }
    setValidPassword(PWD_REGEX.test(password));
    setShowLoginErrorMsg(false);
  }, [password]);

  /**
   * Function to handle the submit of the form of login
   * @param {*} event
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (wantSubmit) {
      //setIsLoading(true);

      // const user = await loginApi(
      //   userName,
      //   password,
      //   setLoginErrorMsg,
      //   setShowLoginErrorMsg
      // );

      // if (user !== false) {
      //   setFinishedLoading(true);
      //   auth.login(user);

      // }

      dataFetch({
        axiosInstance: axios,
        method: "post",
        url: "/login",
        requestConfig: {
          data: {
            type: "bare email",
            username: userName,
            password: password,
          },
        },
      });

      if (!error) {
        setFinishedLoading(true);
        auth.login(data);
      }
      // TODO: remove this
      auth.login({
        username: userName,
        token: "token",
        expiresIn: 3600,
      });
      navigate("/");

      setWantSubmit(false);

      // setIsLoading(false);
    }
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

    // const user2 = await loginWithGoogle(
    //   user.accessToken,
    //   setLoginErrorMsg,
    //   setShowLoginErrorMsg
    // );

    dataFetch({
      axiosInstance: axios,
      method: "post",
      url: "/login",
      requestConfig: {
        data: {
          type: "google",
          googleOrFacebookToken: user.accessToken,
        },
      },
    });

    if (!error) {
      setFinishedLoading(true);
      auth.login(data);
    }

    // if (user2 !== false) {
    //   auth.login(user2);
    // }
  };
  const logFacebookUser = async () => {
    const { user } = await signInWithFacebookPopup();
    // const user2 = await loginWithFacebook(
    //   user.accessToken,
    //   setLoginErrorMsg,
    //   setShowLoginErrorMsg
    // );

    // if (user2 !== false) {
    //   auth.login(user2);
    // }

    dataFetch({
      axiosInstance: axios,
      method: "post",
      url: "/login",
      requestConfig: {
        data: {
          type: "facebook",
          googleOrFacebookToken: user.accessToken,
        },
      },
    });

    if (!error) {
      setFinishedLoading(true);
      auth.login(data);
    }
  };

  return (
    <>
      {
        <AuthContainer>
          <AuthContainerDiv>
            <AuthHeader>Log In</AuthHeader>
            <AuthParagraph>
              By continuing, you agree to our <Privacy>User Agreement</Privacy>{" "}
              and <Privacy>Privacy Policy</Privacy>.
            </AuthParagraph>
            <SignInWithGoogle>
              {/* <div id="signInDiv"></div> */}
              <button onClick={() => logGoogleUser()}>
                <FcGoogle size={22} />
                <span> CONTINUE WITH GOOGLE</span>
              </button>
            </SignInWithGoogle>

            <SignInWithFacebook>
              <button onClick={() => logFacebookUser()}>
                <FaFacebookSquare size={22} />
                <span> CONTINUE WITH FACEBOOK</span>
              </button>
            </SignInWithFacebook>

            <OrHeader>
              <span>OR</span>
            </OrHeader>

            <form onSubmit={handleSubmit}>
              <FormInputPageCom
                required
                id="login-username"
                valid={validName}
                initialFocus={initialFocus}
                showIcon={true}
                label="USERNAME"
                type="text"
                onChange={handleChange}
                name="userName"
                value={userName}
                onFocus={() => {
                  setInitialFocus(false);
                }}
              />

              {/* Show error message if the userName is not valid and the user made a focus on the it's input field */}
              {!validName && !initialFocus && (
                <ErrorParagraph
                  id="username-error"
                  valid={validName || initialFocus}
                >
                  Username must be between 3 and 20 characters
                </ErrorParagraph>
              )}
              {error && (
                <ErrorParagraph id="username-error" valid={!error}>
                  {error}
                </ErrorParagraph>
              )}

              <FormInputPageCom
                required
                id="login-password"
                label="PASSWORD"
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

              <ButtonsContainer>
                {!isLoading && !finishedLoading && (
                  <Button
                    id="login-button"
                    page={true}
                    disabled={!validName || !validPassword}
                    valid={validName && validPassword}
                    type="submit"
                    onClick={() => {
                      setWantSubmit(true);
                    }}
                  >
                    LOG IN
                  </Button>
                )}

                {isLoading && (
                  <Button page={true} disabled valid={true} type="submit">
                    <LoadingSpinner></LoadingSpinner>
                  </Button>
                )}
                {!isLoading && finishedLoading && (
                  <Button page={true} disabled valid={true} type="submit">
                    <Checked></Checked>
                  </Button>
                )}
              </ButtonsContainer>

              <Forget>
                Forget your{" "}
                <button
                  id="forget-username"
                  onClick={() => navigate("/forget-username")}
                >
                  username
                </button>{" "}
                or{" "}
                <button
                  id="forget-password"
                  onClick={() => navigate("/forget-password")}
                >
                  password
                </button>
              </Forget>
              <br></br>
              <br></br>
              <Forget>
                New to Reddit?{" "}
                <button
                  id="signup-button"
                  onClick={() => navigate("/register")}
                >
                  SIGN UP
                </button>
              </Forget>
            </form>
          </AuthContainerDiv>
        </AuthContainer>
      }
    </>
  );
};

export default LogInPageCom;
