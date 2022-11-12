/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

import { SiReddit } from "react-icons/si";

import FormInputPageCom from "Features/Authentication/Components/FormInputPageCom/FormInputPageCom";
import Button from "Features/Authentication/Components/Button/Button";

import LoadingSpinner from "Features/Authentication/Components/LoadingSpinner/LoadingSpinner";

import Checked from "Features/Authentication/Components/Checked/Checked";

import { forgetPasswordApi } from "Features/Authentication/Services/authApi";

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
  RedditIcon,
} from "./ForgetPassword.styled";

const USER_REGEX = /^[A-z0-9-_]{3,20}$/;

const USER_EMAIL =
  /[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9._-]{3,}[.]{1}[a-zA-Z0-9._-]{2,}/;

const defaultFormFields = {
  userName: "",
  email: "",
};

/**
 * ForgetPassword component that is used in forget password page
 * @returns {React.Component}  ForgetPassword component that is used in forget password page
 */

const ForgetPassword = () => {
  const [data, error, isLoading, dataFetch] = useFetchFunction();

  /**
   * state to know if the email is valid or not to control what to show to the user
   */
  const [validEmail, setValidEmail] = useState(false);

  /**
   * state to handel any change the user make in the input fields
   */

  const [formFields, setFormFields] = useState(defaultFormFields);

  /**
   * state to know if the userName is valid or not to control what to show to the user
   */

  const [validName, setValidName] = useState(false);

  /**
   * state to know if the user focused on input field at least one time
   */

  const [initialFocus, setInitialFocus] = useState(true);
  /**
   * state to know if the user focused on input field at least one time
   */

  const [initialFocus2, setInitialFocus2] = useState(true);

  /**
   * state to if the user submitted the form or not
   */
  const [wantSubmit, setWantSubmit] = useState(false);

  // /**
  //  * state to know what error message should be shown
  //  */
  // const [isLoading, setIsLoading] = useState(false);

  /**
   * state to know what error message should be shown
   */
  const [finishedLoading, setFinishedLoading] = useState(false);

  /**
   * the error message from forget Password
   */
  const [forgetPasswordErrorMsg, setForgetPasswordErrorMsg] = useState("");
  /**
   * state to set the error message from forget Password
   */
  const [showForgetPasswordErrorMsg, setShowForgetPasswordErrorMsg] =
    useState(false);
 const navigate = useNavigate();
  /**
   * state to know if the email sent or not
   */
  const [emailSent, setEmailSent] = useState(false);

  const { userName, email } = formFields;

  /**
   * useEffect for email field to check if the email that the user entered is valid or not
   */

  useEffect(() => {
    setValidEmail(USER_EMAIL.test(email));
    setShowForgetPasswordErrorMsg(false);
  }, [email]);

  /**
   * useEffect for userName field to check if the userName that the user entered is valid or not
   */

  useEffect(() => {
    setValidName(USER_REGEX.test(userName));
    setShowForgetPasswordErrorMsg(false);
  }, [userName]);

  /**
   * Function to handle the submit of the form of forget password
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
   * Function to handle any change on the input field of the forget password form (check if the userName or the email is valid or not)
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
      <AuthContainer id="forget-password-container">
        <RedditIcon>
          <SiReddit size={60} color={"red"}></SiReddit>
        </RedditIcon>
        <AuthHeader>Reset your password</AuthHeader>
        <AuthParagraph>
          Tell us the username and email address associated with your Reddit
          account, and we’ll send you an email with a link to reset your
          password.
        </AuthParagraph>

        <br></br>

        <form onSubmit={handleSubmit}>
          <FormInputPageCom
            id="username"
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
          <ErrorParagraph id="username-error" valid={validName || initialFocus}>
            Username must be between 3 and 20 characters
          </ErrorParagraph>

          {error && (
            <ErrorParagraph valid={!error || initialFocus}>
              {error}
            </ErrorParagraph>
          )}
          <FormInputPageCom
            id="email"
            label="EMAIL"
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

          {/* Show error message if the email is not valid and the user made a focus on the it's input field */}

          <ErrorParagraph id="email-error" valid={validEmail || initialFocus2}>
            not a valid email
          </ErrorParagraph>

          <ButtonsContainer>
            {!isLoading && !finishedLoading && (
              <Button
                id="reset"
                page={true}
                disabled={!validName || !validEmail}
                valid={validName && validEmail}
                type="submit"
                onClick={() => {
                  setWantSubmit(true);
                }}
              >
                RESET PASSWORD
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
          <br></br>
          {emailSent && (
            <ErrorParagraph
              id="success-alert"
              validColor={emailSent}
              valid={!emailSent || initialFocus}
            >
              Thanks! If your Reddit username and email address match, you'll
              get an email with a link to reset your password shortly.
            </ErrorParagraph>
          )}
          <Forget>
            <span
              id="forget-username-button"
              onClick={() => navigate("/forget-username")}
            >
              FORGOT USERNAME?
            </span>{" "}
          </Forget>
          <br></br>
          <br></br>
          <Forget>
            Don't have an email or need assistance logging <br /> in?
            <button onClick={() => {}}>GET HELP</button>{" "}
          </Forget>
          <br></br>
          <br></br>
          <Forget>
            <span onClick={() => navigate("/login")}>LOG IN</span>{" "}
            <span onClick={() => navigate("/register")}>{" . "}SIGN UP</span>{" "}
          </Forget>
        </form>
      </AuthContainer>
    </>
  );
};

export default ForgetPassword;
