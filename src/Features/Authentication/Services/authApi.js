/* eslint-disable no-useless-concat */
/* eslint-disable no-unused-vars */
import { useAuth } from "../Contexts/Authentication";
import axios from "./axios";

const LOGIN_URL = "/login";
const SIGNUP_URL = "/signup";
const USERNAME_AVAILABLE = "/api/username-available";
const FORGET = "/login/forget";
const RESET_FORGOTTEN_PASSWORD = "/login/reset-forgotten-password";

/**
 * Function to login with username and password
 * @param {String} userName The userName of the user
 * @param {String} password The password of the user
 * @param {Function} setLoginErrorMsg Function to set the error message of login when any error occurred
 * @param {Function} setShowLoginErrorMsg Function to make the error message of login visible
 */
export const loginApi = async (
  userName,
  password,
  setLoginErrorMsg,
  setShowLoginErrorMsg
) => {
  try {
    const response = await axios.post(
      LOGIN_URL,
      JSON.stringify({
        type: "bare email",
        username: userName,
        password: password,
      })
    );

    const name = response?.data?.username;
    const accessToken = response?.data?.token;
    const expiresIn = response?.data?.expiresIn;

    return { name, accessToken, expiresIn };
  } catch (err) {
    if (!err?.response) {
      setLoginErrorMsg("No Server Response");
    } else if (err.response?.status === 400) {
      setLoginErrorMsg("Missing UserName or Password");
    } else if (err.response?.status === 401) {
      setLoginErrorMsg("Unauthorized");
    } else if (err.response?.status === 404) {
      setLoginErrorMsg("Wrong username or password");
    } else {
      setLoginErrorMsg("Login Failed");
    }

    setShowLoginErrorMsg(true);
    return false;
  }
};

/**
 * Function to signup with email, password and userName
 * @param {String} email The email of the user
 * @param {String} userName The userName of th user
 * @param {String} password The password of the user
 * @param {Function} setSignupErrorMsg Function to set the error message of signup when any error occurred
 * @param {Function} setShowSignupErrorMsg Function to make the error message of signup visible
 */
export const signupApi = async (
  email,
  userName,
  password,
  setSignupErrorMsg,
  setShowSignupErrorMsg
) => {
  try {
    const response = await axios.post(
      SIGNUP_URL,
      JSON.stringify({
        type: "bare email",
        email: email,
        username: userName,
        password: password,
      })
    );
    const name = response?.data?.username;
    const accessToken = response?.data?.token;
    const expiresIn = response?.data?.expiresIn;

    return { name, accessToken, expiresIn };
  } catch (err) {
    if (!err?.response) {
      setSignupErrorMsg("No Server Response");
    } else if (err.response?.status === 401) {
      setSignupErrorMsg("Unauthorized");
    } else {
      setSignupErrorMsg("Signup Failed");
    }

    setShowSignupErrorMsg(true);

    return false;
  }
};

/**
 * Function to login with google account
 * @param {String} googleToken The token that retrieved from google
 * @param {Function} setLoginErrorMsg Function to set the error message of login when any error occurred
 * @param {Function} setShowLoginErrorMsg Function to make the error message of login visible
 */
export const loginWithGoogle = async (
  googleToken,
  setLoginErrorMsg,
  setShowLoginErrorMsg
) => {
  try {
    const response = await axios.post(
      LOGIN_URL,
      JSON.stringify({
        type: "google",
        googleOrFacebookToken: googleToken,
      })
    );
    const name = response?.data?.username;
    const accessToken = response?.data?.token;
    const expiresIn = response?.data?.expiresIn;

    return {name, accessToken, expiresIn };
  } catch (err) {
    if (!err?.response) {
      setLoginErrorMsg("No Server Response");
    } else if (err.response?.status === 401) {
      setLoginErrorMsg("Unauthorized");
    } else {
      setLoginErrorMsg("Login Failed");
    }

    setShowLoginErrorMsg(true);

    return false;
  }
};

/**
 * Function to login with facebook account
 * @param {String} facebookToken The token that retrieved from facebook
 * @param {Function} setLoginErrorMsg Function to set the error message of login when any error occurred
 * @param {Function} setShowLoginErrorMsg Function to make the error message of login visible
 */
export const loginWithFacebook = async (
  facebookToken,
  setLoginErrorMsg,
  setShowLoginErrorMsg
) => {
  try {
    const response = await axios.post(
      LOGIN_URL,
      JSON.stringify({
        type: "facebook",
        googleOrFacebookToken: facebookToken,
      })
    );

    const name = response?.data?.username;
    const accessToken = response?.data?.token;
    const expiresIn = response?.data?.expiresIn;

    return { name,accessToken, expiresIn };
  } catch (err) {
    if (!err?.response) {
      setLoginErrorMsg("No Server Response");
    } else if (err.response?.status === 401) {
      setLoginErrorMsg("Unauthorized");
    } else {
      setLoginErrorMsg("Login Failed");
    }

    setShowLoginErrorMsg(true);

    return false;
  }
};

/**
 * Function to signup with google account
 * @param {String} googleToken The token that retrieved from google
 * @param {Function} setSignupErrorMsg Function to set the error message of signup when any error occurred
 * @param {Function} setShowSignupErrorMsg Function to make the error message of signup visible
 */
export const signupWithGoogle = async (
  googleToken,
  setSignupErrorMsg,
  setShowSignupErrorMsg
) => {
  console.log(googleToken);
  try {
    const response = await axios.post(
      SIGNUP_URL,
      JSON.stringify({
        type: "google",
        googleOrFacebookToken: googleToken,
      })
    );

    const name = response?.data?.username;
    const accessToken = response?.data?.token;
    const expiresIn = response?.data?.expiresIn;

    return {name, accessToken, expiresIn };
  } catch (err) {
    if (!err?.response) {
      setSignupErrorMsg("No Server Response");
    } else if (err.response?.status === 401) {
      setSignupErrorMsg("Unauthorized");
    } else {
      setSignupErrorMsg("Login Failed");
    }

    setShowSignupErrorMsg(true);

    return false;
  }
};

/**
 * Function to signup with facebook account
 * @param {String} facebookToken The token that retrieved from facebook
 * @param {Function} setSignupErrorMsg Function to set the error message of signup when any error occurred
 * @param {Function} setShowSignupErrorMsg Function to make the error message of signup visible
 */
export const signupWithFacebook = async (
  facebookToken,
  setSignupErrorMsg,
  setShowSignupErrorMsg
) => {
  console.log(facebookToken);
  try {
    const response = await axios.post(
      SIGNUP_URL,
      JSON.stringify({
        type: "facebook",
        googleOrFacebookToken: facebookToken,
      })
    );

    const name = response?.data?.username;
    const accessToken = response?.data?.token;
    const expiresIn = response?.data?.expiresIn;

    return {name, accessToken, expiresIn };
  } catch (err) {
    if (!err?.response) {
      setSignupErrorMsg("No Server Response");
    } else if (err.response?.status === 401) {
      setSignupErrorMsg("Unauthorized");
    } else {
      setSignupErrorMsg("Login Failed");
    }

    setShowSignupErrorMsg(true);

    return false;
  }
};

/**
 * Function to know if the userName is taken or not
 * @param {String} userName The userName that the user chose
 * @param {Function} setIsAvailable Function to set the state of the availability of the userName
 */
export const isUserNameAvailable = async (userName) => {
  let searchUserName = "t2_" + userName;
  //console.log(searchUserName);
  try {
    const response = await axios.get(USERNAME_AVAILABLE, {
      params: {
        username: searchUserName,
      },
    });
    return true;
  } catch (err) {
    return false;
  }
};

/**
 * Function to handle with forget username api
 * @param {String} email The email of the user
 */
export const forgetUserNameApi = async (
  email,
  setForgetUserNameErrorMsg,
  setShowForgetUserNameErrorMsg
) => {
  try {
    const response = await axios.post(
      FORGET,
      JSON.stringify({
        email: email,
        operation: true,
      })
    );
    return true;
  } catch (err) {
    if (!err?.response) {
      setForgetUserNameErrorMsg("No Server Response");
    } else if (err.response?.status === 400) {
      setForgetUserNameErrorMsg("Bad request");
    } else if (err.response?.status === 404) {
      setForgetUserNameErrorMsg("User is not found");
    } else {
      setForgetUserNameErrorMsg("Operation failed");
    }

    setShowForgetUserNameErrorMsg(true);

    return false;
  }
};

/**
 * Function to handle with forget password api
 * @param {String} email The email of the user
 * @param {String} userName The userName of the user
 */
export const forgetPasswordApi = async (
  email,
  userName,
  setForgetPasswordErrorMsg,
  setShowForgetPasswordErrorMsg
) => {
  try {
    const response = await axios.post(
      FORGET,
      JSON.stringify({
        email: email,
        username: userName,
        operation: false,
      })
    );
    return true;
  } catch (err) {
    if (!err?.response) {
      setForgetPasswordErrorMsg("No Server Response");
    } else if (err.response?.status === 400) {
      setForgetPasswordErrorMsg("Bad request");
    } else if (err.response?.status === 404) {
      setForgetPasswordErrorMsg("User is not found");
    } else {
      setForgetPasswordErrorMsg("Operation failed");
    }

    setShowForgetPasswordErrorMsg(true);

    return false;
  }
};

/**
 * Function to handle with forget password api
 * @param {String} email The email of the user
 * @param {String} userName The userName of the user
 */
export const resetForgottenPassword = async (
  newPassword,
  confirmNewPassword,
  myToken,
  setForgetPasswordErrorMsg,
  setShowForgetPasswordErrorMsg
) => {
  const apiUrl = RESET_FORGOTTEN_PASSWORD + "/" + myToken;
  console.log(apiUrl);
  try {
    const response = await axios.post(
      apiUrl,
      JSON.stringify({
        newPassword: newPassword,
        confirmedNewPassword: confirmNewPassword,
      })
      // {
      //   params: {
      //     token: myToken,
      //   },
      // }
    );
    return true;
  } catch (err) {
    if (!err?.response) {
      setForgetPasswordErrorMsg("No Server Response");
    } else if (err.response?.status === 400) {
      setForgetPasswordErrorMsg("Bad request");
    } else {
      setForgetPasswordErrorMsg("Operation failed");
    }

    setShowForgetPasswordErrorMsg(true);

    return false;
  }
};
