import axiosClient from "./axiosClient.js";

const authApi = {
  postSignUp: (body) => {
    const url = "/auth/signup";
    return axiosClient.post(url, body);
  },

  postSignIn: (body) => {
    const url = "/auth/login";
    return axiosClient.post(url, body);
  },

  getUser: () => {
    const url = "/user";
    return axiosClient.get(url);
  },
};

export default authApi;
