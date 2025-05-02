import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://localhost:${import.meta.env.VITE_PORT}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
