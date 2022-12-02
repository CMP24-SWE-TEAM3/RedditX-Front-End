import axios from "API/axios";


/**
 * Function to issue a Join Community POST Request
 * @param {Function} fetchFunction Coming from useFetchFunction custom hook
 * @param {object} dataObject The Data to be Sent in the POST request
 */
const joinCommunity = (fetchFunction, dataObject, auth) => {
    
    fetchFunction({
      axiosInstance: axios,
      method: 'POST',
      url: '/api/user/subscribe',
      requestConfig: {
        data: dataObject,
        headers: {
          "Content-Language": "en-US",
          Authorization: `Bearer ${auth.getToken()}`,
        },
      },
    });
};

export default joinCommunity;