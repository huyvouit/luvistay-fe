import { combineReducers } from "redux";
import apartment from "./Slice/apartmentSlice";
import detailApartment from "./Slice/detailSlice";
import loading from "./Slice/loadingSlice";

const rootReducer = combineReducers({
  apartment,
  detailApartment,
  loading,
});

export default rootReducer;
