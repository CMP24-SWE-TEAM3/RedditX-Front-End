import axios from "API/axios";

/**
 * A service to handle retrieval of comments of specific user
 *
 * @param {Function} fetchData - The function to make the request
 * @param {string} userName - id of user
 */
const getUserComments = async (fetchData, userName, auth, time, pgNum) => {
  if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;

  fetchData({
    axiosInstance: axios,
    method: "GET",
    url: `/api/user/${userName}/comments?page=${pgNum}&limit=12${
      time ? `&t=${time}` : ""
    }`,
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        Authorization: `Bearer ${auth.getToken()}`,
      },
    },
  });
};

export default getUserComments;
