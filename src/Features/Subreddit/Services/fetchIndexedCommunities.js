import axios from "API/axios";

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