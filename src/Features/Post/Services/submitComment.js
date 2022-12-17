// Import axios
import axios from "API/axios";

/**
 * A service to handle the submission of a comment
 *
 * @param {Function} dataFetch - The function to make the request
 * @param {Object} post - The post data
 */
const submitComment = (dataFetch, comment, auth) => {
  if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;
  dataFetch({
    axiosInstance: axios,
    method: "post",
    url: "/api/listing/addcomment/",
    requestConfig: {
      data: comment,
      headers: {
        "Content-Language": "en-US",
        authorization: `Bearer ${auth.getToken()}`,
      },
    },
  });
};

export default submitComment;
