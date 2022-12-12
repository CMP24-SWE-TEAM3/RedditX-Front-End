import axios from "API/axios";
/**
 * A service to handle Posts list retrieval
 *
 * @param {Function} fetchFunction - The function to make the request
 * @param {subreddit} fetchFunction - the subreddit we fetch flairs for
 */
const fetchFlairs = (fetchFunction, auth, subreddit) => {
  // console.log("Fetching posts", searchWord);
  fetchFunction({
    axiosInstance: axios,
    method: "GET",
    url: `/api/r/cars/api/flair-list?show=all`,
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        Authorization: ` Bearer ${auth.getToken()}`,
      },
    },
  });
};

export default fetchFlairs;
