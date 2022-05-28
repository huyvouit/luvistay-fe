import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import "./blog.scss";
import { hideLoading, showLoading } from "../../redux/Actions";
import { toast } from "react-toastify";
// import { CircularProgress } from "@mui/material";

const BlogPage = () => {
  const dispatch = useDispatch();
  const {
    authState: { isAuthenticated, user },
  } = useContext(AuthContext);

  const listBlog = useSelector((state) => state.blog.listBlog);
  const loading = useSelector((state) => state.loading.loading);
  const [formPost, setFormPost] = useState({
    content: "",
    pictures: "",
  });

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleImageChange = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("thumbnail", e.target.files[0]);

    try {
      if (e.target.files) {
        console.log(formData);
        const res = await blogApi.uploadImageBlog(formData);
        if (res.success) {
          setSelectedFiles([...selectedFiles, res.data]);

          setFormPost({
            ...formPost,
            pictures: [...formPost.pictures, res.data],
          });
        }
      }
    } catch (error) {
      console.log(error);
    }

    // const filesArray = Array.from(e.target.files).map((file) =>
    //   URL.createObjectURL(file)
    // );

    // // console.log("filesArray: ", filesArray);

    // setSelectedFiles((prevImages) => prevImages.concat(filesArray));
    // Array.from(e.target.files).map(
    //   (file) => URL.revokeObjectURL(file) // avoid memory leak
    // );
  };

  const renderPhotos = (source) => {
    return source.map((photo, index) => {
      return (
        <img
          className="create-posts-input-img-result-img"
          src={photo}
          alt=""
          key={index}
        />
      );
    });
  };
  console.log(formPost.pictures);
  const handleAddBlog = async () => {
    try {
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
      // dispatch(showLoading());
      // dispatch(hideLoading());
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
                    <div className="create-posts-input-img-result">
                      {renderPhotos(selectedFiles)}
                    </div>
                  </div>
                </div>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Hủy
                </Button>
                <Button onClick={handleAddBlog} color="primary">
                  Đăng bài
                </Button>
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
