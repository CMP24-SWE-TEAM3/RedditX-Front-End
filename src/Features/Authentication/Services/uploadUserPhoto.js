// Import axios
import axios from "API/axios";

/**
 * A service to handle the submission of a post
 *
 * @param {Function} dataFetch - The function to make the request
 * @param {Object} post - The post data
 */
const uploadUserPhoto = (dataFetch, data, auth) => {
  if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;
  console.log("uploadUserPhoto", data);
  console.log("uploadUserPhoto", auth);

  dataFetch({
    axiosInstance: axios,
    method: "post",
    url: "/api/user/me/upload-user-photo/",
    requestConfig: {
      data: data,
      headers: {
        "Content-Language": "en-US",
        "Content-Type": "multipart/form-data",
        authorization: `Bearer ${auth.getToken()}`,
      },
    },
  });
};

export default uploadUserPhoto;
