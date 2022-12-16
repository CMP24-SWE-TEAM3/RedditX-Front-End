// Import axios
import axios from "API/axios";

/**
 * A service to handle the submission of a reply
 *
 * @param {Function} dataFetch - The function to make the request
 * @param {Object} post - The post data
 */
const submitSpam = (dataFetch, spamReason, auth) => {
  if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;
  dataFetch({
    axiosInstance: axios,
    method: "post",
    url: "/api/user/spam/",
    requestConfig: {
      data: spamReason,
      headers: {
        "Content-Language": "en-US",
        authorization: `Bearer ${auth.getToken()}`,
      },
    },
  });
};

export default submitSpam;
