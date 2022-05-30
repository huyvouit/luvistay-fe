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
};

export default userApi;
