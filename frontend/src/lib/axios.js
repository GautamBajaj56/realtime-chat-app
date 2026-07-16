import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:5000/api"
      : "https://fullstack-chat-app-ev4k.onrender.com/api",
  withCredentials: true,
});