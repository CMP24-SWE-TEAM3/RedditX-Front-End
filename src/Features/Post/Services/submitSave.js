
// Import axios
import axios from "API/axios";

/**
 * A service to handle the submission of a reply
 *
 * @param {Function} dataFetch - The function to make the request
 * @param {Object} post - The post data
 */
const submitSave = (dataFetch, saveData, auth) => {
  if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;
  dataFetch({
    axiosInstance: axios,
    method: "post",
    url: "/api/listing/save/",
    requestConfig: {
      data: saveData,
      headers: {
        "Content-Language": "en-US",
        authorization: `Bearer ${auth.getToken()}`,
      },
    },
  });
};

export default submitSave;
