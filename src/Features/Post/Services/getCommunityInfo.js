// Import api
import axios from "API/axios";

/**
 * A service to handle community information retrieval
 *
 * @param {Function} dataFetch - The function to make the request
 */

function getCommunityInfo(fetchData, subreddit, auth) {
  if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;

  fetchData({
    axiosInstance: axios,
    method: "GET",
    url: `/api/r/info?id=${subreddit}`,
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        Authorization: `Bearer ${auth.getToken()}`,
      },
    },
  });
}

export default getCommunityInfo;
