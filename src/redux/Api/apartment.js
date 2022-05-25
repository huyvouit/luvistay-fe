import apartmentApi from "../../api/aparment_api";

import {
  getAllApartment,
  getApartmentBySearch,
  hideLoading,
  showLoading,
} from "../Actions";

const getAllApartmentApi = async (dispatch, params) => {
  try {
    dispatch(showLoading());
    const res = await apartmentApi.getAllApartment(params);
    if (res.success) {
      //   console.log(res.data);
      dispatch(getAllApartment(res.data));
      dispatch(hideLoading());
    } else {
      dispatch(getAllApartment([]));
      dispatch(hideLoading());
      //   console.log(res.data);
    }
  } catch (error) {
    dispatch(getAllApartment([]));
    // window.alert(error);
  }
};

const getApartmentBySearchApi = async (dispatch, body, action) => {
  try {
    dispatch(showLoading());
    const res = await apartmentApi.searchRoom(body);
    if (res.success) {
      //   console.log(res.data);
      dispatch(getApartmentBySearch(res.data));
      dispatch(hideLoading());

      action();
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
