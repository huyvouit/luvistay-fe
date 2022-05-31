import { createSlice } from "@reduxjs/toolkit";
import {} from "../store";

const initialState = {
  likeBlog: null,
  orders: null,
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
  },
});

export const { getLikeBlogByUser, getOrderByUser } = userSlice.actions;

export default userSlice.reducer;
