import axios from "API/axios";

/**
 * A service to handle community opened retrieval 
 *
 * @param {Function} fetchData - The function to make the request
 */
const getSubreddit = async (fetchData, comm ,auth) => {
  fetchData({
    axiosInstance: axios,
    method: "GET",
    // url: "http://localhost:8000/Community/",
    url: `/api/info?id=${comm}`,
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        Authorization: `Bearer ${auth.getToken()}`,
      },
    },
  });
};

export default getSubreddit;