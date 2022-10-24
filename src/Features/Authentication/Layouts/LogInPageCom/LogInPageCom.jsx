import { useState, useEffect } from "react";

import jwt_decode from "jwt-decode";

import FacebookLogin from "react-facebook-login";

import FormInputPageCom from "Features/Authentication/Components/FormInputPageCom/FormInputPageCom";
import Button from "Features/Authentication/Components/Button/Button";

import { FaFacebookSquare } from "react-icons/fa";

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
} from "./LogInPageCom.styled";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,20}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const USER_EMAIL =
  /[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9._-]{3,}[.]{1}[a-zA-Z0-9._-]{2,}/;

const defaultFormFields = {
  userName: "",
  password: "",
};
// const forgetUserNameFormFields = {

// };

const LogInPageCom = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  // const [userNameformFields, forgetUserNamesetFormFields] = useState(forgetUserNameFormFields);
  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);

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

    setFormFields({ ...formFields, [name]: value });
  };

  const handleCallbackResponse = (response) => {
    let userObject = jwt_decode(response.credential);
    console.log(response);
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

  return (
    <>
      {
        <AuthContainer>
          <AuthContainerDiv>
            <AuthHeader>Log In</AuthHeader>
            <AuthParagraph>
              By continuing, you agree to our <Privacy>User Agreement</Privacy>{" "}
              and <Privacy>Privacy Policy</Privacy>.
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
                valid={validName}
                initialFocus={initialFocus}
                showIcon={true}
                label="USERNAME"
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

              <FormInputPageCom
                label="PASSWORD"
                initialFocus={initialFocus}
                showIcon={true}
                type="password"
                onChange={handleChange}
                name="password"
                value={password}
              />

              <ButtonsContainer>
                {validName && true && (
                  <Button
                    page={true}
                    valid={validName}
                    type="button"
                    onClick={() => {}}
                  >
                    LOG IN
                  </Button>
                )}
                {!validName && (
                  <Button page={true} disabled valid={validName} type="button">
                    LOG IN
                  </Button>
                )}
              </ButtonsContainer>

              <Forget>
                Forget your <button onClick={() => {}}>username</button> or{" "}
                <button onClick={() => {}}>password</button>
              </Forget>
              <br></br>
              <br></br>
              <Forget>
                New to Reddit? <button onClick={() => {}}>SIGN UP</button>
              </Forget>
            </form>
          </AuthContainerDiv>
        </AuthContainer>
      }
    </>
  );
};

export default LogInPageCom;
