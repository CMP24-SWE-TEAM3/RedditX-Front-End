// Import axios
import axios from "API/axios";

/**
 * {Function} This function is responsible for fetching muted users
 * @param {fetchData} - fetch data from back end server
 * @param {auth} - authorization to make user has an access
 */
const getMutedUsers = async (fetchData, auth, communityName) => {
  if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;
  fetchData({
    axiosInstance: axios,
    method: "GET",
    url: `/api/r/${communityName}/about/muted`,
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        Authorization: `Bearer ${auth.getToken()}`,
      },
    },
  });
};

export default getMutedUsers;
