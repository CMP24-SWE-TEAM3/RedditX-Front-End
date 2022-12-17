
// Import axios
import axios from "API/axios";

/**
 * A service to handle the submission of a post
 *
 * @param {Function} dataFetch - The function to make the request
 * @param {Object} post - The post data
 */
const submitVote = (dataFetch, vote, auth) => {
  if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;

  dataFetch({
    axiosInstance: axios,
    method: "post",
    url: "/api/listing/vote",
    requestConfig: {
      data: vote,
      headers: {
        "Content-Language": "en-US",
        authorization: `Bearer ${auth.getToken()}`,
      },
    },
  });
};

export default submitVote;
