/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect } from "react";


import FormInput from "Features/Authentication/Components/FormInput/FormInput";

import Button from "Features/Authentication/Components/Button/Button";



import {
  AuthContainer,
  ButtonsContainer,
  ErrorParagraph,
  AuthParagraph,
  AuthHeader,
  Forget,
} from "./ForgetPasswordModal.styled";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,20}$/;

const USER_EMAIL =
  /[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9._-]{3,}[.]{1}[a-zA-Z0-9._-]{2,}/;

/**
 * ForgetPasswordModal component that is used in Login Component
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
  setInitialFocus,
  setErrMsg
}) => {
 
    
  const { userName, email } = formFields;

  

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
   * useEffect for email field to check if the email that the user entered is valid or not
   */
  useEffect(() => {
    if (email.length > 0) {
      setInitialFocus(false);
      setErrMsg("Not a valid email address");
    } else if (email.length === 0) {
      setErrMsg("Please enter an email address to continue");
      // console.log(errMsg);
    }

    if (userName.length === 0) {
      setErrMsg("Username must be between 3 and 20 characters");
    }
    setValidEmail(USER_EMAIL.test(email));
  }, [email]);

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
    if (name === "email") {
      setValidEmail(USER_EMAIL.test(email));
      console.log(validEmail);
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

            <FormInput
              label="Email"
              valid={validEmail}
              initialFocus={initialFocus}
              showIcon={true}
              type="email"
              onChange={handleChange}
              name="email"
              value={email}
            />

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
              {/** Show an enabled button if the email and userName are valid */}
              {validName && validEmail && (
                <Button
                  valid={validName && validEmail}
                  type="button"
                  onClick={() => {}}
                >
                  Reset password
                </Button>
              )}

              {/** Show an disabled button if the email or userName are not valid */}

              {(!validName || !validEmail) && (
                <Button disabled valid={validName && validEmail} type="button">
                  Reset password
                </Button>
              )}
            </ButtonsContainer>

            <Forget>
              Don't have an email or need assistance logging <br /> in?
              <button onClick={() => {}}>Get Help</button>{" "}
            </Forget>
            <br></br>
            <Forget>
              {/* Want to login? */}
              <button
                onClick={() => {
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
