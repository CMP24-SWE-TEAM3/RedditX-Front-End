import axios from "API/axios";
/**
 * A service to handle Comments list retrieval
 *
 * @param {Function} fetchFunction - The function to make the request
 * @param {searchWord} fetchFunction - the word we search for
 */
const fetchComments = (fetchFunction, auth, searchWord) => {
  if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;
  fetchFunction({
    axiosInstance: axios,
    method: "GET",
    url: `/api/search/r?type=comment&q=${searchWord}`,
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        Authorization: ` Bearer ${auth.getToken()}`,
      },
    },
  });
};

export default fetchComments;
