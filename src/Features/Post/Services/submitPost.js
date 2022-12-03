// Import axios
import axios from "API/axios";

/**
 * A service to handle the submission of a post
 *
 * @param {Function} dataFetch - The function to make the request
 * @param {Object} post - The post data
 */
const submitPost = (dataFetch, post, auth) => {
  if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;

  console.log("submitPost", auth.getToken());
  console.log("postpost", post, ...post);
  dataFetch({
    axiosInstance: axios,
    method: "post",
    // url: "https://localhost:8000/submit/",
    url: "/api/listing/submit/",
    requestConfig: {
      data: post,
      headers: {
        "Content-Language": "en-US",
        "Content-Type": "multipart/form-data",
        authorization: `Bearer ${auth.getToken()}`,
      },
    },
  });
};

export default submitPost;
