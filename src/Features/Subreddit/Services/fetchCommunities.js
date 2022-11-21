import axios from "API/axios";

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