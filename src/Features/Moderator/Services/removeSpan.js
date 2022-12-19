// Import axios
import axios from "API/axios";

/**
 * Function to remove post or comment from span queue
 * @param {Function} fetchData Coming from useFetchFunction custom hook
 * @param {Object} auth auth object
 * @param {String} subreddit subreddit name
 * @return {Boolean}
 */

const removeSpan = async (fetchData, auth, subreddit, data) => {
  if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;
  fetchData({
    axiosInstance: axios,
    method: "patch",
    url: `/api/r/t5_${subreddit}/about/spammed`,
    requestConfig: {
      data: data,
      headers: {
        "Content-Language": "en-US",
        authorization: `Bearer ${auth.getToken()}`,
      },
    },
  });
};

export default removeSpan;
