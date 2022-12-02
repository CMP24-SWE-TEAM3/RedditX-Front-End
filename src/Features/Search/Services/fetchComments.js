import axios from "API/axios";
/**
 * A service to handle Comments list retrieval
 *
 * @param {Function} fetchFunction - The function to make the request
 */
const fetchComments = (fetchFunction, auth) => {
  fetchFunction({
    axiosInstance: axios,
    method: "GET",
    url: "/api/search/r?type=comment&q=xttexttex",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        Authorization: ` Bearer ${auth.getToken()}`,
      },
    },
  });
};

export default fetchComments;
