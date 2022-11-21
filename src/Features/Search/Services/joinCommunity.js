import axios from "API/axios";
const joinCommunity = (fetchFunction, dataObj) => {
  fetchFunction({
    axiosInstance: axios,
    method: "POST",
    url: "http://localhost:8000/Join",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
      data: dataObj,
    },
  });
};
export default joinCommunity;
