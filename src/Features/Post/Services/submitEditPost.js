// Import axios
import axios from "API/axios";

/**
 * A service to handle the submission of a post
 *
 * @param {Function} dataFetch - The function to make the request
 * @param {Object} post - The post data
 */
const submitEditPost = (dataFetch, post, auth) => {
  if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;

  dataFetch({
    axiosInstance: axios,
    method: "post",
    // url: "https://localhost:8000/submit/",
    url: "/api/listing/edit-user-text/",
    requestConfig: {
      data: post,
      headers: {
        "Content-Language": "en-US",
        authorization: `Bearer ${auth.getToken()}`,
      },
    },
  });
};

export default submitEditPost;
