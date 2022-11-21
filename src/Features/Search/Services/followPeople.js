import axios from "API/axios";

const followPeople = (fetchFunction, dataObj) => {
  fetchFunction({
    axiosInstance: axios,
    method: "POST",
    url: "http://localhost:8000/follow",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
      data: dataObj,
    },
  });
};
export default followPeople;
