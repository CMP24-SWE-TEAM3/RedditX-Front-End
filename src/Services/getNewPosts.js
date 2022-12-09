// Import api
import axios from "API/axios";

/**
 * A service to handle community list retrieval (List of user's communities)
 *
 * @param {Function} dataFetch - The function to make the request
 */
const getNewPosts = async (fetchData, auth, page, limit) => {
  if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;
  // communities-summary in json server
  fetchData({
    axiosInstance: axios,
    method: "GET",
    url: `/api/listing/posts/new?page=${page}&limit=${limit}`,
    // url: `https://api.redditswe22.tech/api/listing/posts/new?page=1&limit=50`,
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        // Authorization: `Bearer ${auth.getToken()}`,
      },
    },
  });
};

export default getNewPosts;
