import { default as axios } from "axios";
// Base URL for the api
const BASE_URL =
  process.env.REACT_APP_MODE === "production"
    ? process.env.REACT_APP_API_URL
    : process.env.REACT_APP_MOCK_URL;

export default axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export { BASE_URL };
