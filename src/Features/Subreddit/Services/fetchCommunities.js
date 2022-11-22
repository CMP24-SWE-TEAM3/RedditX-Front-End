import axios from "API/axios";

/**
 * Function to fetch available Communities
 * @param {string} category category to choose communities
 * @param {object} auth  Context object coming from useAuth custom Hook
 * @param {Function} fetchFunction Coming from useFetchFunction custom hook
 */

const fetchCommunities = (fetchFunction, auth, category) => {
    console.log(`Inside Function: ${category}`);
    fetchFunction({
      axiosInstance: axios,
      method: 'GET',
      url: "http://localhost:8000/communities--Leaderboard",
      requestConfig: {
        headers: {
          "Content-Language": "en-US",
          Authorization: `Bearer ${auth.getToken()}`,
        }
      },
    });
};

export default fetchCommunities;