import axios from "API/axios";

/**
 * A service to handle community opened retrieval 
 *
 * @param {Function} fetchData - The function to make the request
 */
const getSubreddit = async (fetchData) => {
  fetchData({
    axiosInstance: axios,
    method: "GET",
    url: "http://localhost:8000/Community/",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
};

export default getSubreddit;