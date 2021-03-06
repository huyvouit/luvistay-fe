import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import avatar from "../../assets/images/profile.png";
import blogApi from "../../api/blog_api";
import Posts from "../../components/Blog/Posts";
import BoxLeft from "../../components/Blog/BoxLeft";
import { getAllBlogApi } from "../../redux/Api/blog";
import { AuthContext } from "../../hooks/contexts/auth_context";
import scrollToBottom from "../../helper/scrollToBottom";

import { toast } from "react-toastify";

import "./blog.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CircularProgress, LinearProgress } from "@mui/material";

const BlogPage = () => {
  const dispatch = useDispatch();
  const {
    authState: { isAuthenticated, user },
  } = useContext(AuthContext);

  const listBlog = useSelector((state) => state.blog.listBlog);
  const maxPage = useSelector((state) => state.blog.maxPageBlog);
  const loading = useSelector((state) => state.loading.loading);
  const [isLoading, setIsLoading] = useState(false);
  const [isProgress, setIsProgress] = useState(false);
  const [open, setOpen] = React.useState(false);

  const [page, setPage] = React.useState(1);
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
    for (var i = 0; i < e.target.files.length; i++) {
      formData.append("thumbnail", e.target.files[i]);
    }

    try {
      if (e.target.files) {
        setIsProgress(true);
        console.log(formData);
        const res = await blogApi.uploadImageBlog(formData);
        if (res.success) {
          setFormPost({
            ...formPost,
            pictures: [...formPost.pictures, ...res.data],
          });
          setIsProgress(false);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteImage = (photo) => {
    const temp = [...formPost.pictures].filter((item) => item !== photo);

    setFormPost({
      ...formPost,
      pictures: temp,
    });
  };

  const renderPhotos = (source) => {
    return source
      ? source.map((photo, index) => {
          return (
            <section
              className="create-posts-input-img-result-img"
              style={{ backgroundImage: `url(${photo})` }}
            >
              <FontAwesomeIcon
                icon="fa-solid fa-trash-can"
                className="icon-trash"
                color="red"
                onClick={() => handleDeleteImage(photo)}
              />
            </section>
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
          "T???o m???i b??i vi???t th??nh c??ng, vui l??ng ch??? ???????c ph?? duy???t",
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

  const handleLoadMoreBlog = () => {
    getAllBlogApi(dispatch, { page: page + 1, limit: 2 }, scrollToBottom);
    setPage(page + 1);
  };
  useEffect(() => {
    if (listBlog.length > 0) {
      return;
    } else {
      getAllBlogApi(dispatch, { page: page, limit: 2 });
    }
  }, []);

  return (
    <div className="blog">
      <div className="blog-container">
        <div className="blog-container-colum-one">
          <BoxLeft />
        </div>
        {loading ? (
          <div
            className="blog-container-colum-two"
            style={{ textAlign: "center" }}
          >
            <CircularProgress color="inherit" size={25} />
          </div>
        ) : (
          <div className="blog-container-colum-two">
            {isAuthenticated && (
              <section style={{ width: "100%", padding: "0 12%" }}>
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
                      {user?.username} ??i, C???m nh???n c???a b???n v??? tr???i nghi???m ??? c??n
                      h??? nh?? n??o?
                    </p>
                  </div>
                  <p
                    onClick={handleClickOpen}
                    className="blog-container-colum-two-posts-text"
                  >
                    T???o b??i vi???t
                  </p>
                </div>
              </section>
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
                    placeholder={`${user?.username} ??i, b???n ??ang ngh?? g?? ?????`}
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
                          Th??m H??nh
                        </i>
                      </label>
                    </div>
                    {isProgress ? (
                      <LinearProgress className="create-posts-input-img-result" />
                    ) : (
                      <div className="create-posts-input-img-result">
                        {formPost.pictures && renderPhotos(formPost.pictures)}
                      </div>
                    )}
                  </div>
                </div>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  H???y
                </Button>
                <button className="button-posts" onClick={handleAddBlog}>
                  {isLoading ? (
                    <CircularProgress color="inherit" size={15} />
                  ) : (
                    "????ng b??i"
                  )}
                </button>
              </DialogActions>
            </Dialog>

            {listBlog.map((item, index) => {
              return <Posts blog={item} key={index} userLiked="true" />;
            })}
            {page < maxPage && (
              <button onClick={handleLoadMoreBlog}>Xem th??m</button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
