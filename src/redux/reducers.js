import { combineReducers } from "redux";
import apartment from "./Slice/apartmentSlice";
import detailApartment from "./Slice/detailSlice";
import loading from "./Slice/loadingSlice";
import city from "./Slice/cityApartmentSlice";

const rootReducer = combineReducers({
  apartment,
  detailApartment,
  loading,
  city
});

export default rootReducer;
