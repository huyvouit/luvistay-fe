import axiosClient from "./axiosClient.js";

const authApi = {
  postSignUp: (body) => {
    const url = "/user/signup";
    return axiosClient.post(url, body);
  },

  postSignIn: (body) => {
    const url = "/user/login";
    return axiosClient.post(url, body);
  },

  getUser: () => {
    const url = "/user";
    return axiosClient.get(url);
  },
};

export default authApi;
