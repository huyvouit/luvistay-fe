import { createSlice } from "@reduxjs/toolkit";
// import {} from "../store";

const initialState = [];

const apartmentSlice = createSlice({
  name: "apartmentSlice",
  initialState,
  reducers: {
    getAllApartment: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { getAllApartment } = apartmentSlice.actions;

export default apartmentSlice.reducer;
