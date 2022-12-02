// Import api
import axios from "API/axios";

/**
 * A service to handle community list retrieval (List of user's communities)
 *
 * @param {Function} dataFetch - The function to make the request
 */
const getCommunitiesList = async (fetchData, auth) => {
  // communities-summary in json server
  fetchData({
    axiosInstance: axios,
    method: "GET",
    // url: "http://localhost:8000/communities-summary/",
    url: "/api/r/mine/subscriber/",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        Authorization: `Bearer ${auth.getToken()}`,
      },
    },
  });
};

export default getCommunitiesList;
