import axiosClient from "./axiosClient.js";

const blogApi = {
  getAllBlogs: (params) => {
    const url = "/blog/confirm";
    return axiosClient.get(url, { params });
  },
  uploadImageBlog: (body) => {
    const url = "/blog/upload";
    return axiosClient.post(url, body);
  },

  getCommentByBlog: (params) => {
    const url = "/blog/comment";
    return axiosClient.get(url, { params });
  },

  getLikeByBlog: (id) => {
    const url = `/blog/like/${id}`;
    return axiosClient.get(url);
  },
  getLikeBlogByUser: (params) => {
    const url = `/blog/like`;
    return axiosClient.get(url, { params });
  },
  postLikeBlogByUser: (body) => {
    const url = `/blog/like`;
    return axiosClient.post(url, body);
  },
  deleteUnLikeBlogByUser: (body) => {
    const url = `/blog/like`;
    return axiosClient.delete(url, {
      data: body,
    });
  },
};

export default blogApi;
