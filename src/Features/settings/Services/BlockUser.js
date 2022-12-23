import axios from "API/axios";

/**
 * Function to Block Users
 * @param {object} auth Context object coming from useAuth custom Hook
 * @param {Function} fetchFunction Coming from useFetchFunction custom hook
 * @param {object} dataObject The Data to be Sent in the POST request
 */
const blockUser = (fetchFunction, dataObject, auth) => {
  if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;
    fetchFunction({
      axiosInstance: axios,
      method: "POST",
      url: "/api/user/block-user",
      requestConfig: {
        data: dataObject,
        headers: {
          "Content-Language": "en-US",
          Authorization: `Bearer ${auth.getToken()}`,
        },
      },
    });
};

export default blockUser;