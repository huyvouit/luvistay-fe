import { createSlice } from "@reduxjs/toolkit";
// import {} from "../store";

const initialState = {
  info: null,
  rooms: [],
  searchRoom: [],
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
  },
});

export const { getApartment, getRoom, searchRoomByApartment } =
  DetailSlice.actions;

export default DetailSlice.reducer;
