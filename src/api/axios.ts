import axios from "axios";

const API = axios.create({
  baseURL: "https://yourl-f9d4.onrender.com/api/v1",
  withCredentials: true, 
});

export default API;
