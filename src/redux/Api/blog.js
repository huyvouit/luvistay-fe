import apartmentApi from "../../api/aparment_api";
import blogApi from "../../api/blog_api";

import { getAllBlog } from "../Actions";

const getAllBlogApi = async (dispatch, params) => {
  try {
    const res = await blogApi.getAllBlogs(params);
    if (res.success) {
      //   console.log(res.data);
      dispatch(getAllBlog(res.data));
    } else {
      dispatch(getAllBlog([]));
      //   console.log(res.data);
    }
  } catch (error) {
    window.alert(error);
  }
};

export { getAllBlogApi };
