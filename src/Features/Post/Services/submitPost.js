// Import axios
import axios from "API/axios";

/**
 * A service to handle the submission of a post
 *
 * @param {Function} dataFetch - The function to make the request
 * @param {Object} post - The post data
 */
const submitPost = (dataFetch, post) => {
  dataFetch({
    axiosInstance: axios,
    method: "post",
    url: "/submit/",
    requestConfig: {
      data: post,
    },
  });
};

export default submitPost;
