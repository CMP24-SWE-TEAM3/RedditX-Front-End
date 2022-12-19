import axios from "API/axios";

/**
 * A service to handle getting followers of user
 *
 * @param {Function} fetchData - The function to make the request
 */
const getFollowers = async (fetchData, auth) => {
  if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;

  fetchData({
    axiosInstance: axios,
    method: "GET",
    url: `/api/user/me/followers`,
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        Authorization: `Bearer ${auth.getToken()}`,
      },
    },
  });
};

export default getFollowers;
