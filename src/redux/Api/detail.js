import apartmentApi from "../../api/aparment_api";

import { getApartment, getRoom, searchRoomByApartment } from "../Actions";

const getDetailApartmentApi = async (dispatch, params) => {
  try {
    const res = await apartmentApi.getApartmentById(params);
    if (res.success) {
      //   console.log(res.data);
      dispatch(getApartment(res.data));
      await getRoomByApartmentApi(dispatch, res.data._id);
    } else {
      dispatch(getApartment({}));
      //   console.log(res.data);
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
const searchRoomByApartmentApi = async (dispatch, body) => {
  try {
    const res = await apartmentApi.searchRoomByApartment(body);
    if (res.success) {
      //   console.log(res.data);
      dispatch(searchRoomByApartment(res.data));
    } else {
      dispatch(searchRoomByApartment([]));
      //   console.log(res.data);
    }
  } catch (error) {
    dispatch(searchRoomByApartment([]));
    // window.alert(error);
  }
};

export {
  getDetailApartmentApi,
  getRoomByApartmentApi,
  searchRoomByApartmentApi,
};
