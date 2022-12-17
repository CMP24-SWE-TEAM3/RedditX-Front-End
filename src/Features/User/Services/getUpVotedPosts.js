import axios from "API/axios";

/**
 * A service to handle retrieval of upvote posts of user
 *
 * @param {Function} fetchData - The function to make the request
 */
const getUpVotedPosts = async (fetchData, userName, auth, pgNum) => {
  if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;

  fetchData({
    axiosInstance: axios,
    method: "GET",
    url: `/api/user/${userName}/upvoted?page=${pgNum}&limit=12`,
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        Authorization: `Bearer ${auth.getToken()}`,
      },
    },
  });
};

export default getUpVotedPosts;
