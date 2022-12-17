import axios from "API/axios";

/**
 * A service to handle User opened retrieval 
 *
 * @param {Function} fetchData - The function to make the request
 */
const getUser = async (fetchData, userName ,auth) => {

  if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;

  fetchData({
    axiosInstance: axios,
    method: "GET",
    url: `/api/user/${userName}/about`,
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        Authorization: `Bearer ${auth.getToken()}`,
      },
    },
  });
};

export default getUser;