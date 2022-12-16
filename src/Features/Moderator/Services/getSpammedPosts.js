// Import api
import axios from "API/axios";

/**
 * A service to handle community list retrieval of spammed posts
 *
 * @param {Function} dataFetch - The function to make the request
 */
const getSpammedPosts = async (fetchData, auth, subreddit) => {
    if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;
  // communities-summary in json server
  fetchData({
    axiosInstance: axios,
    method: "GET",
    url: `/api/r/t5_${subreddit}/about/spammed`,
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        authorization: `Bearer ${auth.getToken()}`,
      },
    },
  });
};

export default getSpammedPosts;
