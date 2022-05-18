import { combineReducers } from "redux";
import apartment from "./Slice/apartmentSlice";
const rootReducer = combineReducers({
  apartment,
});

export default rootReducer;
