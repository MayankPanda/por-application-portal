import axiosInstance from "../utils/interceptor";
import axios from "axios";
export const loginUser = (postData) => {
    return new Promise((resolve, reject) => {
        axios.post("https://localhost:5000/api/login", postData, { rejectUnauthorized: false })
            .then(function (response) {
                resolve(response);
            })
            .catch(function (error) {
                reject(error);
            })
    });
}
