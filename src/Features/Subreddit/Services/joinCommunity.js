import axios from "API/axios";


/**
 * Function to issue a Join Community POST Request
 * @param {Function} fetchFunction Coming from useFetchFunction custom hook
 * @param {object} dataObject The Data to be Sent in the POST request
 */
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