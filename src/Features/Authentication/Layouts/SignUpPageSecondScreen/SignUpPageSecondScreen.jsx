/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { AiOutlineReload } from "react-icons/ai";

import ReCAPTCHA from "react-google-recaptcha";
import RandomUserName from "Features/Authentication/Utils/RandomUserName";

import FormInputPageCom from "Features/Authentication/Components/FormInputPageCom/FormInputPageCom";
import Button from "../../Components/Button/Button";
import PasswordStrength from "Features/Authentication/Components/PasswordStrength/PasswordStrength";
import GetPasswordStrength from "Features/Authentication/Utils/GetPasswordStrenght";

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

const USER_NAME = /^[A-z][A-z0-9-_]{3,20}$/;
const PWD_REGEX = /^[A-z][A-z0-9-_]{8,20}$/;

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
  const { userName, password } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  /**
   * useEffect for userName field to check if the userName that the user entered is valid or not
   */
  useEffect(() => {
    setErrMsg("Username must be between 3 and 20 characters");

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    if (name === "password") {
      setPasswordStrength(GetPasswordStrength(password));
    }
    if (name === "userName") {
      setValidUserName(USER_NAME.test(userName));
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
                    valid={validUserName}
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

                <ErrorParagraph valid={validUserName || initialFocus}>
                  {errMsg}
                </ErrorParagraph>

                <Group secondScreen={secondScreen}>
                  <FormInputPageCom
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
                <ErrorParagraph valid={validPassword || initialFocus2}>
                  password should contain 8 to 20 characters
                </ErrorParagraph>

                <ReCAPTCHAContainer validEmail={validUserName && validPassword}>
                  <ReCAPTCHA
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
                    onClick={() => {
                      newRandomUserNames();
                    }}
                  >
                    <AiOutlineReload />
                  </Reload>
                </div>
                <RandomContainer>
                  <p
                    onClick={() => {
                      changeUserName(sug1);
                    }}
                  >
                    {sug1}
                  </p>
                  <p
                    onClick={() => {
                      changeUserName(sug2);
                    }}
                  >
                    {sug2}
                  </p>
                  <p
                    onClick={() => {
                      changeUserName(sug3);
                    }}
                  >
                    {sug3}
                  </p>
                  <p
                    onClick={() => {
                      changeUserName(sug4);
                    }}
                  >
                    {sug4}
                  </p>
                  <p
                    onClick={() => {
                      changeUserName(sug5);
                    }}
                  >
                    {sug5}
                  </p>
                </RandomContainer>
              </div>
            </MidDiv>
            <LastDiv>
              <BackButton
                onClick={() => {
                  setSecondScreen(false);
                }}
              >
                BACK
              </BackButton>
              <ButtonsContainer>
                {validUserName && validPassword && notRobot && (
                  <Button
                    page={true}
                    valid={validUserName && validPassword && notRobot}
                    type="button"
                    onClick={() => RandomUserName()}
                  >
                    SIGN UP
                  </Button>
                )}
                {(!validUserName || !validPassword || !notRobot) && (
                  <Button
                    page={true}
                    disabled
                    valid={validUserName && validPassword && notRobot}
                    type="button"
                  >
                    SIGN UP
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
