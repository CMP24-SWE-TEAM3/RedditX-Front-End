import axios from "API/axios";
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
