import axios from "axios";

//Define API BASE_URL
const BASE_URL = "http://localhost:5000/api/";

// Create axios instance, with specif request props(headers, auth, body, etc...)
export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});