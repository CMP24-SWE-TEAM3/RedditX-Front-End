import { useState, useEffect } from "react";

import { SiReddit } from "react-icons/si";

import FormInputPageCom from "Features/Authentication/Components/FormInputPageCom/FormInputPageCom";
import Button from "Features/Authentication/Components/Button/Button";

import {
  AuthContainer,
  ButtonsContainer,
  ErrorParagraph,
  AuthParagraph,
  AuthHeader,
  Forget,
  RedditIcon,
} from "./ForgetPassword.styled";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,20}$/;

const USER_EMAIL =
  /[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9._-]{3,}[.]{1}[a-zA-Z0-9._-]{2,}/;

const defaultFormFields = {
  userName: "",
  password: "",
};

/**
 * ForgetPassword component that is used in forget password page
 * @returns {React.Component}  ForgetPassword component that is used in forget password page
 */

const ForgetPassword = () => {
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
  
  const { userName, email } = formFields;

  /**
   * useEffect for email field to check if the email that the user entered is valid or not
   */

  useEffect(() => {
    setValidEmail(USER_EMAIL.test(email));
  }, [email]);

  /**
   * useEffect for userName field to check if the userName that the user entered is valid or not
   */

  useEffect(() => {
    setValidName(USER_REGEX.test(userName));
  }, [userName]);

  /**
   * Function to handle the submit of the form of forget password
   * @param {*} event
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
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
      <AuthContainer>
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
          <ErrorParagraph valid={validName || initialFocus}>
            Username must be between 3 and 20 characters
          </ErrorParagraph>

          <FormInputPageCom
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

          <ErrorParagraph valid={validEmail || initialFocus2}>
            not a valid email
          </ErrorParagraph>

          <ButtonsContainer>
            {/** Show an enabled button if the email and userName are valid */}
            {validName && validEmail && (
              <Button
                page={true}
                valid={validName && validEmail}
                type="button"
                onClick={() => {}}
              >
                RESET PASSWORD
              </Button>
            )}

            {/** Show an disabled button if the email or userName are not valid */}

            {(!validName || !validEmail) && (
              <Button
                page={true}
                disabled
                valid={validName && validEmail}
                type="button"
              >
                RESET PASSWORD
              </Button>
            )}
          </ButtonsContainer>
          <br></br>
          <Forget>
            <span onClick={() => {}}>FORGOT USERNAME?</span>{" "}
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
            <span onClick={() => {}}>LOG IN</span>{" "}
            <span onClick={() => {}}>{" . "}SIGN UP</span>{" "}
          </Forget>
        </form>
      </AuthContainer>
    </>
  );
};

export default ForgetPassword;
