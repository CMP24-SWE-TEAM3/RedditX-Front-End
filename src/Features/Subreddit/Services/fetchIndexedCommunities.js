import axios from "API/axios";


/**
 * Function to fetch Communities according to letter indexing
 * @param {Function} dataFetch Coming from useFetchFunction custom hook
 */
const fetchIndexedCommunities = (fetchFunction) => {
    
    fetchFunction({
      axiosInstance: axios,
      method: 'GET',
      url: "http://localhost:8000/index--Leaderboard",
      requestConfig: {
        headers: {
          "Content-Language": "en-US",
        },
      },
    });
};

export default fetchIndexedCommunities;