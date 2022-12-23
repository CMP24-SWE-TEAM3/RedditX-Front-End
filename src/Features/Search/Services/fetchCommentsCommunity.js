import axios from "API/axios";
/**
 * A service to handle CommentsCommunity list retrieval
 *
 * @param {Function} fetchFunction - The function to make the request
 * @param {string} searchWord - the word we search for
 * @param {string} community - the community we search for
 * @param {object} auth - the authentication
 */
const fetchCommentsCommunity = (fetchFunction, auth, searchWord, community) => {
  if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;
  // console.log("Fetching posts", searchWord);
  fetchFunction({
    axiosInstance: axios,
    method: "GET",
    url: `/api/search/r/${community}?type=comment&q=${searchWord}`,
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        Authorization: ` Bearer ${auth.getToken()}`,
      },
    },
  });
};

export default fetchCommentsCommunity;
