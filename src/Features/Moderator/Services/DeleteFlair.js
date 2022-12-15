// Import axios
import axios from "API/axios";

/**
 * A service to handle the submission of a post
 *
 * @param {Function} dataFetch - The function to make the request
 * @param {Object} post - The post data
 */
const DeleteFlair = (dataFetch, post, auth) => {
  if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;
  //   communityName = "t5_imagePro235";
  dataFetch({
    axiosInstance: axios,
    method: "post",
    url: `/api/r/t5_imagePro235/delete-flair`,
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

export default DeleteFlair;
