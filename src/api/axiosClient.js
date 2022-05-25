import { DB_URI, TOKEN_NAME } from "../constants";
import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: DB_URI,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  async (config) => {
    // Do something before request is sent
    // const user = JSON.parse(getCookie(COOKIE_USER));
    const token = localStorage.getItem(TOKEN_NAME);
    if (token) {
      config.headers.common["authorizationtoken"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response.data;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);

export default axiosClient;
