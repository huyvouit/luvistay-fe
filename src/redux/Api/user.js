import apartmentApi from "../../api/aparment_api";
import blogApi from "../../api/blog_api";
import userApi from "../../api/user_api";

import {
  getLikeBlogByUser,
  getOrderByUser,
  hideLoading,
  showLoading,
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

export { getLikeBlogByUserApi, getOrderByUserApi };
