// Import api
import axios from "API/axios";

/**
 * A service to handle community list retrieval (List of user's communities)
 *
 * @param {Function} dataFetch - The function to make the request
 */
const getPosts = async (fetchData, auth, type, time, page, limit) => {
  // communities-summary in json server
  fetchData({
    axiosInstance: axios,
    method: "GET",
    url: `/api/listing/posts/${type}?page=${page}&limit=${limit}${
      time ? `&t=${time}` : ""
    }`,
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
};
///api/listing/posts/hot
export default getPosts;
