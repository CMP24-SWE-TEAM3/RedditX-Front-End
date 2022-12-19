import axios from "API/axios";

/**
 * Function to issue ban user
 * @param {object} auth Context object coming from useAuth custom Hook
 * @param {Function} fetchFunction Coming from useFetchFunction custom hook
 * @param {object} dataObject The Data to be Sent in the POST request
 */
const banUser = (fetchData, auth, communityName, dataObject) => {
  if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;

  if (dataObject.userID !== undefined && dataObject.operation !== undefined) {
    if (
      typeof dataObject.userID === "string" &&
      typeof dataObject.operation === "string"
    ) {
      fetchData({
        axiosInstance: axios,
        method: "post",
        url: `/api/r/${communityName}/about/banned`,
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

export default banUser;
