import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import createSagaMiddleware from "@redux-saga/core";

import rootReducer from "./reducers";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
	reducer: {
		rootReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export default store;