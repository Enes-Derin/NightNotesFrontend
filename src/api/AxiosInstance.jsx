import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/api/note", // backend URL’in
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;