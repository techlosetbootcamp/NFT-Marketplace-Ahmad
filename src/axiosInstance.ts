import axios from "axios";

const API_KEY = String(import.meta.env.VITE_API_KEY);
export const BASE_URL = "https://api.opensea.io/api/v2";

const axiosInstance = axios.create({
  headers: {
    "X-API-KEY": API_KEY,
  },
});

export default axiosInstance;
