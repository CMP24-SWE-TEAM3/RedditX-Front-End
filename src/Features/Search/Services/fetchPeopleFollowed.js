import axios from "API/axios";
/**
 * A service to handle PeopleFollowed list retrieval
 *
 * @param {Function} fetchFunction - The function to make the request
 */
const fetchPeopleFollowed = (fetchFunction) => {
  fetchFunction({
    axiosInstance: axios,
    method: "GET",
    url: "http://localhost:8000/PeopleFollow",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
};

export default fetchPeopleFollowed;
