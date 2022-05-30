import axiosClient from "./axiosClient.js";

const userApi = {
  getAll: (params) => {
    const url = "/apartment/";
    return axiosClient.get(url, { params });
  },

  postBooking: (body) => {
    const url = "/bill/create-bill";
    return axiosClient.post(url, body);
  },
  putUpdateUser: (body) => {
    const url = "/user/";
    return axiosClient.put(url, body);
  },
};

export default userApi;
