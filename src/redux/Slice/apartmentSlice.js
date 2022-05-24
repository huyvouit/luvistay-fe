import { createSlice } from "@reduxjs/toolkit";
// import {} from "../store";

const initialState = {
  apartment: [],
  searchRoom: [],
};

const apartmentSlice = createSlice({
  name: "apartmentSlice",
  initialState,
  reducers: {
    getAllApartment: (state, action) => {
      return { ...state, apartment: action.payload };
    },

    getApartmentBySearch: (state, action) => {
      return { ...state, searchRoom: action.payload };
    },
  },
});

export const { getAllApartment, getApartmentBySearch } = apartmentSlice.actions;

export default apartmentSlice.reducer;
