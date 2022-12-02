// Import api
import axios from "API/axios";

/**
 * A service to handle post flairs retrieval
 *
 * @param {Function} dataFetch - The function to make the request
 */
const getPostFlairs = async (fetchData, subreddit, auth) => {
  fetchData({
    axiosInstance: axios,
    method: "GET",
    url: `/api/r/${subreddit}/flair-list/`,
    // url: `https://api.redditswe22.tech/api/r/t5_imagePro235/api/flair-list?show=all`,
    // url: `http://localhost:8000/flairs/`,
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        Authorization: `Bearer ${auth.getToken()}`,
      },
    },
  });
};

export default getPostFlairs;
