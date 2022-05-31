import apartmentApi from "../../api/aparment_api";
import blogApi from "../../api/blog_api";
import userApi from "../../api/user_api";

import {
  getApartmentByUser,
  getLikeBlogByUser,
  getOrderByUser,
  hideLoading,
  showLoading,
  getRentApartmentByUser,
} from "../Actions";

const getLikeBlogByUserApi = async (dispatch, params) => {
  try {
    const res = await blogApi.getLikeBlogByUser(params);
    if (res.success) {
      //   console.log(res.data);
      dispatch(getLikeBlogByUser(res.data));
    } else {
      dispatch(getLikeBlogByUser(null));
    }
  } catch (error) {
    window.alert(error);
  }
};

const getOrderByUserApi = async (dispatch) => {
  try {
    dispatch(showLoading());
    const res = await userApi.getOrderByUser();
    if (res.success) {
      //   console.log(res.data);
      dispatch(getOrderByUser(res.data));
      dispatch(hideLoading());
    } else {
      dispatch(getOrderByUser(null));
    }
  } catch (error) {
    dispatch(getOrderByUser(null));
    dispatch(hideLoading());
  }
};

const getApartmentByUserApi = async (dispatch) => {
  try {
    dispatch(showLoading());
    const res = await userApi.getApartmentOfUser();
    if (res.success) {
      dispatch(getApartmentByUser(res.data));
      dispatch(hideLoading());
    } else {
      dispatch(getApartmentByUser(null));
    }
  } catch (error) {
    dispatch(getApartmentByUser(null));
    dispatch(hideLoading());
  }
};

const getRentsOfApartmentApi = async (dispatch) => {
  try {
    dispatch(showLoading());
    const res = await userApi.getRentsOfApartment();
    if (res.success) {
      dispatch(getRentApartmentByUser(res.data));
      dispatch(hideLoading());
    } else {
      dispatch(getRentApartmentByUser(null));
    }
  } catch (error) {
    dispatch(getRentApartmentByUser(null));
    dispatch(hideLoading());
  }
};

const postUpdateÂprtmentOfUserApi = async (body) => {
  try {
    const res = await userApi.updateApartmentOfUser(body);
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
  getLikeBlogByUserApi,
  getOrderByUserApi,
  getApartmentByUserApi,
  getRentsOfApartmentApi,
  postUpdateÂprtmentOfUserApi,
};
