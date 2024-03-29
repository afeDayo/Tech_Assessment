import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://techassessment-backend.onrender.com",
});

export default axiosInstance;
