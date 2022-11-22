// Import api
import axios from "API/axios";

/**
 * A service to handle post flairs retrieval
 *
 * @param {Function} dataFetch - The function to make the request
 */
const getPostFlairs = async (fetchData) => {
  fetchData({
    axiosInstance: axios,
    method: "GET",
    url: "/flairs/",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
};

export default getPostFlairs;
