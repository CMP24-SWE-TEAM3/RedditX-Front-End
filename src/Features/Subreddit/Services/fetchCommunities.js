import axios from "API/axios";

/**
 * Function to fetch available Communities
 * @param {Function} fetchFunction Coming from useFetchFunction custom hook
 */
const fetchCommunities = (fetchFunction) => {
    
    fetchFunction({
      axiosInstance: axios,
      method: 'GET',
      url: "http://localhost:8000/communities--Leaderboard",
      requestConfig: {
        headers: {
          "Content-Language": "en-US",
        },
      },
    });
};

export default fetchCommunities;