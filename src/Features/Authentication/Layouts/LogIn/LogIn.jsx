import { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import jwt_decode from "jwt-decode";

import FacebookLogin from "react-facebook-login";

import FormInput from "Features/Authentication/Components/FormInput/FormInput";

import Button from "Features/Authentication/Components/Button/Button";

import {
  AuthContainer,
  ButtonsContainer,
  Privacy,
  ErrorParagraph,
  SignInWithGoogle,
  SignInWithFacebook,
  OrHeader,
  AuthParagraph,
  AuthHeader,
  Forget,
  AuthContainerDiv,
  MyReCAPTCHA,
  ReCAPTCHAContainer,
} from "./LogIn.styled";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,20}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const USER_EMAIL =
  /[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9._-]{3,}[.]{1}[a-zA-Z0-9._-]{2,}/;

const defaultFormFields = {
  userName: "",
  password: "",
  email: "",
};
// const forgetUserNameFormFields = {

// };

const LogIn = () => {
  const [validEmail, setValidEmail] = useState(false);
  const [notRobot, setNotRobot] = useState(false);
  const [formFields, setFormFields] = useState(defaultFormFields);
  // const [userNameformFields, forgetUserNamesetFormFields] = useState(forgetUserNameFormFields);
  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userNameScreen, setUserNameScreen] = useState(false);
  const [passwordScreen, setPasswordScreen] = useState(false);
  const [userFocus, setUserFocus] = useState(false);
  const [initialFocus, setInitialFocus] = useState(true);
  const { userName, password, email } = formFields;
  const [errMsg, setErrMsg] = useState("");
  // const { email } = userNameformFields;

  useEffect(() => {
    if (userName.length > 0) {
      setInitialFocus(false);
      console.log("Entered");
    }
    setValidName(USER_REGEX.test(userName));
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "userName") {
      setValidName(USER_REGEX.test(userName));

      //console.log(validName);
    }
    if (name === "email") {
      setValidEmail(USER_EMAIL.test(email));
      // setFormFields({ ...userNameformFields, [name]: value });
      console.log(email);
    }
    setFormFields({ ...formFields, [name]: value });
  };

  const handleCallbackResponse = (response) => {
    let userObject = jwt_decode(response.credential);
    console.log(userObject);
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

  const recaptchaHandler = (value) => {
    setNotRobot(true);
  };

  return (
    <>
      {
        <AuthContainer userNameScreen={userNameScreen}>
          <AuthContainerDiv userNameScreen={userNameScreen || passwordScreen}>
            <AuthHeader>Log In</AuthHeader>
            <AuthParagraph>
              By continuing, you agree are setting up a Reddit account and agree
              to our <Privacy>User Agreement</Privacy> and{" "}
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
                icon="fa-facebook"
              />
            </SignInWithFacebook>

            <OrHeader>
              <span>OR</span>
            </OrHeader>

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
                  setUserFocus(true);
                  setInitialFocus(false);
                }}
                onBlur={() => setUserFocus(false)}
              />

              <ErrorParagraph valid={validName || initialFocus}>
                Username must be between 3 and 20 characters
              </ErrorParagraph>

              <FormInput
                label="Password"
                initialFocus={initialFocus}
                showIcon={true}
                type="password"
                onChange={handleChange}
                name="password"
                value={password}
              />

              <Forget>
                Forget your{" "}
                <button
                  onClick={() => {
                    setInitialFocus(true);
                    setUserNameScreen(true);
                    setPasswordScreen(false);

                    setErrMsg("Not a valid email address");
                  }}
                >
                  username
                </button>{" "}
                or{" "}
                <button
                  onClick={() => {
                    setInitialFocus(true);
                    setUserNameScreen(false);
                    setPasswordScreen(true);

                    setErrMsg("Not a valid email address");
                  }}
                >
                  password
                </button>
              </Forget>

              <ButtonsContainer>
                {validName && true && (
                  <Button valid={validName} type="button" onClick={() => {}}>
                    Log In
                  </Button>
                )}
                {!validName && (
                  <Button disabled valid={validName} type="button">
                    Log In
                  </Button>
                )}
              </ButtonsContainer>
            </form>
          </AuthContainerDiv>
        </AuthContainer>
      }

      {/*     Forget username screen   */}

      {
        <AuthContainer userNameScreen={!userNameScreen}>
          <br></br>
          <br></br>
          <br></br>
          <AuthHeader>Recover your username</AuthHeader>
          <AuthParagraph>
            Tell us the email address associated with your Reddit account, and
            we’ll send you an email with your username.
          </AuthParagraph>

          <form onSubmit={handleSubmit}>
            <FormInput
              valid={validEmail}
              initialFocus={initialFocus}
              showIcon={true}
              label="Email"
              type="email"
              required
              onChange={handleChange}
              name="email"
              value={email}
              onFocus={() => {
                setUserFocus(true);
                setInitialFocus(false);
              }}
              onBlur={() => setUserFocus(false)}
            />
            <ErrorParagraph valid={validEmail || initialFocus}>
              {errMsg}
            </ErrorParagraph>
            <ButtonsContainer>
              {validEmail && notRobot && (
                <Button
                  valid={validEmail}
                  type="button"
                  onClick={() => {
                    console.log("Enabled");
                  }}
                >
                  Email me
                </Button>
              )}
              {(!validEmail || !notRobot) && (
                <Button disabled valid={validEmail && notRobot} type="button">
                  Email me
                </Button>
              )}
            </ButtonsContainer>
            <ReCAPTCHAContainer validEmail={validEmail}>
              <MyReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={recaptchaHandler}
              />
            </ReCAPTCHAContainer>

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
                }}
              >
                Log in
              </button>{" "}
            </Forget>
          </form>
        </AuthContainer>
      }

      {/*     Forget password screen   */}

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
                setUserFocus(true);
                setInitialFocus(false);
              }}
              onBlur={() => setUserFocus(false)}
            />

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
              {validName && true && (
                <Button valid={validName} type="button" onClick={() => {}}>
                  Log In
                </Button>
              )}
              {!validName && (
                <Button disabled valid={validName} type="button">
                  Log In
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

export default LogIn;
