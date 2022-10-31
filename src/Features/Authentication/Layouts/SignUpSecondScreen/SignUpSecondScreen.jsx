/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect} from "react";

import { IoMdArrowBack } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";

import ReCAPTCHA from "react-google-recaptcha";

import RandomUserName from "Features/Authentication/Utils/RandomUserName";

import FormInput from "Features/Authentication/Components/FormInput/FormInput";
import Button from "../../Components/Button/Button";
import PasswordStrength from "Features/Authentication/Components/PasswordStrength/PasswordStrength";
import GetPasswordStrength from "Features/Authentication/Utils/GetPasswordStrenght";

import {
  ButtonsContainer,
  ErrorParagraph,
  AuthParagraph,
  AuthHeader,
} from "../LogIn/LogIn.styled";

import {
  AuthContainer,
  BackSpan,
  Group,
  ReCAPTCHAContainer,
} from "./SignUpSecondScreen.styled";

const USER_NAME = /^[A-z][A-z0-9-_]{3,20}$/;
const PWD_REGEX = /^[A-z][A-z0-9-_]{8,20}$/;



/**
 * SignUpSecondScreen component that is used in Signup Component
 *  @param {boolean} initialFocus Prop to know if the user made at least one focus on the input field or not
 * @param {Function} setInitialFocus Function to set the state of initialFocus
 * @param {Function} setValidUserName Function to set the validity of the userName
 * @param {boolean} validUserName Prop to know if the userName is valid or not
 * @param {boolean} secondScreen Prop to know what screen should be shown (the choose email screen or choose userName and password screen)
 * @param {Function} setSecondScreen Function to set the state of secondScreen
 * @param {boolean} validPassword Prop to know if the password is valid or not
 * @param {Function} setValidPassword Function to set the validity of the password
 * @param {boolean} notRobot Prop to know if the user passed the captcha or not
 * @param {Function} setNotRobot Function to set the state of notRobot
 * @param {number} passwordStrength The strength of the password
 * @param {Function} setPasswordStrength Function to set the strength of the password
 * @param {Object} formFields Object contain the values of input fields
 * @param {Function} setFormFields Function to update the values of input fields
 * @returns {React.Component}  SignUpSecondScreen component that is used in Signup Component
 */

const SignUpSecondScreen = ({
  initialFocus,
  setInitialFocus,
  initialFocus2,
  setInitialFocus2,
  validUserName,
  setValidUserName,
  secondScreen,
  setSecondScreen,
  validPassword,
  setValidPassword,
  notRobot,
  setNotRobot,
  passwordStrength,
  setPasswordStrength,
  formFields,
  setFormFields
}) => {
 

  /**
   * state to know what error message should be shown
   */
  const [errMsg, setErrMsg] = useState("");
  const { userName, password } = formFields;

  /**
   * some configurations for the captcha
   */
  const grecaptchaObject = window.grecaptcha;
  window.recaptchaOptions = {
    useRecaptchaNet: true,
  };

 

  /**
   * useEffect for userName field to check if the userName that the user entered is valid or not
   */
  useEffect(() => {
    if (userName.length === 0) {
      setErrMsg("Username must be between 3 and 20 characters");
    }
    setValidUserName(USER_NAME.test(userName));
  }, [userName]);

  /**
   * useEffect for password field to check if the userName that the user entered is valid or not
   */
  useEffect(() => {
    if (password.length > 0) {
      setInitialFocus(false);
    }
    setValidPassword(PWD_REGEX.test(password));
  }, [password]);

  /**
   * Function to handle the submit of the form of signup
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
    if (name === "password") {
      setPasswordStrength(GetPasswordStrength(password));
    }
    if (name === "userName") {
      setValidUserName(USER_NAME.test(userName));
    }
    setFormFields({ ...formFields, [name]: value });
  };

  /**
   * Function to change userName shown in the userName textField by calling RandomUserName (function in utilities folder)
   */
  const changeUserName = () => {
    setFormFields({ ...formFields, userName: RandomUserName() });
    setValidUserName(true);
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
        <AuthContainer secondScreen={!secondScreen}>
          <BackSpan
            onClick={() => {
              setSecondScreen(false);
            }}
          >
            <IoMdArrowBack size={20} />
          </BackSpan>

          <br></br>
          <br></br>
          <AuthHeader>Create your username and password</AuthHeader>
          <AuthParagraph>
            Reddit is anonymous, so your username is what you’ll go by here.
            Choose wisely—because once you get a name, you can’t change it.
          </AuthParagraph>

          <br></br>

          <form onSubmit={handleSubmit}>
            <Group>
              <FormInput
                valid={validUserName}
                initialFocus={initialFocus}
                label="Username"
                type="text"
                required
                onChange={handleChange}
                name="userName"
                value={userName}
                onFocus={() => {
                  setInitialFocus(false);
                }}
              />
              <span onClick={() => changeUserName()}>
                <TfiReload size={14} />
              </span>
            </Group>

            {/* Show error message if the userName is not valid and the user made a focus on the it's input field */}

            <ErrorParagraph valid={validUserName || initialFocus}>
              {errMsg}
            </ErrorParagraph>

            <Group>
              <FormInput
                valid={validPassword}
                initialFocus={initialFocus2}
                label="Password"
                type="password"
                required
                onChange={handleChange}
                name="password"
                value={password}
                onFocus={() => {
                  setInitialFocus2(false);
                }}
              />
              {!initialFocus2 && (
                <span onClick={() => {}}>
                  <PasswordStrength
                    strength={passwordStrength}
                  ></PasswordStrength>
                </span>
              )}
            </Group>

            {/* Show error message if the password is not valid and the user made a focus on the it's input field */}
            <ErrorParagraph valid={validPassword || initialFocus2}>
              password should contain 8 to 20 characters
            </ErrorParagraph>
            <ButtonsContainer>
              {/** Show an enabled button if the userName is valid and the password is valid and the user has passed the captcha*/}
              {validUserName && validPassword && notRobot && (
                <Button
                  valid={validUserName && validPassword && notRobot}
                  type="button"
                  onClick={() => RandomUserName()}
                >
                  Continue
                </Button>
              )}

              {/** Show an disabled button if the userName is not valid or the password is not valid or the user has not passed the captcha*/}
              {(!validUserName || !validPassword || !notRobot) && (
                <Button
                  disabled
                  valid={validUserName && validPassword && notRobot}
                  type="button"
                >
                  Continue
                </Button>
              )}
            </ButtonsContainer>
          </form>

          <ReCAPTCHAContainer validEmail={validUserName && validPassword}>
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={recaptchaHandler}
              grecaptcha={grecaptchaObject}
            />
          </ReCAPTCHAContainer>
        </AuthContainer>
      }
    </>
  );
};

export default SignUpSecondScreen;
