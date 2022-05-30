import apartmentApi from "../../api/aparment_api";

import {
  getApartment,
  getApartmentBySearch,
  getRoom,
  hideLoading,
  searchRoomByApartment,
  getReviewByApartment,
  getAvgRatingByApartment,
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
  }
};

const getRoomByApartmentApi = async (dispatch, id) => {
  try {
    const res = await apartmentApi.getRoomByApartment(id);
    if (res.success) {
      dispatch(getRoom(res.data));
    } else {
      dispatch(getRoom([]));
    }
  } catch (error) {
    dispatch(getRoom([]));
  }
};
const searchRoomByApartmentApi = async (dispatch, body, action) => {
  try {
    const res = await apartmentApi.searchRoomByApartment(body);
    if (res.success) {
      console.log(res.data);
      dispatch(getApartmentBySearch(res.data));
      if (action) {
        action();
      }
    } else {
      // dispatch(searchRoomByApartment([]));
      console.log(res.data);
    }
  } catch (error) {
    window.alert(error);
  }
};

const getReviewByApartmentApi = async (dispatch, params) => {
  try {
    const res = await apartmentApi.getReviewByApartment(params);
    if (res.success) {
      dispatch(getReviewByApartment(res.data));
    } else {
      dispatch(getReviewByApartment(null));
    }
  } catch (error) {
    dispatch(getReviewByApartment(null));
  }
};

const getAvgRatingByApartmentApi = async (dispatch, id) => {
  try {
    const res = await apartmentApi.getAvgRatingByApartment(id);
    if (res.success) {
      dispatch(getAvgRatingByApartment(res.data));
    } else {
      dispatch(getAvgRatingByApartment(0));
    }
  } catch (error) {
    dispatch(getAvgRatingByApartment(0));
  }
};

const postReviewApi = async (dispatch, body) => {
  try {
    const res = await apartmentApi.postReview(body);
    if (res.success) {
      return res;
    } else {
      return res;
    }
  } catch (error) {
    return error;
  }
};
export {
  getDetailApartmentApi,
  getRoomByApartmentApi,
  searchRoomByApartmentApi,
  getReviewByApartmentApi,
  getAvgRatingByApartmentApi,
  postReviewApi,
};
