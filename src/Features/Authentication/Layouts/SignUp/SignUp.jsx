import { useState} from "react";



import RandomUserName from "Features/Authentication/Utils/RandomUserName";



import SignUpFirstScreen from "../SignUpFirstScreen/SignUpFirstScreen";
import SignUpSecondScreen from "../SignUpSecondScreen/SignUpSecondScreen";



var defaultFormFields = {
  email: "",
  userName: "",
  password: "",
};

/**
 * Signup component that is used in Signup modal
 * @returns {React.Component}  Signup component that is used in Signup modal
 */

const SignUp = () => {
  /**
   * state to handel any change the user make in the input fields
   */
  const [formFields, setFormFields] = useState(defaultFormFields);

  /**
   * state to know if the email is valid or not to control what to show to the user
   */
  const [validEmail, setValidEmail] = useState(false);

  /**
   * state to know if the user passed the captcha or not
   */
  const [notRobot, setNotRobot] = useState(false);

  /**
   * state to know if the userName is valid or not to control what to show to the user
   */
  const [validUserName, setValidUserName] = useState(false);

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
   * Function to change userName shown in the userName textField by calling RandomUserName (function in utilities folder)
   */
  const changeUserName = () => {
    setFormFields({ ...formFields, userName: RandomUserName() });
    setValidUserName(true);
  };

 

  return (
    <>
      {
        <SignUpFirstScreen
          initialFocus={initialFocus}
          secondScreen={secondScreen}
          setInitialFocus={setInitialFocus}
          setSecondScreen={setSecondScreen}
          setValidEmail={setValidEmail}
          validEmail={validEmail}
          changeUserName={changeUserName}
          setFormFields={setFormFields}
          formFields={formFields}
        />
      }

      {
        <SignUpSecondScreen
          initialFocus={initialFocus}
          initialFocus2={initialFocus2}
          notRobot={notRobot}
          passwordStrength={passwordStrength}
          secondScreen={secondScreen}
          setSecondScreen={setSecondScreen}
          setInitialFocus={setInitialFocus}
          setInitialFocus2={setInitialFocus2}
          setNotRobot={setNotRobot}
          setPasswordStrength={setPasswordStrength}
          setValidPassword={setValidPassword}
          setValidUserName={setValidUserName}
          validPassword={validPassword}
          validUserName={validUserName}
          setFormFields={setFormFields}
          formFields={formFields}
        />
      }
    </>
  );
};

export default SignUp;
