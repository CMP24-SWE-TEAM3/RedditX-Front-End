/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import { useAuth } from "Features/Authentication/Contexts/Authentication";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import FormInput from "Features/Authentication/Components/FormInput/FormInput";
import Button from "../../Components/Button/Button";

import axios from "API/axios";

import useFetchFunction from "Hooks/useFetchFunction";

import {
  signupWithGoogle,
  signupWithFacebook,
} from "Features/Authentication/Services/authApi";

import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

import {
  signInWithGooglePopup,
  signInWithFacebookPopup,
} from "Features/Authentication/Utils/Firebase";

import {
  ButtonsContainer,
  Privacy,
  ErrorParagraph,
  SignInWithGoogle,
  SignInWithFacebook,
  OrHeader,
  AuthParagraph,
  AuthHeader,
} from "../LogIn/LogIn.styled";

import { AuthContainer, AuthContainerDiv } from "./SignUpFirstScreen.styled";

const USER_EMAIL =
  /[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9._-]{3,}[.]{1}[a-zA-Z0-9._-]{2,}/;

/**
 * SignUpFirstScreen component that is used in Signup Component
 * @param {boolean} validEmail Prop to know if the email is valid or not
 * @param {Function} setValidEmail Function to set the validity of the email
 * @param {boolean} secondScreen Prop to know what screen should be shown (the choose email screen or choose userName and password screen)
 * @param {Function} setSecondScreen Function to set the state of secondScreen
 * @param {boolean} initialFocus Prop to know if the user made at least one focus on the input field or not
 * @param {Function} setInitialFocus Function to set the state of initialFocus
 * @param {Function} changeUserName Function to change the random userName
 * @param {Object} formFields Object contain the values of input fields
 * @param {Function} setFormFields Function to update the values of input fields
 * @returns {React.Component}  SignUpFirstScreen component that is used in Signup Component
 */

const SignUpFirstScreen = ({
  validEmail,
  setValidEmail,
  secondScreen,
  setSecondScreen,
  initialFocus,
  setInitialFocus,
  changeUserName,
  formFields,
  setFormFields,
}) => {
  const auth = useAuth();

  const [data, error, isLoading, dataFetch] = useFetchFunction();
  /**
   * state to know what error message should be shown
   */
  const [errMsg, setErrMsg] = useState("");
  const { email } = formFields;

  const [signupSubmit, setSignupSubmit] = useState(false);

  const navigate = useNavigate();

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
  }, [email]);

  useEffect(() => {
    if (signupSubmit) {
      setSignupSubmit(false);
      // console.log("out useEffect", data);

      if (!error && data.token) {
        auth.login(data);

        navigate("/");
      }
    }
  }, [data]);

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

    if (name === "email") {
      setValidEmail(USER_EMAIL.test(email));
    }

    setFormFields({ ...formFields, [name]: value });
  };

  /**
   * Function to check email by sending request to the api and make sure that the email is good to show the second screen after that
   * @param {string} mail The email that the user entered
   */
  const checkEmail = (mail) => {
    /* After mail checked */

    setInitialFocus(true);
    setSecondScreen(true);
    changeUserName();
  };

  /**
   * Function to handle the sing in with google
   */
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();

    signupWithGoogle(dataFetch, {
      type: "gmail",
      googleOrFacebookToken: user.accessToken,
    });
    setSignupSubmit(true);

    // if (!error) {
      
    //   auth.login(data);
    //   navigate("/");
    // }
  };

  /**
   * Function to handle the sing in with facebook
   */
  const logFacebookUser = async () => {
    const { user } = await signInWithFacebookPopup();

    signupWithFacebook(dataFetch, {
      type: "facebook",
      googleOrFacebookToken: user.accessToken,
    });
    setSignupSubmit(true);

    // if (!error) {
     
    //   auth.login(data);
    //   navigate("/");
    // }
  };

  return (
    <>
      {
        <AuthContainer
          data-testid={"signupModalId"}
          secondScreen={secondScreen}
        >
          <AuthContainerDiv secondScreen={secondScreen}>
            <AuthHeader id="signUpContainerModal">Sign Up</AuthHeader>
            <AuthParagraph>
              By continuing, you agree are setting up a Reddit account and agree
              to our <Privacy>User Agreement</Privacy> and{" "}
              <Privacy>Privacy Policy</Privacy>.
            </AuthParagraph>
            <SignInWithGoogle>
              {/* <div id="signInDiv"></div> */}
              <button id="contWithGoogleModal" onClick={() => logGoogleUser()}>
                <FcGoogle size={22} />
                <span> Continue With Google</span>
              </button>
            </SignInWithGoogle>

            <SignInWithFacebook>
              <SignInWithFacebook>
                <button
                  id="contWithFacebookModal"
                  onClick={() => logFacebookUser()}
                >
                  <BsFacebook size={22} />
                  <span> Continue With Facebook</span>
                </button>
              </SignInWithFacebook>
            </SignInWithFacebook>

            <OrHeader>
              <span>OR</span>
            </OrHeader>

            <form onSubmit={handleSubmit}>
              <FormInput
                data-testid="email"
                id="emailFieldModal"
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
                  setInitialFocus(false);
                }}
              />

              {/* Show error message if the email is not valid and the user made a focus on the it's input field */}
              <ErrorParagraph
                data-testid="email-error"
                id="errorNotValidEmailModal"
                valid={validEmail || initialFocus}
              >
                {errMsg}
              </ErrorParagraph>

              {error && (
                <ErrorParagraph id="errorFromBackEndModal" valid={!error}>
                  {error}
                </ErrorParagraph>
              )}

              <ButtonsContainer>
                <Button
                  id="continueButtonModal"
                  disabled={!validEmail}
                  valid={validEmail}
                  type="button"
                  onClick={() => checkEmail(email)}
                >
                  Continue
                </Button>
              </ButtonsContainer>
            </form>
          </AuthContainerDiv>
        </AuthContainer>
      }
    </>
  );
};

export default SignUpFirstScreen;
