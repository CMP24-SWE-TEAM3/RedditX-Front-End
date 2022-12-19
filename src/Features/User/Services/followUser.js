import axios from "API/axios";

/**
 * Function to issue a follow user request
 * @param {object} auth Context object coming from useAuth custom Hook
 * @param {Function} fetchFunction Coming from useFetchFunction custom hook
 * @param {object} dataObject The Data to be Sent in the POST request
 */
const followUser = (fetchData, auth, dataObject) => {
  if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;

  if (dataObject.action !== undefined && dataObject.srName !== undefined) {
    if (
      typeof dataObject.action === "string" &&
      typeof dataObject.srName === "string"
    ) {
      fetchData({
        axiosInstance: axios,
        method: "post",
        url: "/api/user/subscribe/",
        requestConfig: {
          data: dataObject,
          headers: {
            "Content-Language": "en-US",
            Authorization: `Bearer ${auth.getToken()}`,
          },
        },
      });
    }
  }
};

export default followUser;
