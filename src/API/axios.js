import axios from "axios";
// Base URL for the api
const BASE_URL =
  "https://virtserver.swaggerhub.com/MOAZ25JAN2015_1/cascvasv/1.0.0";

export default axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});