/* eslint-disable no-unused-vars */
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import { useState, useEffect } from "react";

import FormInputPageCom from "Features/Authentication/Components/FormInputPageCom/FormInputPageCom";
import Button from "Features/Authentication/Components/Button/Button";
import LoadingSpinner from "Features/Authentication/Components/LoadingSpinner/LoadingSpinner";

import Checked from "Features/Authentication/Components/Checked/Checked";

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
const PWD_REGEX = /^[A-z0-9-_`~!@#$%^&*()_|+\-=?;:'",.<>]{8,20}$/;

const defaultFormFields = {
  userName: "",
  password: "",
};

/**
 * LoginPageCom component that is used in Login page
 * @returns {React.Component}  LoginPageCom component that is used in Login page
 */
const LogInPageCom = () => {
  /**
   * Custom hook
   */
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
  const [finishedLoading, setFinishedLoading] = useState(false);
  /**
   * state to if the user submitted the form or not
   */
  const [wantSubmit, setWantSubmit] = useState(false);

  const { userName, password } = formFields;

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
  const handleSubmit = (event) => {
    event.preventDefault();
    if (wantSubmit) {
      loginApi(dataFetch, {
        type: "bare email",
        username: "t2_" + userName,
        password: password,
      });
      setSignupSubmit(true);

      // if (data.accessToken !== undefined) {
      //   setFinishedLoading(true);
      //   auth.login(data);
      //   navigate("/");
      // }

      //console.log("data : "+data);

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
    }

    if (name === "password") {
      setValidPassword(PWD_REGEX.test(password));
    }
    setFormFields({ ...formFields, [name]: value });
  };

  /**
   * Function to handle the sing in with google
   */
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();

    loginWithGoogle(dataFetch, {
      type: "gmail",
      googleOrFacebookToken: user.accessToken,
    });

    setSignupSubmit(true);

    // console.log("data from google : " + data);

    // if (!error) {
    //   setFinishedLoading(true);
    //   auth.login(data);
    //   navigate("/");
    // }
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

    setSignupSubmit(true);

    // if (!error) {
    //   setFinishedLoading(true);
    //   auth.login(data);
    //   navigate("/");
    // }
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
                // required
                data-testid="username"
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

              <ErrorParagraph
                data-testid="username-error"
                id="username-error"
                valid={validName || initialFocus}
              >
                Username must be between 3 and 20 characters
              </ErrorParagraph>

              {error && !isLoading && (
                <ErrorParagraph id="username-error" valid={!error}>
                  {error} 
                </ErrorParagraph>
              )}

              <FormInputPageCom
                //  required
                data-testid="password"
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
                {
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
                    {!isLoading && <span>Log In</span>}
                    {isLoading && <LoadingSpinner />}
                  </Button>
                }
              </ButtonsContainer>

              <Forget>
                Forget your{" "}
                <button
                  id="forget-username"
                  onClick={() => {
                    navigate("/forget-username");
                  }}
                >
                  username
                </button>{" "}
                or{" "}
                <button
                  id="forget-password"
                  onClick={() => {
                    navigate("/forget-password");
                  }}
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
                  onClick={() => {
                    navigate("/register");
                  }}
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
