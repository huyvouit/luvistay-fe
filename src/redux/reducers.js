import { combineReducers } from "redux";
import apartment from "./Slice/apartmentSlice";
import detailApartment from "./Slice/detailSlice";
const rootReducer = combineReducers({
  apartment,
  detailApartment,
});

export default rootReducer;
