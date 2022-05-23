import axiosClient from "./axiosClient.js";

const apartmentApi = {
  getAllApartment: (params) => {
    const url = "/apartment/all-by-page";
    return axiosClient.get(url, { params });
  },
  getApartmentByType: (params) => {
    const url = "/apartment/all-by-page";
    return axiosClient.get(url, { params });
  },

  getApartmentById: (id) => {
    const url = `/apartment/detail/${id}`;
    return axiosClient.get(url);
  },

  getRoomByApartment: (id) => {
    const url = `/room/apartment/${id}`;
    return axiosClient.get(url);
  },
  searchRoomByApartment: (body) => {
    const url = `/room/search-room-available-of-apartment`;
    return axiosClient.get(url, body);
  },
};

export default apartmentApi;