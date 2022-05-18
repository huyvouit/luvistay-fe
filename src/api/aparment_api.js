import axiosClient from "./axiosClient.js";

const apartmentApi = {
  getAllApartment: (params) => {
    const url = "/apartment/all-by-page";
    return axiosClient.get(url, { params });
  },
};

export default apartmentApi;
