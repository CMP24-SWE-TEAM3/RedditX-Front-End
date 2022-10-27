import { useState, useEffect } from "react";

import { SiReddit } from "react-icons/si";

import ReCAPTCHA from "react-google-recaptcha";

import FormInputPageCom from "Features/Authentication/Components/FormInputPageCom/FormInputPageCom";

import Button from "Features/Authentication/Components/Button/Button";

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
  }, [email]);

  /**
   * Function to handle the submit of the form of forget userName
   * @param {*} event
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
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
    <AuthContainer>
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
        <ErrorParagraph valid={validEmail || initialFocus}>
          Please fix your email to continue
        </ErrorParagraph>
        <br></br>
        <ButtonsContainer>

          {/** Show an enabled button if the email is valid and the user has passed the captcha*/}
          {validEmail && notRobot && (
            <Button
              page={true}
              valid={validEmail}
              type="button"
              onClick={() => {
                console.log("Enabled");
              }}
            >
              EMAIL ME
            </Button>
          )}

          {/** Show an disabled button if the email is not valid or the user has not passed the captcha*/}
          {(!validEmail || !notRobot) && (
            <Button
              page={true}
              disabled
              valid={validEmail && notRobot}
              type="button"
            >
              EMAIL ME
            </Button>
          )}
        </ButtonsContainer>
       
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
          <span onClick={() => {}}>LOG IN</span>{" "}
          <span onClick={() => {}}>{" . "}SIGN UP</span>{" "}
        </Forget>
      </form>
    </AuthContainer>
  );
};

export default ForgetUserName;
