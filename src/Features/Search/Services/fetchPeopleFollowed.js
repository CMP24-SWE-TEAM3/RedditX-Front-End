import axios from "API/axios";
const fetchPeopleFollowed = (fetchFunction) => {
  fetchFunction({
    axiosInstance: axios,
    method: "GET",
    url: "http://localhost:8000/PeopleFollow",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
};

export default fetchPeopleFollowed;
