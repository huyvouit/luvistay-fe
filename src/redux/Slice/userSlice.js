import { createSlice } from "@reduxjs/toolkit";
import {} from "../store";

const initialState = {
  likeBlog: null,
  orders: null,
  apartments: null,
  rents: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    getLikeBlogByUser: (state, action) => {
      return { ...state, likeBlog: action.payload };
    },
    getOrderByUser: (state, action) => {
      return { ...state, orders: action.payload };
    },
    getApartmentByUser: (state, action) => {
      return { ...state, apartments: action.payload };
    },
    getRentApartmentByUser: (state, action) => {
      return { ...state, rents: action.payload };
    },
  },
});

export const {
  getLikeBlogByUser,
  getOrderByUser,
  getApartmentByUser,
  getRentApartmentByUser,
} = userSlice.actions;

export default userSlice.reducer;
