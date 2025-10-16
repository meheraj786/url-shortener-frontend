import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true, // JWT cookies automatically sent
});

export default API;
