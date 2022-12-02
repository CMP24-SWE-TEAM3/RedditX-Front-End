import axios from "API/axios";
/**
 * A service to handle Communities list retrieval
 *
 * @param {Function} fetchFunction - The function to make the request
 */

const fetchCommunities = (fetchFunction, auth, searchWord) => {
  fetchFunction({
    axiosInstance: axios,
    method: "GET",
    url: `/api/search/r?type=sr&q=${searchWord}`,
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        Authorization: ` Bearer ${auth.getToken()}`,
      },
    },
  });
};

export default fetchCommunities;
