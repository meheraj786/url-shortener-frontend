import axios from "axios";

const API = axios.create({
  baseURL: "https://url-shortener-backend-ngiy.onrender.com/api/v1",
  withCredentials: true, 
});

export default API;
