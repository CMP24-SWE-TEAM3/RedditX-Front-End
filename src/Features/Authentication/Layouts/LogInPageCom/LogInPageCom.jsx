import { useState, useEffect } from "react";

import jwt_decode from "jwt-decode";

import FacebookLogin from "react-facebook-login";

import FormInputPageCom from "Features/Authentication/Components/FormInputPageCom/FormInputPageCom";
import Button from "Features/Authentication/Components/Button/Button";

import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { signInWithGooglePopup } from "Features/Authentication/Utils/Firebase";

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
const PWD_REGEX = /^[A-z][A-z0-9-_]{8,20}$/;

const defaultFormFields = {
  userName: "",
  password: "",
};

/**
 * LoginPageCom component that is used in Login page
 * @returns {React.Component}  LoginPageCom component that is used in Login page
 */
const LogInPageCom = () => {
  /**
   * state to handel any change the user make in the input fields
   */
  const [formFields, setFormFields] = useState(defaultFormFields);

  /**
   * state to know if the userName is valid or not to control what to show to the user
   */
  const [validName, setValidName] = useState(false);

  /**
   * state to know if the password is valid or not to control what to show to the user
   */
  const [validPassword, setValidPassword] = useState(false);

  /**
   * state to know if the user focused on input field at least one time
   */
  const [initialFocus, setInitialFocus] = useState(true);
  const { userName, password } = formFields;

  /**
   * useEffect for userName field to check if the userName that the user entered is valid or not
   */
  useEffect(() => {
    if (userName.length > 0) {
      setInitialFocus(false);
      console.log("Entered");
    }
    setValidName(USER_REGEX.test(userName));
  }, [userName]);

  /**
   * useEffect for password field to check if the userName that the user entered is valid or not
   */
  useEffect(() => {
    if (password.length > 0) {
      setInitialFocus(false);
      console.log("Entered");
    }
    setValidPassword(PWD_REGEX.test(password));
  }, [password]);

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

    if (name === "password") {
      setValidPassword(PWD_REGEX.test(password));
    }
    setFormFields({ ...formFields, [name]: value });
  };

  /**
   * Function to handle the response coming from sign in with google
   * @param {*} response
   */
  const handleCallbackResponse = (response) => {
    let userObject = jwt_decode(response.credential);
    console.log(response);
    console.log(userObject);
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

  /**
   * Function to handle the response coming from sign in with facebook
   * @param {*} response
   */
  const responseFacebook = (response) => {
    console.log(response);
  };


  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user.accessToken);
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
              {/* <div id="signInDiv"></div> */}
              <button onClick={() => logGoogleUser()}>
                <FcGoogle  size={22}/>
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

              {/* Show error message if the userName if not valid and the user made a focus on the it's input field */}
              <ErrorParagraph valid={validName || initialFocus}>
                Username must be between 3 and 20 characters
              </ErrorParagraph>

              <FormInputPageCom
                label="PASSWORD"
                valid={validPassword}
                initialFocus={initialFocus}
                showIcon={true}
                type="password"
                onChange={handleChange}
                name="password"
                value={password}
              />

              <ButtonsContainer>
                {/** Show an enabled button if the password and userName are valid */}
                {validName && validPassword && (
                  <Button
                    page={true}
                    valid={validName}
                    type="button"
                    onClick={() => {}}
                  >
                    LOG IN
                  </Button>
                )}


                {/** Show an disabled button if the password or userName are not valid */}
                {(!validName || !validPassword) && (
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
