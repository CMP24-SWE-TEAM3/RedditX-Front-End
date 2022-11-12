/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import { useAuth } from "Features/Authentication/Contexts/Authentication";
import { useEffect, useState } from "react";

import { AiOutlineReload } from "react-icons/ai";

import ReCAPTCHA from "react-google-recaptcha";
import RandomUserName from "Features/Authentication/Utils/RandomUserName";

import FormInputPageCom from "Features/Authentication/Components/FormInputPageCom/FormInputPageCom";
import Button from "../../Components/Button/Button";
import PasswordStrength from "Features/Authentication/Components/PasswordStrength/PasswordStrength";
import GetPasswordStrength from "Features/Authentication/Utils/GetPasswordStrenght";

import LoadingSpinner from "Features/Authentication/Components/LoadingSpinner/LoadingSpinner";

import Checked from "Features/Authentication/Components/Checked/Checked";

import {
  signupApi,
  isUserNameAvailable,
} from "Features/Authentication/Services/authApi";

import axios from "API/axios";

import useFetchFunction from "Hooks/useFetchFunction";
import { useNavigate } from 'react-router-dom';

import {
  Group,
  ButtonsContainer,
  ErrorParagraph,
  FirstDiv,
  MidDiv,
  LastDiv,
  BackButton,
  RandomContainer,
  Reload,
  ReCAPTCHAContainer,
} from "./SignUpPageSecondScreen.styled";

const USER_NAME = /^[A-z0-9-_]{3,20}$/;
const PWD_REGEX = /^[A-z0-9-_]{8,20}$/;

/**
 * SignUpPageSecondScreen component that is used in Signup page
 *
 * @param {boolean} secondScreen Prop to know what screen should be shown (the choose email screen or choose userName and password screen)
 * @param {Function} setSecondScreen Function to set the state of secondScreen
 * @param {boolean} initialFocus Prop to know if the user made at least one focus on the input field or not
 * @param {Function} setInitialFocus Function to set the state of initialFocus
 * @param {Object} formFields Object contain the values of input fields
 * @param {Function} setFormFields Function to update the values of input fields
 * @param {String} errMsg The error message that appear under the input field
 * @param {Function} setErrMsg Function to set the error message
 * @param {Function} setValidUserName Function to set the validity of the userName
 * @param {boolean} validUserName Prop to know if the userName is valid or not
 * @param {boolean} notRobot Prop to know if the user passed the captcha or not
 * @param {Function} setNotRobot Function to set the state of notRobot
 * @param {number} passwordStrength The strength of the password
 * @param {Function} setPasswordStrength Function to set the strength of the password
 * @param {boolean} validPassword Prop to know if the password is valid or not
 * @param {Function} setValidPassword Function to set the validity of the password
 * @param {String} sug1 The random userName number 1
 * @param {String} sug2 The random userName number 2
 * @param {String} sug3 The random userName number 3
 * @param {String} sug4 The random userName number 4
 * @param {String} sug5 The random userName number 5
 * @param {Function} setSug1 Function to set the random userName number 1
 * @param {Function} setSug2 Function to set the random userName number 2
 * @param {Function} setSug3 Function to set the random userName number 3
 * @param {Function} setSug4 Function to set the random userName number 4
 * @param {Function} setSug5 Function to set the random userName number 5
 * @returns {React.Component}  SignUpPageSecondScreen component that is used in Signup page
 */

const SignUpPageSecondScreen = ({
  formFields,
  setFormFields,
  validUserName,
  setValidUserName,
  notRobot,
  setNotRobot,
  passwordStrength,
  setPasswordStrength,
  validPassword,
  setValidPassword,
  secondScreen,
  setSecondScreen,
  initialFocus,
  setInitialFocus,
  initialFocus2,
  setInitialFocus2,
  errMsg,
  setErrMsg,
  sug1,
  sug2,
  sug3,
  sug4,
  sug5,
  setSug1,
  setSug2,
  setSug3,
  setSug4,
  setSug5,
}) => {
  const auth = useAuth();
  const { email, userName, password } = formFields;

  const [data, error, isLoading, dataFetch] = useFetchFunction();

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
   * the error message from signup
   */
  const [signupErrorMsg, setSignupErrorMsg] = useState("");
  /**
   * state to set the error message from signup
   */
  const [showSignupErrorMsg, setShowSignupErrorMsg] = useState(false);
  /**
   * state to set the error message from signup
   */
  const [canReqAvailableUserName, setCanReqAvailableUserName] = useState(true);
  /**
   * state to set the error message from signup
   */
  const [availableUserName, setAvailableUserName] = useState(true);

  const navigate = useNavigate();
  /**
   * Function to handle the submit of the form of signup
   * @param {*} event
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (wantSubmit) {
      //setIsLoading(true);
      // const user = await signupApi(
      //   email,
      //   userName,
      //   password,
      //   setSignupErrorMsg,
      //   setShowSignupErrorMsg
      // );

      // if (user !== false) {
      //   setFinishedLoading(true);
      //   auth.login(user);
      // }

      dataFetch({
        axiosInstance: axios,
        method: "post",
        url: "/signup",
        requestConfig: {
          data: {
            type: "bare email",
            email: email,
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
   * useEffect for userName field to check if the userName that the user entered is valid or not
   */
  useEffect(() => {
    setErrMsg("Username must be between 3 and 20 characters");

    setValidUserName(USER_NAME.test(userName));

    setValidUserName(USER_NAME.test(userName));
    if (validUserName && canReqAvailableUserName) {
      setCanReqAvailableUserName(false);

      let searchUserName = "t2_" + userName;

      dataFetch({
        axiosInstance: axios,
        method: "get",
        url: "/api/username-available",

        requestConfig: {
          params: {
            username: searchUserName,
          },
        },
      });

      if (!error) {
        setAvailableUserName(true);
      } else {
        setAvailableUserName(false);
      }

      setCanReqAvailableUserName(true);
    }

    setShowSignupErrorMsg(false);
  }, [userName]);

  /**
   * useEffect for password field to check if the userName that the user entered is valid or not
   */
  useEffect(() => {
    if (password.length > 0) {
      setInitialFocus(false);
    }
    setValidPassword(PWD_REGEX.test(password));
    setPasswordStrength(GetPasswordStrength(password));
    setShowSignupErrorMsg(false);
  }, [password]);

  const handleChange = async (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    if (name === "password") {
      setPasswordStrength(GetPasswordStrength(password));
    }
  };

  const changeUserName = (name) => {
    setFormFields({ ...formFields, userName: name });
    setValidUserName(true);
  };
  const newRandomUserNames = () => {
    setSug1(RandomUserName());
    setSug2(RandomUserName());
    setSug3(RandomUserName());
    setSug4(RandomUserName());
    setSug5(RandomUserName());
  };

  /**
   * some configurations for the captcha
   */
  const grecaptchaObject = window.grecaptcha;
  window.recaptchaOptions = {
    useRecaptchaNet: true,
  };

  /**
   * Function to handle the captcha and set the state of notRobot to true
   * @param {boolean} value the value of captcha
   */
  const recaptchaHandler = (value) => {
    setNotRobot(true);
  };

  return (
    <>
      {secondScreen && (
        <div>
          <FirstDiv>
            <h2>Choose your username</h2>
            <p>
              Your username is how other community members will see you. This
              name will be used to credit you for things you share on Reddit.
              What should we call you?
            </p>
          </FirstDiv>

          <hr></hr>

          <form onSubmit={handleSubmit}>
            <MidDiv>
              <div>
                <Group secondScreen={secondScreen}>
                  <FormInputPageCom
                    id="userNameFieldSignUp"
                    valid={validUserName && availableUserName}
                    initialFocus={initialFocus}
                    label="USERNAME"
                    type="text"
                    required
                    showIcon={true}
                    onChange={handleChange}
                    name="userName"
                    value={userName}
                    onFocus={() => {
                      setInitialFocus(false);
                    }}
                  />
                </Group>

                <ErrorParagraph
                  id="userNameNotValidSignUp"
                  valid={validUserName || initialFocus}
                >
                  {errMsg}
                </ErrorParagraph>

                {error && (
                  <ErrorParagraph valid={!error}>{error}</ErrorParagraph>
                )}
                {/* {!availableUserName && (
                  <ErrorParagraph valid={availableUserName}>
                    Username is taken
                  </ErrorParagraph>
                )} */}
                {availableUserName && validUserName && (
                  <ErrorParagraph
                    validColor={availableUserName && validUserName}
                    valid={!availableUserName}
                  >
                    Nice username!
                  </ErrorParagraph>
                )}

                <Group secondScreen={secondScreen}>
                  <FormInputPageCom
                    id="passwordFieldSignUp"
                    valid={validPassword}
                    initialFocus={initialFocus2}
                    label="PASSWORD"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                    onFocus={() => setInitialFocus2(false)}
                  />
                  {!initialFocus2 && (
                    <span>
                      <PasswordStrength
                        strength={passwordStrength}
                      ></PasswordStrength>
                    </span>
                  )}
                </Group>

                {/* Show error message if the password is not valid and the user made a focus on the it's input field */}
                <ErrorParagraph
                  id="passwordNotValidSignUp"
                  valid={validPassword || initialFocus2}
                >
                  password should contain 8 to 20 characters
                </ErrorParagraph>

                <ReCAPTCHAContainer validEmail={validUserName && validPassword}>
                  <ReCAPTCHA
                    id="captchaButton"
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={recaptchaHandler}
                    grecaptcha={grecaptchaObject}
                  />
                </ReCAPTCHAContainer>
              </div>
              <div>
                <div>
                  Here are some username suggestions{" "}
                  <Reload
                    id="changeUserNameSuggestions"
                    onClick={() => {
                      newRandomUserNames();
                    }}
                  >
                    <AiOutlineReload />
                  </Reload>
                </div>
                <RandomContainer>
                  <p
                    id="userNameSuggestion1"
                    onClick={() => {
                      changeUserName(sug1);
                      setAvailableUserName(true);
                    }}
                  >
                    {sug1}
                  </p>
                  <p
                    id="userNameSuggestion2"
                    onClick={() => {
                      changeUserName(sug2);
                      setAvailableUserName(true);
                    }}
                  >
                    {sug2}
                  </p>
                  <p
                    id="userNameSuggestion3"
                    onClick={() => {
                      changeUserName(sug3);
                      setAvailableUserName(true);
                    }}
                  >
                    {sug3}
                  </p>
                  <p
                    id="userNameSuggestion4"
                    onClick={() => {
                      changeUserName(sug4);
                      setAvailableUserName(true);
                    }}
                  >
                    {sug4}
                  </p>
                  <p
                    id="userNameSuggestion5"
                    onClick={() => {
                      changeUserName(sug5);
                      setAvailableUserName(true);
                    }}
                  >
                    {sug5}
                  </p>
                </RandomContainer>
              </div>
            </MidDiv>
            <LastDiv>
              <BackButton
                id="backInSignUpFirstScreen"
                onClick={() => {
                  setSecondScreen(false);
                }}
              >
                BACK
              </BackButton>
              <ButtonsContainer>
                {!finishedLoading && (
                  <Button
                    id="signUpButton"
                    page={true}
                    disabled={!validUserName || !validPassword || !notRobot}
                    valid={
                      validUserName &&
                      validPassword &&
                      notRobot &&
                      availableUserName
                    }
                    type="submit"
                    onClick={() => setWantSubmit(true)}
                  >
                    SIGN UP
                  </Button>
                )}

                {/* {isLoading && !finishedLoading && availableUserName &&(
                  <Button page={true} disabled valid={true} type="submit">
                    <LoadingSpinner></LoadingSpinner>
                  </Button>
                )} */}
                {finishedLoading && (
                  <Button page={true} disabled valid={true} type="submit">
                    <Checked></Checked>
                  </Button>
                )}
              </ButtonsContainer>
            </LastDiv>
          </form>
        </div>
      )}
    </>
  );
};

export default SignUpPageSecondScreen;
