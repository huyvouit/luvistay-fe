import axiosClient from "./axiosClient.js";

const userApi = {
  getAll: (params) => {
    const url = "/apartment/";
    return axiosClient.get(url, { params });
  },

  getApartmentOfUser: () => {
    const url = "/apartment/apartment-of-user";
    return axiosClient.get(url);
  },
  updateApartmentOfUser: (body) => {
    const url = "/apartment/update";
    return axiosClient.post(url, body);
  },
  getRentsOfApartment: () => {
    const url = "/apartment/apartment-of-user";
    return axiosClient.get(url);
  },
  postBooking: (body) => {
    const url = "/bill/create-bill";
    return axiosClient.post(url, body);
  },
  getOrderByUser: () => {
    const url = "/bill/get-user-bill";
    return axiosClient.get(url);
  },
  postNewPassword: (body) => {
    const url = "/user/reset-password";
    return axiosClient.post(url, body);
  },
  putUpdateUser: (body) => {
    const url = "/user/";
    return axiosClient.put(url, body);
  },
};

export default userApi;
