import axios, { AxiosInstance } from "axios";
import dotenv from "dotenv";

dotenv.config();

const baseURL = process.env.SERVER_URL || "http://localhost:5000/api";

const api: AxiosInstance = axios.create({
  baseURL,
});

export default api;
