import { useNavigate } from "react-router-dom";
import apartmentApi from "../../api/aparment_api";
import { APP_ROUTE } from "../../routes/app.routes";

import {
  getAllApartment,
  getApartmentBySearch,
  hideLoading,
  showLoading,
} from "../Actions";

const getAllApartmentApi = async (dispatch, params, action) => {
  try {
    dispatch(showLoading());
    const res = await apartmentApi.getAllApartment(params);
    if (res.success) {
      //   console.log(res.data);
      dispatch(getAllApartment(res.data));
      dispatch(hideLoading());
      if (action) {
        action();
      }
    } else {
      dispatch(getAllApartment({}));
      dispatch(hideLoading());
      //   console.log(res.data);
    }
  } catch (error) {
    dispatch(getAllApartment(null));
    // window.alert(error);
  }
};

const getApartmentBySearchApi = async (dispatch, body, action) => {
  try {
    // const navigate = useNavigate();

    dispatch(showLoading());
    const res = await apartmentApi.searchRoom(body);
    if (res.success) {
      //   console.log(res.data);
      dispatch(getApartmentBySearch(res.data));
      dispatch(hideLoading());
      if (action) {
        action();
      }
      // navigate({pathname: APP_ROUTE.SEARCH,state: res.data});
    } else {
      dispatch(getApartmentBySearch([]));
      dispatch(hideLoading());
      //   console.log(res.data);
    }
  } catch (error) {
    dispatch(getApartmentBySearch([]));
    // window.alert(error);
  }
};

export { getAllApartmentApi, getApartmentBySearchApi };
