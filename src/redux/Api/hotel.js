import apartmentApi from "../../api/aparment_api";

import { getAllHotel } from "../Actions";

const getAllHotelApi = async (dispatch, params) => {
  try {
    const res = await apartmentApi.getAllApartment(params);
    if (res.success) {
      //   console.log(res.data);
      dispatch(getAllHotel(res.data));
    } else {
      dispatch(getAllHotel(null));
      //   console.log(res.data);
    }
  } catch (error) {
    window.alert(error);
  }
};

export default getAllHotelApi;
