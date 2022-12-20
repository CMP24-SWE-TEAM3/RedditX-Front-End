// Import api
import axios from "API/axios";

/**
 * A service to handle community list retrieval of page views
 *
 * @param {Function} dataFetch - The function to make the request
 */
const getPageViews = async (fetchData, auth, subreddit) => {
  if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;
  fetchData({
    axiosInstance: axios,
    method: "GET",
    url: `/api/r/${subreddit}/page-views`,
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        authorization: `Bearer ${auth.getToken()}`,
      },
    },
  });
};

export default getPageViews;
