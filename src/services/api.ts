import axios from "axios";

export const api = axios.create({
  baseURL: "https://and-now-jose-backend-api.onrender.com",
  // baseURL: "http://localhost:3333",
});
