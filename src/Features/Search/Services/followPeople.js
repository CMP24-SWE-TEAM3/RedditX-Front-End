import axios from "API/axios";
/**
 * A service to handle the people join operations
 *
 * @param {Function} fetchFunction - The function to make the request
 * @param {Object} dataObj - The people join data
 */
const followPeople = (fetchFunction, dataObj) => {
  fetchFunction({
    axiosInstance: axios,
    method: "POST",
    url: "http://localhost:8000/follow",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
      data: dataObj,
    },
  });
};
export default followPeople;
