import { createSlice } from "@reduxjs/toolkit";
// import {} from "../store";

const initialState = {
  apartment: [],
  maxPage: null,
  searchRoom: null,
};

const apartmentSlice = createSlice({
  name: "apartmentSlice",
  initialState,
  reducers: {
    getAllApartment: (state, action) => {
      return {
        ...state,
        apartment: action.payload.apartment,
        maxPage: action.payload.totalPage,
      };
    },

    getApartmentBySearch: (state, action) => {
      return { ...state, searchRoom: action.payload };
    },
  },
});

export const { getAllApartment, getApartmentBySearch } = apartmentSlice.actions;

export default apartmentSlice.reducer;
