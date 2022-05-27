import apartmentApi from "../../api/aparment_api";

import {
  getApartment,
  getApartmentBySearch,
  getRoom,
  hideLoading,
  searchRoomByApartment,
  showLoading,
} from "../Actions";

const getDetailApartmentApi = async (dispatch, params) => {
  try {
    dispatch(showLoading());
    const res = await apartmentApi.getApartmentById(params);
    if (res.success) {
      //   console.log(res.data);
      dispatch(getApartment(res.data));
      await getRoomByApartmentApi(dispatch, res.data._id);
      dispatch(hideLoading());
    } else {
      dispatch(getApartment({}));

      dispatch(hideLoading());
    }
  } catch (error) {
    dispatch(getApartment({}));
    // window.alert(error);
  }
};

const getRoomByApartmentApi = async (dispatch, id) => {
  try {
    const res = await apartmentApi.getRoomByApartment(id);
    if (res.success) {
      //   console.log(res.data);
      dispatch(getRoom(res.data));
    } else {
      dispatch(getRoom([]));
      //   console.log(res.data);
    }
  } catch (error) {
    dispatch(getRoom([]));
    // window.alert(error);
  }
};
const searchRoomByApartmentApi = async (dispatch, body,action) => {
  try {
    const res = await apartmentApi.searchRoomByApartment(body);
    if (res.success) {
      console.log(res.data);
      dispatch(getApartmentBySearch(res.data));
      if(action){

        action();
      }
    } else {
      // dispatch(searchRoomByApartment([]));
      console.log(res.data);
    }
  } catch (error) {
    // dispatch(searchRoomByApartment([]));
    window.alert(error);
  }
};

export {
  getDetailApartmentApi,
  getRoomByApartmentApi,
  searchRoomByApartmentApi,
};
