import axios from "API/axios";


/**
 * Function to fetch Communities with Random Categories
 * @param {object} auth Context object coming from useAuth custom Hook
 * @param {Function} fetchFunction Coming from useFetchFunction custom hook
 */
const fetchAllMessages = (fetchFunction) => {
//   if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;
    fetchFunction({
      axiosInstance: axios,
      method: "GET",
      url: "http://localhost:8000/all-messages",
      requestConfig: {
        headers: {
          "Content-Language": "en-US",
        //   Authorization: `Bearer ${auth.getToken()}`,
        },
      },
    });
};

export default fetchAllMessages;