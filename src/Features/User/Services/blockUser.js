import axios from "API/axios";

/**
 * Function to issue a block user
 * @param {object} auth Context object coming from useAuth custom Hook
 * @param {Function} fetchFunction Coming from useFetchFunction custom hook
 * @param {object} dataObject The Data to be Sent in the POST request
 */
const blockUser = (fetchData, auth, dataObject) => {
  if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;

  if (dataObject.action !== undefined && dataObject.userID !== undefined) {
    if (
      typeof dataObject.action === "boolean" &&
      typeof dataObject.userID === "string"
    ) {
      fetchData({
        axiosInstance: axios,
        method: "post",
        url: "/api/user/block-user",
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

export default blockUser;
