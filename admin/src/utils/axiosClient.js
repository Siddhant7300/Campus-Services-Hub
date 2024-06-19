import axios from "axios";
import { KEY_ACCESS_TOKEN, getItem, removeItem, setItem } from "./localStorageManager";

let baseURL = 'http://localhost:4000/api/';

export const axiosClient = axios.create({
    baseURL,
    withCredentials: true,
});

axiosClient.interceptors.request.use((request) => {
    const accessToken = getItem(KEY_ACCESS_TOKEN);
    // console.log("Access token : ", accessToken);
    request.headers["Authorization"] = `Bearer ${accessToken}`;
    // console.log("Request  : ",request)
    return request;
});


axiosClient.interceptors.response.use(
    async (response) => {
    const data = response.data;
    if (data.status === "ok") {
        return data;
    }

    const originalRequest = response.config;
    const statusCode = data.statusCode;
    const error = data.message;
    
    if(statusCode === 401 &&!originalRequest._retry){
        originalRequest._retry = true;
        const response = await axios.create({
            withCredentials: true,
        }).get(`${baseURL}auth/refresh`);

        if(response.data.status === 'ok'){
            setItem(KEY_ACCESS_TOKEN, response.data.result.accessToken);
            originalRequest.headers['Authorization'] = `Bearer ${response.data.result.accessToken}`;
            return axios(originalRequest);
        }else{
            removeItem(KEY_ACCESS_TOKEN);
            window.location.replace('/login', '_self');
            return Promise.reject(error);
        }
    }
    return Promise.reject(error);
}, async(error) => {
    return Promise.reject(error);
});
