import axiosClient from "./axiosClient.js";

const userApi = {
  getAll: (params) => {
    const url = "/apartment/";
    return axiosClient.get(url, { params });
  },
};

export default userApi;
