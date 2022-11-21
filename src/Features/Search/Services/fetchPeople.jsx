import axios from "API/axios";
const fetchPeople = (fetchFunction) => {
  fetchFunction({
    axiosInstance: axios,
    method: "GET",
    url: "http://localhost:8000/PeopleList",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
};

export default fetchPeople;
