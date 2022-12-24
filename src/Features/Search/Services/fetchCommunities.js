import axios from "API/axios";
/**
 * A service to handle Communities list retrieval
 *
 * @param {Function} fetchFunction - The function to make the request
 * @param {string} searchWord - the word we search for
 * @param {object} auth - the authentication
 */

const fetchCommunities = (fetchFunction, auth, searchWord) => {
  if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;
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
