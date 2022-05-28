import { createSlice } from "@reduxjs/toolkit";
import {} from "../store";

const initialState = {
  listBlog: [],
  listBlogUser: [],
};

const blogSlice = createSlice({
  name: "blogSlice",
  initialState,
  reducers: {
    getAllBlog: (state, action) => {
      return { ...state, listBlog: action.payload };
    },
    getAllBlogByUser: (state, action) => {
      return { ...state, listBlogUser: action.payload };
    },

    // addOneBlog:(state, action) => {
    //     return { ...state, ...action.payload };
    //   },
  },
});

export const { getAllBlog, getAllBlogByUser } = blogSlice.actions;

export default blogSlice.reducer;
