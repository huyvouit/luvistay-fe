import { createSlice } from "@reduxjs/toolkit";
import {} from "../store";

const initialState = {
  likeBlog: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    getLikeBlogByUser: (state, action) => {
      return { ...state, likeBlog: action.payload };
    },
  },
});

export const { getLikeBlogByUser } = userSlice.actions;

export default userSlice.reducer;
