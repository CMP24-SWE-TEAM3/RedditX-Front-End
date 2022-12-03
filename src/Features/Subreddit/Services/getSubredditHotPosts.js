import axios from "API/axios";

/**
 * A service to handle retrieval of hot posts of specific subreddit
 *
 * @param {Function} fetchData - The function to make the request
 */
const getSubredditHotPosts = async (fetchData, comm ,auth) => {
  // console.log(comm);
  fetchData({
    axiosInstance: axios,
    method: "GET",
    // url: "http://localhost:8000/Community/",
    url: `/api/listing/posts/r/${comm}/hot?page=1&limit=5`,
    // url: `/api/listing/posts/r/t5_imagePro235/hot?page=1&limit=5`,
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        Authorization: `Bearer ${auth.getToken()}`,
      },
    },
  });
};

export default getSubredditHotPosts;