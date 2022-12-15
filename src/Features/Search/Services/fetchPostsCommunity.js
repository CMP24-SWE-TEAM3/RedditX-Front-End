import axios from "API/axios";
/**
 * A service to handle Posts list retrieval
 *
 * @param {Function} fetchFunction - The function to make the request
 * @param {searchWord} fetchFunction - the word we search for
 */
const fetchPostsCommunity = (fetchFunction, auth, searchWord, community) => {
  if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;
  // console.log("Fetching posts", searchWord);
  fetchFunction({
    axiosInstance: axios,
    method: "GET",
    url: `/api/search/r/${community}?type=post&q=${searchWord}`,
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        Authorization: ` Bearer ${auth.getToken()}`,
      },
    },
  });
};

export default fetchPostsCommunity;
