/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import jwt_decode from "jwt-decode";

import { FaFacebookSquare } from "react-icons/fa";

import FacebookLogin from "react-facebook-login";

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

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    if (name === "email") {
      setValidEmail(USER_EMAIL.test(email));
    }
  };

  const handleCallbackResponse = (response) => {
    let userObject = jwt_decode(response.credential);
    console.log(userObject);
  };

  const changeUserName = (name) => {
    setFormFields({ ...formFields, userName: name });
    setValidUserName(true);
  };

  const checkEmail = (mail) => {
    /* After mail checked */

    setInitialFocus(true);
    setSecondScreen(true);

    changeUserName();
  };

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

  const responseFacebook = (response) => {
    console.log(response);
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
                    <div id="signInDiv"></div>
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
