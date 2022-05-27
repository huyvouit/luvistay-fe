import { createSlice } from "@reduxjs/toolkit";
import {} from "../store";

const initialState = [];

const citySlice = createSlice({
  name: "citySlice",
  initialState,
  reducers: {
    getAllCity: (state, action) => {
      return [...state, ...action.payload ];
    },
  },
});

export const { getAllCity } = citySlice.actions;

export default citySlice.reducer;
