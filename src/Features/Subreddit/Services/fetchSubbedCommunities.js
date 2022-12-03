import axios from "API/axios";

/**
 * Function to fetch Communities current user has subscribed to
 * @param {object} auth Context object coming from useAuth custom Hook
 * @param {Function} fetchFunction Coming from useFetchFunction custom hook
 */
const fetchSubbedCommunities = (fetchFunction, auth) => {
  if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;
    fetchFunction({
      axiosInstance: axios,
      method: 'GET',
      url: "/api/r/mine/subscriber",
      requestConfig: {
        headers: {
          "Content-Language": "en-US",
          Authorization: `Bearer ${auth.getToken()}`,
        },
      },
    });
};

export default fetchSubbedCommunities;