import { useState } from "react";



import LogInScreen from "../LogInScreen/LogInScreen";

import ForgetUserNameModal from "../ForgetUserNameModal/ForgetUserNameModal";

import ForgetPasswordModal from "../ForgetPasswordModal/ForgetPasswordModal";




const defaultFormFields = {
  userName: "",
  password: "",
  email: "",
};

/**
 * Login component that is used in Login modal
 * @returns {React.Component}  Login component that is used in Login modal
 */

const LogIn = () => {
  /**
   * state to know if the email is valid or not to control what to show to the user
   */
  const [validEmail, setValidEmail] = useState(false);

  /**
   * state to know if the user passed the captcha or not
   */
  const [notRobot, setNotRobot] = useState(false);

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
   * state to know what screen will be rendered (if userNameScreen equal true then show the forget userName modal )
   */
  const [userNameScreen, setUserNameScreen] = useState(false);

  /**
   * state to know what screen will be rendered (if passwordScreen equal true then show the forget password modal )
   */
  const [passwordScreen, setPasswordScreen] = useState(false);

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
   * state to know what error message should be shown
   */
  const [isLoading, setIsLoading] = useState(false);

  /**
   * state to know what error message should be shown
   */
  const [finishedLoading, setFinishedLoading] = useState(false);

  

 
 

  return (
    <>
      {
        <LogInScreen
          formFields={formFields}
          initialFocus={initialFocus}
          initialFocus2={initialFocus2}
          passwordScreen={passwordScreen}
          setErrMsg={setErrMsg}
          setFormFields={setFormFields}
          setInitialFocus={setInitialFocus}
          setInitialFocus2={setInitialFocus2}
          setPasswordScreen={setPasswordScreen}
          setUserNameScreen={setUserNameScreen}
          setValidName={setValidName}
          setValidPassword={setValidPassword}
          userNameScreen={userNameScreen}
          validName={validName}
          validPassword={validPassword}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          finishedLoading={finishedLoading}
          setFinishedLoading={setFinishedLoading}
        />
      }

      {/*     Forget username screen   */}

      {
        <ForgetUserNameModal
          errMsg={errMsg}
          formFields={formFields}
          initialFocus={initialFocus}
          notRobot={notRobot}
          setErrMsg={setErrMsg}
          setFormFields={setFormFields}
          setInitialFocus={setInitialFocus}
          setNotRobot={setNotRobot}
          setUserNameScreen={setUserNameScreen}
          setValidEmail={setValidEmail}
          userNameScreen={userNameScreen}
          validEmail={validEmail}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          finishedLoading={finishedLoading}
          setFinishedLoading={setFinishedLoading}
        />
      }

      {/*     Forget password screen   */}

      {
        <ForgetPasswordModal
          formFields={formFields}
          initialFocus={initialFocus}
          initialFocus2={initialFocus2}
          passwordScreen={passwordScreen}
          setErrMsg={setErrMsg}
          setFormFields={setFormFields}
          setInitialFocus={setInitialFocus}
          setInitialFocus2={setInitialFocus2}
          setPasswordScreen={setPasswordScreen}
          setUserNameScreen={setUserNameScreen}
          setValidEmail={setValidEmail}
          setValidName={setValidName}
          validEmail={validEmail}
          validName={validName}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          finishedLoading={finishedLoading}
          setFinishedLoading={setFinishedLoading}
        />
      }
    </>
  );
};

export default LogIn;
