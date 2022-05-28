import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress, LinearProgress } from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

import avatar from "../../assets/images/profile.png";
import blogApi from "../../api/blog_api";
import Posts from "../../components/Blog/Posts";
import BoxLeft from "../../components/Blog/BoxLeft";
import { getAllBlogApi } from "../../redux/Api/blog";
import { AuthContext } from "../../hooks/contexts/auth_context";

import { toast } from "react-toastify";

import "./blog.scss";

const BlogPage = () => {
  const dispatch = useDispatch();
  const {
    authState: { isAuthenticated, user },
  } = useContext(AuthContext);

  const listBlog = useSelector((state) => state.blog.listBlog);
  const loading = useSelector((state) => state.loading.loading);
  const [isLoading, setIsLoading] = useState(false);
  const [isProgress, setIsProgress] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [formPost, setFormPost] = useState({
    content: "",
    pictures: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleImageChange = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("thumbnail", e.target.files[0]);

    try {
      if (e.target.files) {
        setIsProgress(true);
        const res = await blogApi.uploadImageBlog(formData);
        if (res.success) {
          setFormPost({
            ...formPost,
            pictures: [...formPost.pictures, res.data],
          });
          setIsProgress(false);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderPhotos = (source) => {
    return source
      ? source.map((photo, index) => {
          return (
            <img
              className="create-posts-input-img-result-img"
              src={photo}
              alt=""
              key={index}
            />
          );
        })
      : null;
  };

  const handleAddBlog = async () => {
    try {
      setIsLoading(true);
      const res = await blogApi.postBlog(formPost);
      if (res.success) {
        getAllBlogApi(dispatch, { page: 1, limit: 5 });
        toast.success(
          "Tạo mới bài viết thành công, vui lòng chờ được phê duyệt",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          }
        );
        setIsLoading(false);
        setFormPost({ content: "", pictures: "" });
        setOpen(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (listBlog.length > 0) {
      return;
    } else {
      getAllBlogApi(dispatch, { page: 1, limit: 5 });
    }
  }, []);

  return (
    <div className="blog">
      <div className="blog-container">
        <div className="blog-container-colum-one">
          <BoxLeft />
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="blog-container-colum-two">
            {isAuthenticated && (
              <div className="blog-container-colum-two-posts">
                <div className="blog-container-colum-two-posts-box">
                  <img
                    src={avatar}
                    className="blog-container-colum-two-posts-box-img"
                    alt=""
                  />
                  <p
                    onClick={handleClickOpen}
                    className="blog-container-colum-two-posts-box-title"
                  >
                    {user?.username} ơi, Cảm nhận của bạn về trải nghiệm ở căn
                    hộ như nào?
                  </p>
                </div>
                <p
                  onClick={handleClickOpen}
                  className="blog-container-colum-two-posts-text"
                >
                  Tạo bài viết
                </p>
              </div>
            )}

            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogContent>
                <div className="create-posts">
                  <div className="create-posts-box-information">
                    <img
                      src={avatar}
                      className="create-posts-box-information-img"
                      alt=""
                    />
                    <h3 className="create-posts-box-information-name">
                      {user && user?.username}
                    </h3>
                  </div>
                  <textarea
                    className="create-posts-input-content"
                    placeholder={`${user?.username} ơi, bạn đang nghĩ gì đó?`}
                    value={formPost.content}
                    onChange={(e) =>
                      setFormPost({ ...formPost, content: e.target.value })
                    }
                  />
                  <div className="create-posts-input-img">
                    <input
                      className="create-posts-input-img-input"
                      type="file"
                      id="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageChange}
                    />
                    <div className="create-posts-input-img-label-holder">
                      <label
                        htmlFor="file"
                        className="create-posts-input-img-label-holder-label"
                      >
                        <i className="create-posts-input-img-label-holder-material-icons">
                          Thêm Hình
                        </i>
                      </label>
                    </div>
                    {isProgress ? (
                      <LinearProgress className="create-posts-input-img-result" />
                    ) : (
                      <div className="create-posts-input-img-result">
                        {renderPhotos(formPost.pictures)}
                      </div>
                    )}
                  </div>
                </div>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Hủy
                </Button>
                <button className="button-posts" onClick={handleAddBlog}>
                  {isLoading ? (
                    <CircularProgress color="inherit" size={15} />
                  ) : (
                    "Đăng bài"
                  )}
                </button>
              </DialogActions>
            </Dialog>
            {listBlog.map((item, index) => {
              return <Posts blog={item} key={index} userLiked="true" />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
