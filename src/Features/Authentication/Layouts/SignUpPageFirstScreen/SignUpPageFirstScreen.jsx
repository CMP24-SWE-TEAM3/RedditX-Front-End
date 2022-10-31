/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";


import { FaFacebookSquare } from "react-icons/fa";

import FacebookLogin from "react-facebook-login";

import { FcGoogle } from "react-icons/fc";

import { signInWithGooglePopup } from "Features/Authentication/Utils/Firebase";

import RandomUserName from "Features/Authentication/Utils/RandomUserName";

import FormInputPageCom from "Features/Authentication/Components/FormInputPageCom/FormInputPageCom";
import Button from "../../Components/Button/Button";

import {
  LogInContainer,
  PageContainer,
  Photo,
  AuthContainer,
  AuthContainerDiv,
  All,
  ButtonsContainer,
  Privacy,
  ErrorParagraph,
  SignInWithGoogle,
  SignInWithFacebook,
  OrHeader,
  AuthParagraph,
  AuthHeader,
  Forget,
} from "./SignUpPageFirstScreen.styled";

const USER_EMAIL =
  /[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9._-]{3,}[.]{1}[a-zA-Z0-9._-]{2,}/;

/**
 * SignUpPageFirstScreen component that is used in Signup page
 * @param {boolean} validEmail Prop to know if the email is valid or not
 * @param {Function} setValidEmail Function to set the validity of the email
 * @param {boolean} secondScreen Prop to know what screen should be shown (the choose email screen or choose userName and password screen)
 * @param {Function} setSecondScreen Function to set the state of secondScreen
 * @param {boolean} initialFocus Prop to know if the user made at least one focus on the input field or not
 * @param {Function} setInitialFocus Function to set the state of initialFocus
 * @param {Function} changeUserName Function to change the random userName
 * @param {Object} formFields Object contain the values of input fields
 * @param {Function} setFormFields Function to update the values of input fields
 * @param {String} errMsg The error message that appear under the input field
 * @param {Function} setErrMsg Function to set the error message
 * @param {Function} setValidUserName Function to set the validity of the userName
 * @param {Function} setSug1 Function to set the random userName number 1
 * @param {Function} setSug2 Function to set the random userName number 2
 * @param {Function} setSug3 Function to set the random userName number 3
 * @param {Function} setSug4 Function to set the random userName number 4
 * @param {Function} setSug5 Function to set the random userName number 5
 * @returns {React.Component}  SignUpPageFirstScreen component that is used in Signup page
 */

const SignUpPageFirstScreen = ({
  formFields,
  setFormFields,
  validEmail,
  setValidEmail,
  secondScreen,
  setSecondScreen,
  initialFocus,
  setInitialFocus,
  setValidUserName,
  errMsg,
  setErrMsg,
  setSug1,
  setSug2,
  setSug3,
  setSug4,
  setSug5,
}) => {
  const { email } = formFields;

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

    setSug1(RandomUserName());
    setSug2(RandomUserName());
    setSug3(RandomUserName());
    setSug4(RandomUserName());
    setSug5(RandomUserName());
  }, [email]);

  /**
   * Function to handle the submit of the form of signup
   * @param {*} event
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  /**
   * Function to handle any change on the input field of the signup form (check if the userName or the email or the password is valid or not)
   * @param {*} event
   */
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    if (name === "email") {
      setValidEmail(USER_EMAIL.test(email));
    }
  };

  /**
   * Function to handle the response coming from sign in with google
   * @param {*} response
   */
  const handleCallbackResponse = (response) => {};

  /**
   * Function to check email by sending request to the api and make sure that the email is good to show the second screen after that
   * @param {string} mail The email that the user entered
   */
  const checkEmail = (mail) => {
    /* After mail checked */

    setInitialFocus(true);
    setSecondScreen(true);
  };

  /**
   * Adding some configurations to the signIn with google feature
   */
  useEffect(() => {
    /* global google */

    google.accounts.id.initialize({
      client_id:
        "598360538255-siv9rljce260ek4mvdsu2fk63h3u1g3b.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  const responseFacebook = (response) => {};

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
  };

  return (
    <>
      {
        <All secondScreen={secondScreen}>
          <PageContainer>
            <Photo></Photo>
            <LogInContainer>
              <AuthContainer secondScreen={secondScreen}>
                <AuthContainerDiv secondScreen={secondScreen}>
                  <AuthHeader>Sign Up</AuthHeader>
                  <AuthParagraph>
                    By continuing, you agree are setting up a Reddit account and
                    agree to our <Privacy>User Agreement</Privacy> and{" "}
                    <Privacy>Privacy Policy</Privacy>.
                  </AuthParagraph>
                  <SignInWithGoogle>
                    {/* <div id="signInDiv"></div> */}
                    <button onClick={() => logGoogleUser()}>
                      <FcGoogle size={22} />
                      <span> CONTINUE WITH GOOGLE</span>
                    </button>
                  </SignInWithGoogle>

                  <SignInWithFacebook>
                    <FacebookLogin
                      appId="648981979946188"
                      autoLoad={false}
                      fields="name,email,picture"
                      callback={responseFacebook}
                      cssClass="my-facebook-button-class"
                      icon=<FaFacebookSquare />
                      textButton="CONTINUE WITH FACEBOOK"
                    />
                  </SignInWithFacebook>

                  <OrHeader>
                    <span>OR</span>
                  </OrHeader>

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

                    <ErrorParagraph valid={validEmail || initialFocus}>
                      {errMsg}
                    </ErrorParagraph>

                    <ButtonsContainer>
                      {validEmail && (
                        <Button
                          valid={validEmail}
                          page={true}
                          type="button"
                          onClick={() => checkEmail(email)}
                        >
                          Continue
                        </Button>
                      )}
                      {!validEmail && (
                        <Button
                          page={true}
                          disabled
                          valid={validEmail}
                          type="button"
                        >
                          Continue
                        </Button>
                      )}
                    </ButtonsContainer>
                    <br></br>

                    <Forget>
                      Already a redditor?{" "}
                      <button onClick={() => {}}>LOG IN</button>
                    </Forget>
                  </form>
                </AuthContainerDiv>
              </AuthContainer>
            </LogInContainer>
          </PageContainer>
        </All>
      }
    </>
  );
};

export default SignUpPageFirstScreen;
