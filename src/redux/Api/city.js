import apartmentApi from "../../api/aparment_api";

import { getAllCity } from "../Actions";

const getAllCityApi = async (dispatch) => {
  try {
    const res = await apartmentApi.getCityOfApartment();
    if (res.success) {
      //   console.log(res.data);
      dispatch(getAllCity(res.data));
    } else {
      dispatch(getAllCity(null));
      //   console.log(res.data);
    }
  } catch (error) {
    window.alert(error);
  }
};

export default getAllCityApi;
