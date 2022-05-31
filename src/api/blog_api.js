import axiosClient from "./axiosClient.js";

const blogApi = {
  getAllBlogs: (params) => {
    const url = "/blog/confirm";
    return axiosClient.get(url, { params });
  },
  getAllBlogsByUser: () => {
    const url = "/blog/my-blog";
    return axiosClient.get(url);
  },
  postBlog: (body) => {
    const url = "/blog/";
    return axiosClient.post(url, body);
  },
  updateBlog: (body) => {
    const url = "/blog/update";
    return axiosClient.put(url, body);
  },
  uploadImageBlog: (body) => {
    const url = "/blog/upload";
    return axiosClient.post(url, body);
  },

  getLikeBlogByUser: (params) => {
    const url = `/blog/like`;
    return axiosClient.get(url, { params });
  },

  getLikeByBlog: (id) => {
    const url = `/blog/like/${id}`;
    return axiosClient.get(url);
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

  getCommentByBlog: (params) => {
    const url = "/blog/comment";
    return axiosClient.get(url, { params });
  },
  postCommentToBlog: (body) => {
    const url = `/blog/comment`;
    return axiosClient.post(url, body);
  },
};

export default blogApi;
