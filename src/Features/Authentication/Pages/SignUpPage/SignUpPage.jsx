/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";




import SignUpPageFirstScreen from "Features/Authentication/Layouts/SignUpPageFirstScreen/SignUpPageFirstScreen";
import SignUpPageSecondScreen from "Features/Authentication/Layouts/SignUpPageSecondScreen/SignUpPageSecondScreen";



var defaultFormFields = {
  email: "",
  userName: "",
  password: "",
};

const SignUpPage = () => {
  /**
   * state to handel any change the user make in the input fields
   */
  const [formFields, setFormFields] = useState(defaultFormFields);

  /**
   * state to know if the email is valid or not to control what to show to the user
   */
  const [validEmail, setValidEmail] = useState(false);

  /**
   * state to know if the userName is valid or not to control what to show to the user
   */
  const [validUserName, setValidUserName] = useState(false);

  /**
   * state to know if the user passed the captcha or not
   */
  const [notRobot, setNotRobot] = useState(false);

  /**
   * state to know if the password is valid or not to control what to show to the user
   */
  const [validPassword, setValidPassword] = useState(false);

  /**
   * state to change the bar of password strength
   */
  const [passwordStrength, setPasswordStrength] = useState();

  /**
   * state to know what screen should be shown (if true show the screen of choosing userName and password)
   */
  const [secondScreen, setSecondScreen] = useState(false);

  /**
   * state to know if the user focused on input field at least one time
   */
  const [initialFocus, setInitialFocus] = useState(true);
  /**
   * state to know if the user focused on input field at least one time
   */
  const [initialFocus2, setInitialFocus2] = useState(true);

  /**
   * state to know what error message should be shown
   */
  const [errMsg, setErrMsg] = useState("");

  /**
   * states to handle the suggested random userNames
   */
  const [sug1, setSug1] = useState("");
  const [sug2, setSug2] = useState("");
  const [sug3, setSug3] = useState("");
  const [sug4, setSug4] = useState("");
  const [sug5, setSug5] = useState("");


  return (
    <>
      {
        <SignUpPageFirstScreen
          errMsg={"not a valid email address"}
          formFields={formFields}
          initialFocus={initialFocus}
          secondScreen={secondScreen}
          setErrMsg={setErrMsg}
          setFormFields={setFormFields}
          setInitialFocus={setInitialFocus}
          setSecondScreen={setSecondScreen}
          setSug1={setSug1}
          setSug2={setSug2}
          setSug3={setSug3}
          setSug4={setSug4}
          setSug5={setSug5}
          setValidEmail={setValidEmail}
          setValidUserName={setValidUserName}
          validEmail={validEmail}
        />
      }

      {
        <SignUpPageSecondScreen
          errMsg={"not a valid username"}
          formFields={formFields}
          initialFocus={initialFocus}
          initialFocus2={initialFocus2}
          notRobot={notRobot}
          passwordStrength={passwordStrength}
          secondScreen={secondScreen}
          setErrMsg={setErrMsg}
          setFormFields={setFormFields}
          setInitialFocus={setInitialFocus}
          setInitialFocus2={setInitialFocus2}
          setNotRobot={setNotRobot}
          setPasswordStrength={setPasswordStrength}
          setSecondScreen={setSecondScreen}
          setValidPassword={setValidPassword}
          setValidUserName={setValidUserName}
          setSug1={setSug1}
          setSug2={setSug2}
          setSug3={setSug3}
          setSug4={setSug4}
          setSug5={setSug5}
          sug1={sug1}
          sug2={sug2}
          sug3={sug3}
          sug4={sug4}
          sug5={sug5}
          validPassword={validPassword}
          validUserName={validUserName}
        />
      }
    </>
  );
};

export default SignUpPage;
