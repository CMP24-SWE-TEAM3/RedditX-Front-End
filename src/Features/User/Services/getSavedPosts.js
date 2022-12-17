import axios from "API/axios";

/**
 * A service to handle retrieval of Saved posts of user
 *
 * @param {Function} fetchData - The function to make the request
 */
const getSavedPosts = async (fetchData, auth, pgNum) => {
  if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;

  fetchData({
    axiosInstance: axios,
    method: "GET",
    url: `/api/user/me/saved-posts?page=${pgNum}&limit=12`,
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        Authorization: `Bearer ${auth.getToken()}`,
      },
    },
  });
};

export default getSavedPosts;
