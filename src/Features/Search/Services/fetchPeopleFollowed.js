import axios from "API/axios";
/**
 * A service to handle PeopleFollowed list retrieval
 *
 * @param {Function} fetchFunction - The function to make the request
 */
const fetchPeopleFollowed = (fetchFunction, auth) => {
  if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;
  fetchFunction({
    axiosInstance: axios,
    method: "GET",
    url: "/api/user/me/followers",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        Authorization: ` Bearer ${auth.getToken()}`,
      },
    },
  });
};

export default fetchPeopleFollowed;
