import axios from "axios";
import authServices from "./authServices";

export const api = axios.create({
    baseURL: "https://relaxh-server.herokuapp.com",
    timeout: 1000,    
}); 

api.interceptors.request.use(config => {
    const accessToken = authServices.getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});

api.interceptors.response.use(function (response) {
    return response;
  }, async function (error) {
    const originalRequest = error.config;
    const loginUrl = `https://relaxh-server.herokuapp.com/auth/login`;
    const refreshTokenUrl = "/auth/refresh";    
    if (error.response.status === 401 && originalRequest.url !== refreshTokenUrl && error.request.responseURL !== loginUrl) {      
      await authServices.refreshToken();      
      return api(originalRequest);  
    }
    return Promise.reject(error);
});

export const cancelTokenSource = axios.CancelToken.source();