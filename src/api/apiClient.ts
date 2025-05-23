import axios from "axios";

const apiClient = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_BASE_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
