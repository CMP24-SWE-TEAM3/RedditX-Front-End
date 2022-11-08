/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import FormInput from "Features/Authentication/Components/FormInput/FormInput";

import Button from "Features/Authentication/Components/Button/Button";

import LoadingSpinner from "Features/Authentication/Components/LoadingSpinner/LoadingSpinner";

import Checked from "Features/Authentication/Components/Checked/Checked";

import { forgetUserNameApi } from "Features/Authentication/Services/authApi";

import axios from "API/axios";

import useFetchFunction from "Hooks/useFetchFunction";

import {
  AuthContainer,
  ButtonsContainer,
  ErrorParagraph,
  AuthParagraph,
  AuthHeader,
  Forget,
  ReCAPTCHAContainer,
} from "./ForgetUserNameModal.styled";

const USER_EMAIL =
  /[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9._-]{3,}[.]{1}[a-zA-Z0-9._-]{2,}/;

/**
 * ForgetUserNameModal component that is used in Login Component
 * @param {boolean} validEmail Prop to know if the email is valid or not
 * @param {Function} setValidEmail Function to set the validity of the email
 * @param {boolean} notRobot Prop to know if the user passed the captcha or not
 * @param {Function} setNotRobot Function to set the state of notRobot
 * @param {Object} formFields Object contain the values of input fields
 * @param {Function} setFormFields Function to update the values of input fields
 * @param {boolean} userNameScreen Prop to know if we are in the userName screen or not
 * @param {Function} setUserNameScreen Function to set the state of userNameScreen
 * @param {boolean} initialFocus Prop to know if the user made at least one focus on the input field or not
 * @param {Function} setInitialFocus Function to set the state of initialFocus
 * @param {String} errMsg The error message that appear under the input field
 * @param {Function} setErrMsg Function to set the error message
 * @param {boolean} isLoading Prop to know if there is a loading operation or not
 * @param {Function} setIsLoading Function to set the state of loading operation
 * @param {boolean} finishedLoading Prop to know if the loading finished with true or not
 * @param {Function} setFinishedLoading Function to set the state of finishedLoading
 * @returns {React.Component}  ForgetUserNameModal component that is used in Login Component
 */

const ForgetUserNameModal = ({
  validEmail,
  setValidEmail,
  notRobot,
  setNotRobot,
  formFields,
  setFormFields,
  userNameScreen,
  setUserNameScreen,
  initialFocus,
  setInitialFocus,
  errMsg,
  setErrMsg,
}) => {
  const { email } = formFields;

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
   * the error message from forget username
   */
  const [forgetUserNameErrorMsg, setForgetUserNameErrorMsg] = useState("");
  /**
   * state to set the error message from forget username
   */
  const [showForgetUserNameErrorMsg, setShowForgetUserNameErrorMsg] =
    useState(false);

  /**
   * state to know if the email sent or not
   */
  const [emailSent, setEmailSent] = useState(false);

  /**
   * some configurations for the captcha
   */
  const grecaptchaObject = window.grecaptcha;
  window.recaptchaOptions = {
    useRecaptchaNet: true,
  };

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
    setValidEmail(USER_EMAIL.test(email));
    setShowForgetUserNameErrorMsg(false);
  }, [email]);

  /**
   * Function to handle the submit of the form of forgetUserName
   * @param {*} event
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (wantSubmit) {
     // setIsLoading(true);



      // const response = await forgetUserNameApi(
      //   email,
      //   setForgetUserNameErrorMsg,
      //   setShowForgetUserNameErrorMsg
      // );

      // if (response) {
      //   setEmailSent(true);
      // }


      dataFetch({
        axiosInstance: axios,
        method: "post",
        url: "/login/forget",
        requestConfig: {
          data: {
            email: email,
            operation: true,
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
   * Function to handle any change on the input field of the forgetUserName form (check if the userName or the email or the password is valid or not)
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
   * Function to handle the captcha and set the state of notRobot to true
   * @param {boolean} value the value of captcha
   */

  const recaptchaHandler = (value) => {
    setNotRobot(true);
  };

  return (
    <>
      {
        <AuthContainer userNameScreen={!userNameScreen}>
          <br></br>
          <br></br>
          <br></br>
          <AuthHeader>Recover your username</AuthHeader>
          <AuthParagraph>
            Tell us the email address associated with your Reddit account, and
            we’ll send you an email with your username.
          </AuthParagraph>

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
              {/* {errMsg} */}
              Please enter an email address to continue
            </ErrorParagraph>

            {error && (
              <ErrorParagraph
                valid={!error || initialFocus}
              >
                {error}
              </ErrorParagraph>
            )}

            <ButtonsContainer>
              {!isLoading && !finishedLoading && (
                <Button
                  disabled={!validEmail || !notRobot}
                  valid={validEmail && notRobot}
                  type="submit"
                  onClick={() => {
                    setWantSubmit(true);
                  }}
                >
                  Email me
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

            {emailSent && !error&&(
              <ErrorParagraph
                validColor={emailSent}
                valid={!emailSent || initialFocus}
              >
                Thanks! If there are any Reddit accounts associated with that
                email address, you'll get an email with your username(s)
                shortly.
              </ErrorParagraph>
            )}
            <ReCAPTCHAContainer validEmail={validEmail}>
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={recaptchaHandler}
                grecaptcha={grecaptchaObject}
                size="normal"
              />
            </ReCAPTCHAContainer>
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

export default ForgetUserNameModal;
