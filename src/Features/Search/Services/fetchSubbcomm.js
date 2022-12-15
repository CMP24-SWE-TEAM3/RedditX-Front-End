import axios from "API/axios";
/**
 * A service to handle Subbcommunities list retrieval
 *
 * @param {Function} fetchFunction - The function to make the request
 */
const fetchSubbcomm = (fetchFunction, auth) => {
  if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;
  fetchFunction({
    axiosInstance: axios,
    method: "GET",
    url: "http://localhost:8000/CommunitiesSub2",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        // Authorization: ` Bearer ${auth.getToken()}`,
      },
    },
  });
};

export default fetchSubbcomm;
