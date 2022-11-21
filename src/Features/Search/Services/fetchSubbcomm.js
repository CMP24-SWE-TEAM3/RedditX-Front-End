import axios from "API/axios";
const fetchSubbcomm = (fetchFunction) => {
  fetchFunction({
    axiosInstance: axios,
    method: "GET",
    url: "http://localhost:8000/CommunitiesSub2",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
};

export default fetchSubbcomm;
