import { combineReducers } from "redux";
import apartment from "./Slice/apartmentSlice";
import detailApartment from "./Slice/detailSlice";
import loading from "./Slice/loadingSlice";
import city from "./Slice/cityApartmentSlice";
import blog from "./Slice/blogSlice";

const rootReducer = combineReducers({
  apartment,
  detailApartment,
  loading,
  city,
  blog,
});

export default rootReducer;
