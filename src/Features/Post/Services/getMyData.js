import axios from "API/axios";

/**
 * A service to handle User opened retrieval
 *
 * @param {Function} fetchData - The function to make the request
 */
const getMyData = async (fetchData, auth) => {
  if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;

  fetchData({
    axiosInstance: axios,
    method: "GET",
    url: `/api/user/me/`,
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        Authorization: `Bearer ${auth.getToken()}`,
      },
    },
  });
};

export default getMyData;
