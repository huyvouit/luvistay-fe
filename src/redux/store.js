import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import rootReducer from "./reducers";

export const store = configureStore({
  reducer: rootReducer,
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export default store;
