// Import axios
import axios from "API/axios";

/**
 * {Function} This function is responsible for fetching the data to show  random categories cart
 * @return {{requestConfig: {headers: {"Content-Language": string}}, axiosInstance: AxiosInstance, method: string, url: string}}
 * @param {fetchData} - fetch data from back end server
 * @param {auth} - authorization to make user has an access
 */
const randomCategories = async (fetchData, auth) => {
  fetchData({
    axiosInstance: axios,
    method: "GET",
    url: "/api/r/random-category/",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        Authorization: `Bearer ${auth.getToken()}`,
      },
    },
  });
};

export default randomCategories;
