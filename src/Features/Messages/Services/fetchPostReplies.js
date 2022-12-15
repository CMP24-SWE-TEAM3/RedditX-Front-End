import axios from "API/axios";


/**
 * Function to fetch Communities with Random Categories
 * @param {object} auth Context object coming from useAuth custom Hook
 * @param {Function} fetchFunction Coming from useFetchFunction custom hook
 */
const fetchPostReplies = (fetchFunction, auth) => {
  // if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;
    fetchFunction({
      axiosInstance: axios,
      method: "GET",
      url: "/api/listing/get-post-replies",
      requestConfig: {
        headers: {
          "Content-Language": "en-US",
          Authorization: `Bearer ${auth.getToken()}`,
        },
      },
    });
};

export default fetchPostReplies;