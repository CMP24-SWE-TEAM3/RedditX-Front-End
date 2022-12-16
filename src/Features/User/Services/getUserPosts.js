import axios from "API/axios";

/**
 * A service to handle retrieval of hot posts of specific subreddit
 *
 * @param {Function} fetchData - The function to make the request
 */
const getUserPosts = async (fetchData, userName, auth, time, pgNum) => {
  if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;

  fetchData({
    axiosInstance: axios,
    method: "GET",
    url: `/api/user/${userName}/submitted?page=${pgNum}&limit=12${
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

export default getUserPosts;
