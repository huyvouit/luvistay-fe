import apartmentApi from "../../api/aparment_api";
import blogApi from "../../api/blog_api";

import { getLikeBlogByUser } from "../Actions";

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

export { getLikeBlogByUserApi };
