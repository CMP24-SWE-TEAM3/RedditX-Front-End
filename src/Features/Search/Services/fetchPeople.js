import axios from "API/axios";
/**
 * A service to handle People list retrieval
 *
 * @param {Function} fetchFunction - The function to make the request
 */
const fetchPeople = (fetchFunction, auth) => {
  fetchFunction({
    axiosInstance: axios,
    method: "GET",
    url: "/api/search/r?type=user&q=moaz",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        Authorization: ` Bearer ${auth.getToken()}`,
      },
    },
  });
};

export default fetchPeople;
