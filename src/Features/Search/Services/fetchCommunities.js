import axios from "API/axios";
/**
 * A service to handle Communities list retrieval
 *
 * @param {Function} fetchFunction - The function to make the request
 */
const fetchCommunities = (fetchFunction) => {
  fetchFunction({
    axiosInstance: axios,
    method: "GET",
    url: "http://localhost:8000/communityList",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
};

export default fetchCommunities;
