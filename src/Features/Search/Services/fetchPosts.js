import axios from "API/axios";
/**
 * A service to handle Posts list retrieval
 *
 * @param {Function} fetchFunction - The function to make the request
 */
const fetchPosts = (fetchFunction, auth) => {
  fetchFunction({
    axiosInstance: axios,
    method: "GET",
    url: "/api/search/r?type=post&q=text",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        Authorization: ` Bearer ${auth.getToken()}`,
      },
    },
  });
};

export default fetchPosts;
