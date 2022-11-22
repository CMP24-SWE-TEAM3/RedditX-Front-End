import axios from "API/axios";
/**
 * A service to handle Subbcommunities list retrieval
 *
 * @param {Function} fetchFunction - The function to make the request
 */
const fetchSubbcomm = (fetchFunction) => {
  fetchFunction({
    axiosInstance: axios,
    method: "GET",
    url: "http://localhost:8000/CommunitiesSub2",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
};

export default fetchSubbcomm;
