import axios from "API/axios";
/**
 * A service to handle People list retrieval
 *
 * @param {Function} fetchFunction - The function to make the request
 */
const fetchPeople = (fetchFunction) => {
  fetchFunction({
    axiosInstance: axios,
    method: "GET",
    url: "http://localhost:8000/PeopleList",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
};

export default fetchPeople;
