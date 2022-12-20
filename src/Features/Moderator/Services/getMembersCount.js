// Import api
import axios from "API/axios";

/**
 * A service to handle community list retrieval of members count
 *
 * @param {Function} dataFetch - The function to make the request
 */
const getMembersCount = async (fetchData, auth, subreddit, type) => {
  if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;
  fetchData({
    axiosInstance: axios,
    method: "GET",
    url: `/api/r/${subreddit}/members-count?type=${type}`,
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        authorization: `Bearer ${auth.getToken()}`,
      },
    },
  });
};

export default getMembersCount;
