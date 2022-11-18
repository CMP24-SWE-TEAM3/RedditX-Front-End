import axios from "API/axios";

const joinCommunity = (fetchFunction, dataObject) => {
    
    fetchFunction({
      axiosInstance: axios,
      method: 'POST',
      url: 'http://localhost:8000/Join--Leaderboard',
      requestConfig: {
        data: dataObject,
      },
    });
};

export default joinCommunity;