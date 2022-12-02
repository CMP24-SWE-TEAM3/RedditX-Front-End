/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

import { SiReddit } from "react-icons/si";

import FormInputPageCom from "Features/Authentication/Components/FormInputPageCom/FormInputPageCom";
import Button from "Features/Authentication/Components/Button/Button";

import LoadingSpinner from "Features/Authentication/Components/LoadingSpinner/LoadingSpinner";

import Checked from "Features/Authentication/Components/Checked/Checked";

import { resetForgottenPassword } from "Features/Authentication/Services/authApi";

import { useParams } from "react-router-dom";

import useFetchFunction from "Hooks/useFetchFunction";

import {
  AuthContainer,
  ButtonsContainer,
  ErrorParagraph,
  AuthParagraph,
  AuthHeader,
  Forget,
  RedditIcon,
} from "./NewPasswordPageCom.styled";

const PWD_REGEX = /^[A-z0-9-_`~!@#$%^&*()_|+\-=?;:'",.<>]{8,20}$/;

const defaultFormFields = {
  confirmPassword: "",
  password: "",
};

/**
 * ForgetPassword component that is used in forget password page
 * @returns {React.Component}  ForgetPassword component that is used in forget password page
 */

const NewPasswordPageCom = () => {
  const { token } = useParams();

  const [data, error, isLoading, dataFetch] = useFetchFunction();
  /**
   * state to handel any change the user make in the input fields
   */

  const [formFields, setFormFields] = useState(defaultFormFields);

  /**
   * state to know if the password is valid or not to control what to show to the user
   */
  const [validPassword, setValidPassword] = useState(false);
  /**
   * state to know if the password is valid or not to control what to show to the user
   */
  const [validConfirmPassword, setValidConfirmPassword] = useState(false);

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

  /**
   * state to know what error message should be shown
   */
  const [finishedLoading, setFinishedLoading] = useState(false);

  const { password, confirmPassword } = formFields;

  /**
   * useEffect for email field to check if the email that the user entered is valid or not
   */

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
    setValidConfirmPassword(
      password === confirmPassword && PWD_REGEX.test(confirmPassword)
    );
  }, [password]);

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
    setValidConfirmPassword(
      password === confirmPassword && PWD_REGEX.test(confirmPassword)
    );
  }, [confirmPassword]);

  /**
   * Function to handle the submit of the form of forget password
   * @param {*} event
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (wantSubmit) {
      resetForgottenPassword(dataFetch, token, {
        newPassword: password,
        confirmedNewPassword: confirmPassword,
      });

      if (!error) {
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
    if (name === "password") {
      setValidPassword(PWD_REGEX.test(password));
    }
    if (name === "confirmPassword") {
      setValidConfirmPassword(
        confirmPassword === password && PWD_REGEX.test(confirmPassword)
      );
    }
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <>
      <AuthContainer>
        <RedditIcon>
          <SiReddit size={60} color={"red"}></SiReddit>
        </RedditIcon>
        <AuthHeader>Reset your password</AuthHeader>
        <AuthParagraph>
          Choose a new password here, then log in to your account.
        </AuthParagraph>

        <br></br>

        <form onSubmit={handleSubmit}>
          <FormInputPageCom
            data-testid="password"
            valid={validPassword}
            initialFocus={initialFocus}
            showIcon={true}
            label="PASSWORD"
            type="password"
            onChange={handleChange}
            name="password"
            value={password}
            onFocus={() => {
              setInitialFocus(false);
            }}
          />

          {/* Show error message if the password is not valid and the user made a focus on the it's input field */}
          <ErrorParagraph
            data-testid="password-error"
            valid={validPassword || initialFocus}
          >
            Password must be at least 8 characters long
          </ErrorParagraph>

          {error && (
            <ErrorParagraph valid={!error || initialFocus}>
              {error}
            </ErrorParagraph>
          )}

          <FormInputPageCom
            data-testid="verify-password"
            label="VERIFY PASSWORD"
            valid={validConfirmPassword}
            initialFocus={initialFocus2}
            showIcon={true}
            type="password"
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
            onFocus={() => {
              setInitialFocus2(false);
            }}
          />

          {/* Show error message if the confirm password is not valid and the user made a focus on the it's input field */}

          <ErrorParagraph
            data-testid="verify-password-error"
            valid={validConfirmPassword || initialFocus2}
          >
            Password must match
          </ErrorParagraph>

          <ButtonsContainer>
            {!isLoading && !finishedLoading && (
              <Button
                page={true}
                disabled={!validPassword || !validConfirmPassword}
                valid={validPassword && validConfirmPassword}
                type="submit"
                onClick={() => {
                  setWantSubmit(true);
                }}
              >
                SET PASSWORD
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

          <br></br>
          <Forget>
            Changing your password logs you out of all browsers on your
            device(s). Checking this box also logs you out of all apps you have
            authorized.
          </Forget>
          <br></br>
          <br></br>
          <Forget>
            <span onClick={() => {}}>LOG IN</span>{" "}
            <span onClick={() => {}}>{" . "}SIGN UP</span>{" "}
          </Forget>
        </form>
      </AuthContainer>
    </>
  );
};

export default NewPasswordPageCom;
