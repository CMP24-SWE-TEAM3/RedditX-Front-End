import axios from "API/axios";

const fetchSubbedCommunities = (fetchFunction) => {
    
    fetchFunction({
      axiosInstance: axios,
      method: 'GET',
      url: "http://localhost:8000/Subscribed--Leaderboard",
      requestConfig: {
        headers: {
          "Content-Language": "en-US",
        },
      },
    });
};

export default fetchSubbedCommunities;