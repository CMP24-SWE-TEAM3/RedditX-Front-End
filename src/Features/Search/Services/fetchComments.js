import axios from "API/axios";
/**
 * A service to handle Comments list retrieval
 *
 * @param {Function} fetchFunction - The function to make the request
 */
const fetchComments = (fetchFunction) => {
  fetchFunction({
    axiosInstance: axios,
    method: "GET",
    url: "http://localhost:8000/CommentList",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
};

export default fetchComments;
