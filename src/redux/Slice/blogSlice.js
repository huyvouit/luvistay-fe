import { createSlice } from "@reduxjs/toolkit";
import {} from "../store";

const initialState = {
  listBlog: [],
};

const blogSlice = createSlice({
  name: "blogSlice",
  initialState,
  reducers: {
    getAllBlog: (state, action) => {
      return { ...state, listBlog: action.payload };
    },

    // addOneBlog:(state, action) => {
    //     return { ...state, ...action.payload };
    //   },
  },
});

export const { getAllBlog } = blogSlice.actions;

export default blogSlice.reducer;
