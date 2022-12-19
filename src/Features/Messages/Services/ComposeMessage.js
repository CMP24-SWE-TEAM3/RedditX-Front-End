import axios from "API/axios";

/**
 * Function to fetch Communities with Random Categories
 * @param {object} auth Context object coming from useAuth custom Hook
 * @param {Function} fetchFunction Coming from useFetchFunction custom hook
 * @param {object} dataObject The Data to be Sent in the POST request
 */
const composeMessage = (fetchFunction, dataObject, auth) => {
  if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;
    console.log(`In Compose: ${dataObject}`);
    fetchFunction({
      axiosInstance: axios,
      method: "POST",
      url: "/api/message/compose",
      requestConfig: {
        data: dataObject,
        headers: {
          "Content-Language": "en-US",
          Authorization: `Bearer ${auth.getToken()}`,
        },
      },
    });
};

export default composeMessage;