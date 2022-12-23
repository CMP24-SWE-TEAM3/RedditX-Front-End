import axios from "API/axios";
/**
 * A service to handle Posts list retrieval
 *
 * @param {Function} fetchFunction - The function to make the request
 * @param {string} searchWord - the word we search for
 * @param {string} Sort - the Sort we search for
 * @param {object} auth - the authentication
 * @param {string} community - the community we search for
 */
const fetchPostsCommunity = (
  fetchFunction,
  auth,
  searchWord,
  community,
  Sort
) => {
  if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;
  fetchFunction({
    axiosInstance: axios,
    method: "GET",
    url: `/api/search/r/${community}?type=post&q=${searchWord}&sort=${Sort}`,
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        Authorization: ` Bearer ${auth.getToken()}`,
      },
    },
  });
};

export default fetchPostsCommunity;
