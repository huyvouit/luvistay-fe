import { createSlice } from "@reduxjs/toolkit";
// import {} from "../store";

const initialState = {
  loading: false,
};

const LoadingSlice = createSlice({
  name: "loadingSlice",
  initialState,
  reducers: {
    showLoading: (state) => {
      return { ...state, loading: true };
    },
    hideLoading: (state) => {
      return { ...state, loading: false };
    },
  },
});

export const { showLoading, hideLoading } = LoadingSlice.actions;

export default LoadingSlice.reducer;
