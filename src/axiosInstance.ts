import axios from "axios";

const API_KEY = String(import.meta.env.VITE_API_KEY);
// const API_KEY = "8d2d0908f07a454aa9b331780d4bad05";

// console.log("api key", API_KEY);

const axiosInstance = axios.create({
  headers: {
    "X-API-KEY": API_KEY,
  },
});

export default axiosInstance;
