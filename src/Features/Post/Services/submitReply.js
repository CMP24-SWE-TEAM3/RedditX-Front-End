// Import axios
import axios from "API/axios";

/**
 * A service to handle the submission of a reply
 *
 * @param {Function} dataFetch - The function to make the request
 * @param {Object} post - The post data
 */
const submitReply = (dataFetch, reply, auth) => {
  console.log("replyreply", reply);
  if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;
  console.log("replyreply", reply);
  dataFetch({
    axiosInstance: axios,
    method: "post",
    url: "/api/listing/addreply/",
    requestConfig: {
      data: reply,
      headers: {
        "Content-Language": "en-US",
        authorization: `Bearer ${auth.getToken()}`,
      },
    },
  });
};

export default submitReply;
