import axios from "API/axios";

/**
 * Function to login with username and password
 * @param {Function} dataFetch Coming from useFetchFunction custom hook
 * @param {Object} objectData Object that contains the data that will be sent to the api
 */
export const loginApi = (dataFetch, objectData) => {
  if (
    objectData.type !== undefined &&
    objectData.username !== undefined &&
    objectData.password !== undefined
  ) {
    if (
      objectData.type === "bare email" &&
      typeof objectData.username === "string" &&
      typeof objectData.password === "string"
    ) {
      dataFetch({
        axiosInstance: axios,
        method: "POST",
        url: "/api/auth/login",
        requestConfig: { data: objectData },
      });
      return true;
    }
    return false;
  }
  return false;
};

/**
 * Function to signup with email, password and userName
 * @param {Function} dataFetch Coming from useFetchFunction custom hook
 * @param {Object} objectData Object that contains the data that will be sent to the api
 */
export const signupApi = (dataFetch, objectData) => {
  if (
    objectData.type !== undefined &&
    objectData.email !== undefined &&
    objectData.username !== undefined &&
    objectData.password !== undefined
  ) {
    if (
      objectData.type === "bare email" &&
      typeof objectData.username === "string" &&
      typeof objectData.email === "string" &&
      typeof objectData.password === "string"
    ) {
      dataFetch({
        axiosInstance: axios,
        method: "post",
        url: "/api/auth/signup",
        requestConfig: { data: objectData },
      });
      return true;
    }
    return false;
  }

  return false;
};

/**
 * Function to login with google account
 * @param {Function} dataFetch Coming from useFetchFunction custom hook
 * @param {Object} objectData Object that contains the data that will be sent to the api
 */
export const loginWithGoogle = (dataFetch, objectData) => {
  if (
    objectData.type !== undefined &&
    objectData.googleOrFacebookToken !== undefined
  ) {
    if (
      objectData.type === "gmail" &&
      typeof objectData.googleOrFacebookToken === "string"
    ) {
      // console.log(objectData.googleOrFacebookToken);
      dataFetch({
        axiosInstance: axios,
        method: "post",
        url: "/api/auth/login",
        requestConfig: { data: objectData },
      });
      return true;
    }
    return false;
  }

  return false;
};

/**
 * Function to login with facebook account
 * @param {Function} dataFetch Coming from useFetchFunction custom hook
 * @param {Object} objectData Object that contains the data that will be sent to the api
 */
export const loginWithFacebook = (dataFetch, objectData) => {
  if (
    objectData.type !== undefined &&
    objectData.googleOrFacebookToken !== undefined
  ) {
    if (
      objectData.type === "facebook" &&
      typeof objectData.googleOrFacebookToken === "string"
    ) {
      dataFetch({
        axiosInstance: axios,
        method: "post",
        url: "/api/auth/login",
        requestConfig: { data: objectData },
      });
      return true;
    }
    return false;
  }

  return false;
};

/**
 * Function to signup with google account
 * @param {Function} dataFetch Coming from useFetchFunction custom hook
 * @param {Object} objectData Object that contains the data that will be sent to the api
 */
export const signupWithGoogle = (dataFetch, objectData) => {
  if (
    objectData.type !== undefined &&
    objectData.googleOrFacebookToken !== undefined
  ) {
    if (
      objectData.type === "gmail" &&
      typeof objectData.googleOrFacebookToken === "string"
    ) {
      dataFetch({
        axiosInstance: axios,
        method: "post",
        url: "/api/auth/signup",
        requestConfig: { data: objectData },
      });
      return true;
    }
    return false;
  }

  return false;
};

/**
 * Function to signup with facebook account
 * @param {Function} dataFetch Coming from useFetchFunction custom hook
 * @param {Object} objectData Object that contains the data that will be sent to the api
 */
export const signupWithFacebook = (dataFetch, objectData) => {
  if (
    objectData.type !== undefined &&
    objectData.googleOrFacebookToken !== undefined
  ) {
    if (
      objectData.type === "facebook" &&
      typeof objectData.googleOrFacebookToken === "string"
    ) {
      dataFetch({
        axiosInstance: axios,
        method: "post",
        url: "/api/auth/signup",
        requestConfig: { data: objectData },
      });
      return true;
    }
    return false;
  }

  return false;
};

/**
 * Function to know if the userName is taken or not
 * @param {Function} dataFetch Coming from useFetchFunction custom hook
 * @param {String} userName The userName that the user chose
 */
export const isUserNameAvailable = (dataFetch, userName) => {
  let searchUserName = "t2_" + userName;
  if (userName?.length > 0) {
    dataFetch({
      axiosInstance: axios,
      method: "get",
      url: "/api/auth/username-available",

      requestConfig: {
        params: {
          username: searchUserName,
        },
      },
    });

    return true;
  }

  return false;
};

/**
 * Function to handle with forget username api
 * @param {Function} dataFetch Coming from useFetchFunction custom hook
 * @param {String} userName The userName that the user chose
 */
export const forgetUserNameApi = (dataFetch, objectData) => {
  if (objectData.operation !== undefined && objectData.email !== undefined) {
    if (objectData.operation === true && typeof objectData.email === "string") {
      dataFetch({
        axiosInstance: axios,
        method: "post",
        url: "/api/auth/forget",
        requestConfig: { data: objectData },
      });

      return true;
    }
    return false;
  }

  return false;
};

/**
 * Function to handle with forget password api
 * @param {Function} dataFetch Coming from useFetchFunction custom hook
 * @param {String} userName The userName that the user chose
 */
export const forgetPasswordApi = (dataFetch, objectData) => {
  if (
    objectData.operation !== undefined &&
    objectData.email !== undefined &&
    objectData.username !== undefined
  ) {
    if (
      objectData.operation === false &&
      typeof objectData.email === "string" &&
      typeof objectData.username === "string"
    ) {
      dataFetch({
        axiosInstance: axios,
        method: "post",
        url: "/api/auth/forget",
        requestConfig: { data: objectData },
      });

      return true;
    }
    return false;
  }

  return false;
};

/**
 * Function to handle with forget password api
 * @param {String} email The email of the user
 * @param {String} userName The userName of the user
 */
export const resetForgottenPassword = (dataFetch, myToken, objectData) => {
  const apiUrl = "/api/auth/reset-forgotten-password/" + myToken;

  if (
    objectData.newPassword !== undefined &&
    objectData.confirmedNewPassword !== undefined &&
    myToken !== undefined
  ) {
    if (
      typeof myToken === "string" &&
      typeof objectData.newPassword === "string" &&
      typeof objectData.confirmedNewPassword === "string"
    ) {
      dataFetch({
        axiosInstance: axios,
        method: "post",
        url: apiUrl,
        requestConfig: { data: objectData },
      });

      return true;
    }
    return false;
  }
  return false;
};

/**
 * Function to set gender of the user
 * @param {Function} dataFetch Coming from useFetchFunction custom hook
 * @param {Object} objectData Object that contains the data that will be sent to the api
 * @param {String} token The token of the user
 */
export const setGenderFunction = (dataFetch, objectData, token) => {
  if (objectData.type !== undefined && objectData.value !== undefined) {
    if (
      objectData.type === "gender" &&
      (objectData.value === "Man" || objectData.value === "Woman")
    ) {
      console.log("Entered setGender");
      dataFetch({
        axiosInstance: axios,
        method: "POST",
        url: "/api/user/update",
        requestConfig: {
          data: objectData,
          headers: {
            "Content-Language": "en-US",
            Authorization: `Bearer ${token}`,
          },
        },
      });
      return true;
    }
    return false;
  }
  return false;
};

/**
 * Function to set interests of user
 * @param {Function} dataFetch Coming from useFetchFunction custom hook
 * @param {Object} objectData Object that contains the data that will be sent to the api
 * @param {String} token The token of the user
 */
export const setInterestsFunction = (dataFetch, objectData, token) => {
  if (objectData.categories !== undefined) {
    console.log("Entered setInterests");
    dataFetch({
      axiosInstance: axios,
      method: "POST",
      url: "/api/user/me/interests",
      requestConfig: {
        data: objectData,
        headers: {
          "Content-Language": "en-US",
          Authorization: `Bearer ${token}`,
        },
      },
    });
    return true;
  }
  return false;
};
