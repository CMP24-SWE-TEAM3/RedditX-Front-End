import axios from "API/axios";
/**
 * A service to handle the community join operations
 *
 * @param {Function} fetchFunction - The function to make the request
 * @param {Object} dataObj - The communities join data
 */
const joinCommunity = (fetchFunction, dataObj) => {
  fetchFunction({
    axiosInstance: axios,
    method: "POST",
    url: "http://localhost:8000/Join",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
      data: dataObj,
    },
  });
};
export default joinCommunity;
