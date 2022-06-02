import { createSlice } from "@reduxjs/toolkit";
import {} from "../store";

const initialState = {
  listBlog: [],
  maxPageBlog: null,
  listBlogUser: [],
};

const blogSlice = createSlice({
  name: "blogSlice",
  initialState,
  reducers: {
    getAllBlog: (state, action) => {
      return {
        ...state,
        listBlog: [...state.listBlog, ...action.payload.data],
        maxPageBlog: action.payload.maxPage,
      };
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
