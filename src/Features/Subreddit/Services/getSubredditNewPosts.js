import axios from "API/axios";

/**
 * A service to handle retrieval of New posts of specific subreddit
 *
 * @param {Function} fetchData - The function to make the request
 */
const getSubredditNewPosts = async (fetchData, comm, auth) => {
  fetchData({
    axiosInstance: axios,
    method: "GET",
    url: `/api/listing/posts/r/${comm}/new?page=1&limit=5`,
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        Authorization: `Bearer ${auth.getToken()}`,
      },
    },
  });
};

export default getSubredditNewPosts;
