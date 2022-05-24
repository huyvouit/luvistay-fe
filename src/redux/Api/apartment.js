import apartmentApi from "../../api/aparment_api";

import { getAllApartment, hideLoading, showLoading } from "../Actions";

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

export default getAllApartmentApi;
