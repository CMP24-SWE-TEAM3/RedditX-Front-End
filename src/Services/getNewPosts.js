// Import api
import axios from "API/axios";

/**
 * A service to handle community list retrieval (List of user's communities)
 *
 * @param {Function} dataFetch - The function to make the request
 */
const getNewPosts = async (fetchData, auth, page, limit) => {
  // communities-summary in json server
  fetchData({
    axiosInstance: axios,
    method: "GET",
    url: `/api/listing/posts/new?page=${page}&limit=${limit}`,
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
};

export default getNewPosts;
