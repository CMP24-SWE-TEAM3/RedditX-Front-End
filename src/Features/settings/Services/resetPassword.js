import axios from "API/axios";

/**
 * Function to Reset Password
 * @param {object} auth Context object coming from useAuth custom Hook
 * @param {Function} fetchFunction Coming from useFetchFunction custom hook
 * @param {object} dataObject The Data to be Sent in the POST request
 */
const resetPassword = (fetchFunction, dataObject, auth) => {
  if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;
  console.log("in change pass");
  fetchFunction({
    axiosInstance: axios,
    method: "patch",
    url: "/api/auth/reset-password",
    requestConfig: {
      data: dataObject,
      headers: {
        "Content-Language": "en-US",
        Authorization: `Bearer ${auth.getToken()}`,
      },
    },
  });
};

export default resetPassword;
