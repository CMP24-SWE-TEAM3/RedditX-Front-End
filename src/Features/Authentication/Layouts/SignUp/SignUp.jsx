import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import jwt_decode from "jwt-decode";
import { IoMdArrowBack } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";
import FacebookLogin from "react-facebook-login";

import RandomUserName from "Features/Authentication/Utils/RandomUserName";



import FormInput from "Features/Authentication/Components/FormInput/FormInput";
import Button from "../../Components/Button/Button";

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
} from "../LogIn/LogIn.styled";

import { BackSpan, AuthContainerDiv, Group } from "./SignUp.styled";

const USER_EMAIL =
  /[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9._-]{3,}[.]{1}[a-zA-Z0-9._-]{2,}/;

const USER_NAME = /^[A-z][A-z0-9-_]{3,20}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

var defaultFormFields = {
  email: "",
  userName: "",
  password: "",
};

const SignUp = forwardRef((props, ref) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  //   const [user, setUser] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [validUserName, setValidUserName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);
  const [secondScreen, setSecondScreen] = useState(false);
  const [initialFocus, setInitialFocus] = useState(true);
  const [errMsg, setErrMsg] = useState("");
  const { email, userName, password } = formFields;

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

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log("name : " + name);
    if (name === "email") {
      setValidEmail(USER_EMAIL.test(email));
    }
    if (name === "userName") {
      // console.log(userName);
      setValidUserName(USER_NAME.test(userName));
    }
    setFormFields({ ...formFields, [name]: value });
  };

  const handleCallbackResponse = (response) => {
    let userObject = jwt_decode(response.credential);
    console.log(userObject);
  };

  useImperativeHandle(ref, () => ({
    changeUserName() {
      setFormFields({ ...formFields, userName: RandomUserName() });
      setValidUserName(true);
    },
  }));

  const changeUserName = () => {
    setFormFields({ ...formFields, userName: RandomUserName() });
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

  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <>
      {
        <AuthContainer secondScreen={secondScreen}>
          <AuthContainerDiv secondScreen={secondScreen}>
            <AuthHeader>Sign Up</AuthHeader>
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
                {validEmail && (
                  <Button
                    valid={validEmail}
                    type="button"
                    onClick={() => checkEmail(email)}
                  >
                    Continue
                  </Button>
                )}
                {!validEmail && (
                  <Button disabled valid={validEmail} type="button">
                    Continue
                  </Button>
                )}
              </ButtonsContainer>
            </form>
          </AuthContainerDiv>
        </AuthContainer>
      }

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
          <br></br>
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
                  setUserFocus(true);
                  setInitialFocus(false);
                }}
                onBlur={() => {
                  setUserFocus(false);
                }}
              />
              <span onClick={() => changeUserName()}>
                <TfiReload size={14} />
              </span>
            </Group>

            <ErrorParagraph valid={validUserName || initialFocus}>
              {errMsg}
            </ErrorParagraph>

            <FormInput
              valid={validUserName}
              initialFocus={initialFocus}
              showIcon={true}
              label="Password"
              type="password"
              required
              onChange={handleChange}
              name="password"
              value={password}
            />

            <ButtonsContainer>
              {validUserName && (
                <Button
                  valid={validUserName}
                  type="button"
                  onClick={() => RandomUserName()}
                >
                  Continue
                </Button>
              )}
              {!validUserName && (
                <Button disabled valid={validUserName} type="button">
                  Continue
                </Button>
              )}
            </ButtonsContainer>
          </form>
        </AuthContainer>
      }
    </>
  );
});

export default SignUp;
