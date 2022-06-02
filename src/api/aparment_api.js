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
    const url = `room/available-apartment`;
    return axiosClient.post(url, body);
  },
  searchRoom: (body) => {
    const url = `/room/searchV2`;
    return axiosClient.post(url, body);
  },

  getCityOfApartment: () => {
    const url = `/apartment/apartment-cites`;
    return axiosClient.get(url);
  },

  getReviewByApartment: (params) => {
    const url = "/apartment/review";
    return axiosClient.get(url, { params });
  },
  postReview: (body) => {
    const url = "/apartment/review";
    return axiosClient.get(url, body);
  },
  getAvgRatingByApartment: (id) => {
    const url = `/apartment/avg-rating/${id}`;
    return axiosClient.get(url);
  },

  postAddApartment: (body) => {
    const url = `/apartment/add-new-apartment`;
    return axiosClient.post(url, body);
  },
  postUpdateApartment: (body) => {
    const url = `/apartment/update`;
    return axiosClient.put(url, body);
  },

  disableApartment: (body) => {
    const url = `/apartment/delete-apartment`;
    return axiosClient.put(url, body);
  },
  activeApartment: (body) => {
    const url = `/apartment/delete-apartment`;
    return axiosClient.put(url, body);
  },
};

export default apartmentApi;
