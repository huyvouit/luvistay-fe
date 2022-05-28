import apartmentApi from "../../api/aparment_api";
import blogApi from "../../api/blog_api";

import {
  getAllBlog,
  getAllBlogByUser,
  hideLoading,
  showLoading,
} from "../Actions";

const getAllBlogApi = async (dispatch, params, action) => {
  try {
    dispatch(showLoading());
    const res = await blogApi.getAllBlogs(params);
    if (res.success) {
      //   console.log(res.data);
      dispatch(getAllBlog(res));
      dispatch(hideLoading());
      if (action) {
        action();
      }
    } else {
      dispatch(getAllBlog([]));
      //   console.log(res.data);
    }
  } catch (error) {
    window.alert(error);
  }
};
const getAllBlogByUserApi = async (dispatch) => {
  try {
    dispatch(showLoading());
    const res = await blogApi.getAllBlogsByUser();
    if (res.success) {
      //   console.log(res.data);
      dispatch(getAllBlogByUser(res.data));
      dispatch(hideLoading());
    } else {
      dispatch(getAllBlogByUser([]));
      //   console.log(res.data);
    }
  } catch (error) {
    // window.alert(error);
    console.log(error);
  }
};

export { getAllBlogApi, getAllBlogByUserApi };
