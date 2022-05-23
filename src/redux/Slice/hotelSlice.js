import { createSlice } from "@reduxjs/toolkit";
import {} from "../store";

const initialState = {};

const hotelSlice = createSlice({
  name: "hotelSlice",
  initialState,
  reducers: {
    getAllHotel: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { getAllHotel } = hotelSlice.actions;

export default hotelSlice.reducer;
