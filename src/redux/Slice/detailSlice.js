import { createSlice } from "@reduxjs/toolkit";
// import {} from "../store";

const initialState = {
  info: null,
  rooms: [],
  searchRoom: null,
  reviews: null,
  maxPageReview: null,
  avgRating: 0,
};

const DetailSlice = createSlice({
  name: "apartmentSlice",
  initialState,
  reducers: {
    getApartment: (state, action) => {
      return { ...state, info: action.payload };
    },
    getRoom: (state, action) => {
      return { ...state, rooms: action.payload };
    },
    searchRoomByApartment: (state, action) => {
      return { ...state, searchRoom: action.payload };
    },
    getReviewByApartment: (state, action) => {
      return {
        ...state,
        reviews: action.payload.reviews,
        maxPageReview: action.payload.maxPage,
      };
    },
    getAvgRatingByApartment: (state, action) => {
      return { ...state, avgRating: action.payload };
    },
  },
});

export const {
  getApartment,
  getRoom,
  searchRoomByApartment,
  getReviewByApartment,
  getAvgRatingByApartment,
} = DetailSlice.actions;

export default DetailSlice.reducer;
