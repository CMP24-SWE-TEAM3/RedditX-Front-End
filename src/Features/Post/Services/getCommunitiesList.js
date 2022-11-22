// Import api
import axios from "API/axios";

/**
 * A service to handle community list retrieval (List of user's communities)
 *
 * @param {Function} dataFetch - The function to make the request
 */
const getCommunitiesList = async (fetchData) => {
  fetchData({
    axiosInstance: axios,
    method: "GET",
    url: "/communities/",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
};

export default getCommunitiesList;
