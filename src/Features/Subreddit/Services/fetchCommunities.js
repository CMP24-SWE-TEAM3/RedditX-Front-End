import axios from "API/axios";

/**
 * Function to fetch available Communities
 * @param {number} pgNum - Number Of Page to Be Fetched
 * @param {string} category category to choose communities
 * @param {object} auth  Context object coming from useAuth custom Hook
 * @param {Function} fetchFunction Coming from useFetchFunction custom hook
 */

const fetchCommunities = (fetchFunction, auth, category, pgNum) => {
  if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;

    fetchFunction({
      axiosInstance: axios,
      method: 'GET',
      url: `/api/get_specific_category/?category=${category}&page=${pgNum}&limit=12`,
      requestConfig: {
        headers: {
          "Content-Language": "en-US",
          Authorization: `Bearer ${auth.getToken()}`,
        }
      },
    });
};

export default fetchCommunities;