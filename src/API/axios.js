import { default as axios } from "axios";
// Base URL for the api
const BASE_URL = "https://api.redditswe22.tech";
export default axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export { BASE_URL };
