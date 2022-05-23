import apartmentApi from "../../api/aparment_api";

import { getAllApartment } from "../Actions";

const getAllApartmentApi = async (dispatch, params) => {
  try {
    const res = await apartmentApi.getAllApartment(params);
    if (res.success) {
      //   console.log(res.data);
      dispatch(getAllApartment(res.data));
    } else {
      dispatch(getAllApartment([]));
      //   console.log(res.data);
    }
  } catch (error) {
    dispatch(getAllApartment([]));
    // window.alert(error);
  }
};

export default getAllApartmentApi;
