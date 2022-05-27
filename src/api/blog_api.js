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
};

export default blogApi;
