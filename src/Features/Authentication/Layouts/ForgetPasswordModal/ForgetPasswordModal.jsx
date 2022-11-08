/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import FormInput from "Features/Authentication/Components/FormInput/FormInput";

import Button from "Features/Authentication/Components/Button/Button";

import LoadingSpinner from "Features/Authentication/Components/LoadingSpinner/LoadingSpinner";

import Checked from "Features/Authentication/Components/Checked/Checked";

import { forgetPasswordApi } from "Features/Authentication/Services/authApi";

import axios from "API/axios";

import useFetchFunction from "Hooks/useFetchFunction";

import {
  AuthContainer,
  ButtonsContainer,
  ErrorParagraph,
  AuthParagraph,
  AuthHeader,
  Forget,
} from "./ForgetPasswordModal.styled";

const USER_REGEX = /^[A-z0-9-_]{3,20}$/;

const USER_EMAIL =
  /[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9._-]{3,}[.]{1}[a-zA-Z0-9._-]{2,}/;

/**
 * ForgetPasswordModal component that is used in Login Component
 * @param {boolean} validEmail Prop to know if the email is valid or not
 * @param {Function} setValidEmail Function to set the validity of the email
 * @param {Object} formFields Object contain the values of input fields
 * @param {Function} setFormFields Function to update the values of input fields
 * @param {Function} setUserNameScreen Function to set the state of userNameScreen
 * @param {boolean} validName Prop to know if the userName is valid or not
 * @param {Function} setValidName Function to set the validity of the userName
 * @param {boolean} passwordScreen Prop to know if we are in the password screen or not
 * @param {Function} setPasswordScreen Function to set the state of passwordScreen
 * @param {boolean} initialFocus Prop to know if the user made at least one focus on the input field or not
 * @param {Function} setInitialFocus Function to set the state of initialFocus
 * @param {Function} setErrMsg Function to set the error message
 * @param {boolean} isLoading Prop to know if there is a loading operation or not
 * @param {Function} setIsLoading Function to set the state of loading operation
 * @param {boolean} finishedLoading Prop to know if the loading finished with true or not
 * @param {Function} setFinishedLoading Function to set the state of finishedLoading
 * @returns {React.Component}  ForgetPasswordModal component that is used in Login Component
 */

const ForgetPasswordModal = ({
  validEmail,
  setValidEmail,
  formFields,
  setFormFields,
  setUserNameScreen,
  validName,
  setValidName,
  passwordScreen,
  setPasswordScreen,
  initialFocus,
  initialFocus2,
  setInitialFocus,
  setInitialFocus2,
  setErrMsg,
}) => {
  const { userName, email } = formFields;


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
   * the error message from forget Password
   */
  const [forgetPasswordErrorMsg, setForgetPasswordErrorMsg] = useState("");
  /**
   * state to set the error message from forget Password
   */
  const [showForgetPasswordErrorMsg, setShowForgetPasswordErrorMsg] =
    useState(false);

  /**
   * state to know if the email sent or not
   */
  const [emailSent, setEmailSent] = useState(false);

  /**
   * useEffect for userName field to check if the userName that the user entered is valid or not
   */
  useEffect(() => {
    if (userName.length > 0) {
      setInitialFocus(false);
    }
    setValidName(USER_REGEX.test(userName));
    setShowForgetPasswordErrorMsg(false);
  }, [userName]);

  /**
   * useEffect for email field to check if the email that the user entered is valid or not
   */
  useEffect(() => {
    if (email.length > 0) {
      setInitialFocus(false);
      setErrMsg("Not a valid email address");
    } else if (email.length === 0) {
      setErrMsg("Please enter an email address to continue");
    }

    if (userName.length === 0) {
      setErrMsg("Username must be between 3 and 20 characters");
    }
    setValidEmail(USER_EMAIL.test(email));
    setShowForgetPasswordErrorMsg(false);
  }, [email]);

  /**
   * Function to handle the submit of the form of forgetPassword
   * @param {*} event
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (wantSubmit) {
      //setIsLoading(true);

      // const response = await forgetPasswordApi(
      //   email,
      //   userName,
      //   setForgetPasswordErrorMsg,
      //   setShowForgetPasswordErrorMsg
      // );

      // if (response) {
      //   setEmailSent(true);
      //   setFinishedLoading(true);
      // }


      dataFetch({
        axiosInstance: axios,
        method: "post",
        url: "/login/forget",
        requestConfig: {
          data: {
            email: email,
            username: userName,
            operation: false,
          },
        },
      });

      if (!error) {
        setEmailSent(true);
        setFinishedLoading(true);
      }


      setWantSubmit(false);

     // setIsLoading(false);
    }
  };

  /**
   * Function to handle any change on the input field of the forgetPassword form (check if the userName or the email or the password is valid or not)
   * @param {*} event
   */

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "userName") {
      setValidName(USER_REGEX.test(userName));
    }
    if (name === "email") {
      setValidEmail(USER_EMAIL.test(email));
    }

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <>
      {
        <AuthContainer userNameScreen={!passwordScreen}>
          <AuthHeader>Reset your password</AuthHeader>
          <AuthParagraph>
            Tell us the username and email address associated with your Reddit
            account, and we’ll send you an email with a link to reset your
            password.
          </AuthParagraph>
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
            {error && (
              <ErrorParagraph
                valid={!error || initialFocus}
              >
                {error}
              </ErrorParagraph>
            )}
            <FormInput
              label="Email"
              valid={validEmail}
              initialFocus={initialFocus2}
              showIcon={true}
              type="email"
              onChange={handleChange}
              name="email"
              value={email}
              onFocus={() => {
                setInitialFocus2(false);
              }}
            />

            <ErrorParagraph valid={validEmail || initialFocus2}>
              not a valid email address
            </ErrorParagraph>

            <Forget>
              Forget your{" "}
              <button
                onClick={() => {
                  setInitialFocus(true);
                  setPasswordScreen(false);
                  setUserNameScreen(true);
                  setErrMsg("Not a valid email address");
                }}
              >
                username?
              </button>{" "}
            </Forget>

            <ButtonsContainer>
              {!isLoading && !finishedLoading && (
                <Button
                  disabled={!validName || !validEmail}
                  valid={validName && validEmail}
                  type="submit"
                  onClick={() => {
                    setWantSubmit(true);
                  }}
                >
                  Reset password
                </Button>
              )}
              {isLoading  && (
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
            <br></br>
            {emailSent && (
              <ErrorParagraph
                validColor={emailSent}
                valid={!emailSent || initialFocus}
              >
                Thanks! If your Reddit username and email address match, you'll
                get an email with a link to reset your password shortly.
              </ErrorParagraph>
            )}
            <Forget>
              Don't have an email or need assistance logging <br /> in?
              <button onClick={() => {}}>Get Help</button>{" "}
            </Forget>
            <br></br>
            <Forget>
              {/* Want to login? */}
              <button
                onClick={() => {
                  setFinishedLoading(false);
                  // setIsLoading(false);
                  setInitialFocus(true);
                  setUserNameScreen(false);
                  setPasswordScreen(false);
                }}
              >
                Log in
              </button>{" "}
            </Forget>
          </form>
        </AuthContainer>
      }
    </>
  );
};

export default ForgetPasswordModal;
