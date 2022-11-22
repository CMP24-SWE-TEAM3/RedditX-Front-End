import { default as axios } from "axios";
// Base URL for the api
const BASE_URL = "http://localhost:8000";
// const BASE_URL = "http://api.redditswe22.tech";

export default axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});