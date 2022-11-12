/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

import { SiReddit } from "react-icons/si";

import ReCAPTCHA from "react-google-recaptcha";

import FormInputPageCom from "Features/Authentication/Components/FormInputPageCom/FormInputPageCom";

import Button from "Features/Authentication/Components/Button/Button";

import LoadingSpinner from "Features/Authentication/Components/LoadingSpinner/LoadingSpinner";

import Checked from "Features/Authentication/Components/Checked/Checked";

import { forgetUserNameApi } from "Features/Authentication/Services/authApi";

import axios from "API/axios";

import useFetchFunction from "Hooks/useFetchFunction";
import { useNavigate } from "react-router-dom";
import {
  AuthContainer,
  ButtonsContainer,
  ErrorParagraph,
  AuthParagraph,
  AuthHeader,
  Forget,
  ReCAPTCHAContainer,
  RedditIcon,
} from "./ForgetUserName.styled";
import { Navigate } from "react-router-dom";

const USER_EMAIL =
  /[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9._-]{3,}[.]{1}[a-zA-Z0-9._-]{2,}/;

const defaultFormFields = {
  email: "",
};

/**
 * ForgetUserName component that is used in forget userName page
 * @returns {React.Component}  ForgetUserName component that is used in forget userName page
 */

const ForgetUserName = () => {
  const [data, error, isLoading, dataFetch] = useFetchFunction();
  /**
   * state to know if the email is valid or not to control what to show to the user
   */
  const [validEmail, setValidEmail] = useState(false);

  /**
   * state to know if the user passed the captcha or not
   */
  const [notRobot, setNotRobot] = useState(false);

  /**
   * state to handel any change the user make in the input fields
   */
  const [formFields, setFormFields] = useState(defaultFormFields);

  /**
   * state to know if the user focused on input field at least one time
   */
  const [initialFocus, setInitialFocus] = useState(true);

  /**
   * state to if the user submitted the form or not
   */
  const [wantSubmit, setWantSubmit] = useState(false);

  /**
   * state to know what error message should be shown
   */
  // const [isLoading, setIsLoading] = useState(false);

  /**
   * state to know what error message should be shown
   */
  const [finishedLoading, setFinishedLoading] = useState(false);

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

  const navigate = useNavigate();
  const { email } = formFields;

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
    setValidEmail(USER_EMAIL.test(email));
    setShowForgetUserNameErrorMsg(false);
  }, [email]);

  /**
   * Function to handle the submit of the form of forget userName
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
   * Function to handle any change on the input field of the forget userName form (check if the email is valid or not)
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
    <AuthContainer id="forget-username-container">
      <RedditIcon>
        <SiReddit size={60} color={"red"}></SiReddit>
      </RedditIcon>
      <AuthHeader>Recover your username</AuthHeader>
      <AuthParagraph>
        Tell us the email address associated with your Reddit account, and we’ll
        send you an email with your username.
      </AuthParagraph>
      <br></br>
      <form onSubmit={handleSubmit}>
        <FormInputPageCom
          id="email"
          valid={validEmail}
          initialFocus={initialFocus}
          showIcon={true}
          label="EMAIL"
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
        <ErrorParagraph id="email-error" valid={validEmail || initialFocus}>
          Please fix your email to continue
        </ErrorParagraph>
        {error && (
          <ErrorParagraph valid={!error || initialFocus}>
            {error}
          </ErrorParagraph>
        )}

        <br></br>
        <ButtonsContainer>
          {!isLoading && !finishedLoading && (
            <Button
              id="reset-button"
              page={true}
              disabled={!validEmail || !notRobot}
              valid={validEmail && notRobot}
              type="submit"
              onClick={() => {
                setWantSubmit(true);
              }}
            >
              EMAIL ME
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

        {emailSent && (
          <ErrorParagraph
            id="success-alert"
            validColor={emailSent}
            valid={!emailSent || initialFocus}
          >
            Thanks! If there are any Reddit accounts associated with that email
            address, you'll get an email with your username(s) shortly.
          </ErrorParagraph>
        )}

        <ReCAPTCHAContainer validEmail={validEmail}>
          <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={recaptchaHandler}
            grecaptcha={grecaptchaObject}
          />
        </ReCAPTCHAContainer>

        <Forget>
          Don't have an email or need assistance logging <br /> in?
          <button onClick={() => {}}>GET HELP</button>{" "}
        </Forget>
        <br></br>
        <br></br>
        <Forget>
          {/* Want to login? */}
          <span onClick={() => navigate("/login")} id="login-link">
            LOG IN
          </span>{" "}
          <span onClick={() => navigate("/register")} id="signup-link">
            {" . "}SIGN UP
          </span>{" "}
        </Forget>
      </form>
    </AuthContainer>
  );
};

export default ForgetUserName;
