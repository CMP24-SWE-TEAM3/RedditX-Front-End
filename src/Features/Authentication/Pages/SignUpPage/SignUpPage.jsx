import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import jwt_decode from "jwt-decode";
import { IoMdArrowBack } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineReload } from "react-icons/ai";
import FacebookLogin from "react-facebook-login";

import RandomUserName from "Features/Authentication/Utils/RandomUserName";

import FormInputPageCom from "Features/Authentication/Components/FormInputPageCom/FormInputPageCom";
import Button from "../../Components/Button/Button";
import PasswordStrength from "Features/Authentication/Components/PasswordStrength/PasswordStrenght";
import GetPasswordStrength from "Features/Authentication/Utils/GetPasswordStrenght";

import {
  LogInContainer,
  PageContainer,
  Photo,
  AuthContainer,
  AuthContainerDiv,
  Group,
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
  FirstDiv,
  MidDiv,
  LastDiv,
  BackButton,
  RandomContainer,
  Reload
} from "./SignUpPage.styled";

const USER_EMAIL =
  /[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9._-]{3,}[.]{1}[a-zA-Z0-9._-]{2,}/;

const USER_NAME = /^[A-z][A-z0-9-_]{3,20}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

var defaultFormFields = {
  email: "",
  userName: "",
  password: "",
};

const SignUpPage = forwardRef((props, ref) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  //   const [user, setUser] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [validUserName, setValidUserName] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState();
  const [userFocus, setUserFocus] = useState(false);
  const [secondScreen, setSecondScreen] = useState(false);
  const [initialFocus, setInitialFocus] = useState(true);
  const [errMsg, setErrMsg] = useState("");
  const [sug1, setSug1] = useState("");
  const [sug2, setSug2] = useState("");
  const [sug3, setSug3] = useState("");
  const [sug4, setSug4] = useState("");
  const [sug5, setSug5] = useState("");
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
    // console.log("name : " + name);
    if (name === "email") {
      setValidEmail(USER_EMAIL.test(email));
    }
    if (name === "password") {
      setPasswordStrength(GetPasswordStrength(password));

      //console.log(GetPasswordStrength(toString(password)));
      console.log("pass : " + passwordStrength);
    }
    if (name === "userName") {
      // console.log(userName);
      setValidUserName(USER_NAME.test(userName));
    }
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
                      setUserFocus(true);
                      setInitialFocus(false);
                    }}
                    onBlur={() => {
                      setUserFocus(false);
                    }}
                  />
                  
                </Group>

                <ErrorParagraph valid={validUserName || initialFocus}>
                  {errMsg}
                </ErrorParagraph>

                <Group secondScreen={secondScreen}>
                  <FormInputPageCom
                    valid={validUserName}
                    initialFocus={initialFocus}
                    label="PASSWORD"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                  />
                  {<span >
                    <PasswordStrength
                      strength={passwordStrength}
                    ></PasswordStrength>
                  </span>}
                </Group>
              </div>
              <div>
                <div>
                  Here are some username suggestions{" "}
                  <Reload onClick={()=> {newRandomUserNames()}}>
                    <AiOutlineReload />
                  </Reload>
                </div>
                <RandomContainer>
                  <p onClick={() => {changeUserName(sug1)}}>{sug1}</p>
                  <p onClick={() => {changeUserName(sug2)}}>{sug2}</p>
                  <p onClick={() => {changeUserName(sug3)}}>{sug3}</p>
                  <p onClick={() => {changeUserName(sug4)}}>{sug4}</p>
                  <p onClick={() => {changeUserName(sug5)}}>{sug5}</p>
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
                {validUserName && (
                  <Button
                    page={true}
                    valid={validUserName}
                    type="button"
                    onClick={() => RandomUserName()}
                  >
                    SIGN UP
                  </Button>
                )}
                {!validUserName && (
                  <Button
                    page={true}
                    disabled
                    valid={validUserName}
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
});

export default SignUpPage;
