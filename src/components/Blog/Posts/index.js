import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SRLWrapper } from "simple-react-lightbox";
import blogApi from "../../../api/blog_api";
import { AuthContext } from "../../../hooks/contexts/auth_context";
import { getLikeBlogByUserApi } from "../../../redux/Api/user";
import Moment from "react-moment";
import "./posts.scss";
import { CircularProgress,LinearProgress } from "@material-ui/core";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import avatar from "../../../assets/images/profile.png";

const imgs = [
  "https://images.unsplash.com/photo-1585255318859-f5c15f4cffe9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
  "https://images.unsplash.com/photo-1584226761916-3fd67ab5ac3a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
  "https://images.unsplash.com/photo-1585179292338-45ba1f62f082?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
  "https://images.unsplash.com/photo-1584753987666-ead137ec0614?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
  "https://images.unsplash.com/photo-1584691267914-91c0bee55964?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
  "https://images.unsplash.com/photo-1585084335487-f653d0859c14?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
  "https://images.unsplash.com/photo-1583217874534-581393fd5325?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
  "https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/06/superior-double-room-992x992.jpg",
];

const Posts = ({ blog }) => {
  const dispatch = useDispatch();
  const {
    authState: { user },
  } = useContext(AuthContext);
  const listLikeUser = useSelector((state) => state.user.likeBlog);
  const [listComments, setListComments] = React.useState(null);
  const [likes, setLikes] = React.useState(0);
  const [seen, setSeen] = useState(true);
  const [like, setLike] = useState(false);
  const [comment, setComment] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formComment, setFormComment] = useState({
    blogId: blog?._id,
    content: "",
  });

  const checkSeen = () => setSeen(!seen);
  const checkLike = () => setLike(!like);
  const checkComment = () => setComment(!comment);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [isProgress, setIsProgress] = useState(false);
  const [formPost, setFormPost] = useState({
    content: blog?.content,
    pictures: blog?.pictures,
  });


  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
    setOpen1(true);
  };
  const handleCloseMenu1 = () => {
    setAnchorEl(null);
    setOpen2(true);
  };

  const handleCloseMenu2 = () => {
    setAnchorEl(null);
  };


  const handleClickOpen = () => {
    setOpen1(true);
  };

  const handleClose = () => {
    setOpen1(false);
  };

  const handleCloseAndSave = () => {
    setOpen1(false);
  };

  const handleClose1 = () => {
    setOpen2(false);
  };

  const handleCloseAndDelete = () => {
    setOpen2(false);
  };

  // Chỉnh sử ở đây thêm hàm cập nhật nữa
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



  const handleReactBlog = async (blogId) => {
    if (listLikeUser?.some((item) => item.blogId?._id === blogId)) {
      // setLike(true);
      try {
        const res = await blogApi.deleteUnLikeBlogByUser({ blogId: blog?._id });
        if (res.success) {
          setLike(true);
          if (user) {
            getLikeBlogByUserApi(dispatch, { userId: user?._id });
          }
          fetchLikesByBlog();
        }
      } catch (error) {
        setLike(false);
        console.log("error:", error);
      }
    } else {
      try {
        // setLike(false);
        const res = await blogApi.postLikeBlogByUser({ blogId: blog?._id });
        if (res.success) {
          setLike(false);
          if (user) {
            getLikeBlogByUserApi(dispatch, { userId: user?._id });
          }
          fetchLikesByBlog();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const fetchLikesByBlog = async () => {
    try {
      const res = await blogApi.getLikeByBlog(blog._id);
      if (res.success) {
        // console.log(res);
        setLikes(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCommentByBlog = async () => {
    try {
      const res = await blogApi.getCommentByBlog({
        blogId: blog?._id,
        page: 1,
        limit: 5,
      });
      if (res.success) {
        // console.log(res);
        setListComments(res.data);
      }
    } catch (error) {
      console.log(error, "...error");
    }
  };
  const handlePostCommentToBlog = async () => {
    try {
      setIsLoading(true);
      const res = await blogApi.postCommentToBlog(formComment);
      if (res.success) {
        fetchCommentByBlog();
        setIsLoading(false);
        setFormComment({ ...formComment, content: "" })
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    setLike();
    fetchLikesByBlog();
    fetchCommentByBlog();
    return {};
  }, []);

  useEffect(() => {
    if (listLikeUser) {
      setLike(listLikeUser?.some((item) => item.blogId?._id === blog._id));
    }
    return () => {
      setLike(false);
    };
  }, [listLikeUser]);

  return (
    <>
      <div className="posts">
        <div className="posts-container">
          <div className="posts-container-row-one" >
            <div className="posts-container-row-one-user">
              <img className="posts-container-row-one-user-img" src={imgs[0]} alt="" />
              <div className="posts-container-row-one-user-information">
                <h2 className="posts-container-row-one-user-information-name">
                  {blog?.author?.username || "Admin"}
                </h2>
                <p className="posts-container-row-one-user-information-time">
                  <Moment format="hh:mm DD/MM/YYYY ">{blog?.date}</Moment>
                </p>
              </div>
            </div>
            {
              blog?.author ? <FontAwesomeIcon
                className="posts-container-row-one-icon"
                onClick={handleClickMenu}
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                icon="fa-solid fa-ellipsis-vertical"
                style={{ width: "30px", height: "30px !important" }}
              /> : <div></div>
            }
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleCloseMenu2}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleCloseMenu} >Chỉnh sửa</MenuItem>
              <MenuItem onClick={handleCloseMenu1}>Xóa</MenuItem>
            </Menu>
          </div>
          <p className="posts-container-title">
            <span
              className={
                seen
                  ? "posts-container-title-content-show"
                  : "posts-container-title-content-hide"
              }
            >
              {blog?.content}
            </span>
            {blog?.content?.length > 300 && (
              <span
                className="posts-container-title-btn"
                onClick={() => checkSeen(!seen)}
              >
                {seen ? "Đọc tiếp" : "Ẩn bớt"}
              </span>
            )}
          </p>
          <div className="posts-container-img">
            {blog?.pictures &&
              blog?.pictures?.map((item, index) => {
                if (blog?.pictures?.length === 1) {
                  return (
                    <img
                      className="posts-container-img-one"
                      src={item}
                      key={index}
                      alt=""
                    />
                  );
                } else if (blog?.pictures?.length === 2) {
                  return (
                    <img
                      className="posts-container-img-two"
                      src={item}
                      key={index}
                      alt=""
                    />
                  );
                } else if (blog?.pictures?.length === 3) {
                  return (
                    <img
                      className="posts-container-img-three"
                      src={item}
                      key={index}
                      alt=""
                    />
                  );
                } else {
                  if (index < 2) {
                    return (
                      <img
                        className="posts-container-img-three"
                        src={item}
                        key={index}
                        alt=""
                      />
                    );
                  } else if (index === 2) {
                    return (
                      <div className="posts-container-img-three" key={index}>
                        <img
                          className="posts-container-img-three-img"
                          src={item}
                          alt=""
                        />
                        <p className="posts-container-img-three-number">
                          +{blog?.pictures?.length - 3}
                        </p>
                      </div>
                    );
                  } else {
                    return (
                      <img
                        className="posts-container-img-hide"
                        src={item}
                        key={index}
                        alt=""
                      />
                    );
                  }
                }
              })}
          </div>
          <div className="posts-container-report">
            <div className="posts-container-report-box">
              <h3
                onClick={user ? () => handleReactBlog(blog?._id) : () => { }}
                className={
                  like
                    ? "posts-container-report-box-btn-like"
                    : "posts-container-report-box-btn"
                }
              >
                <FontAwesomeIcon
                  icon="fa-solid fa-thumbs-up"
                  color={like ? "blue" : "gray"}
                />
              </h3>
              <p className="posts-container-report-box-number">{likes}</p>
            </div>
            <div className="posts-container-report-box">
              <h3
                className="posts-container-report-box-btn"
                onClick={() => checkComment(!comment)}
              >
                Bình luận
              </h3>
              <p className="posts-container-report-box-number">
                {listComments?.comments?.length}
              </p>
            </div>
          </div>

          <div
            className={
              comment ? "posts-container-cmt" : "posts-container-cmt-hide"
            }
          >
            {user && (
              <div className="posts-container-cmt-container">
                <img
                  className="posts-container-cmt-container-img"
                  src={imgs[1]}
                  alt=""
                />
                <input
                  className="posts-container-cmt-container-input"
                  placeholder="Viết bình luận..."
                  type={"text"}
                  value={formComment.content}
                  onChange={(e) =>
                    setFormComment({ ...formComment, content: e.target.value })
                  }
                />
                <button
                  className="posts-container-cmt-container-btn"
                  onClick={handlePostCommentToBlog}
                >
                  {isLoading ? (
                    <CircularProgress color="inherit" size={25} />
                  ) : (
                    "Gửi"
                  )}
                </button>
              </div>
            )}
            {/* show comment ở đây lặp cái này */}
            {listComments &&
              listComments.comments?.length > 0 &&
              listComments.comments?.map((item, index) => {
                return (
                  <div className="posts-container-cmt-container" key={index}>
                    <img
                      className="posts-container-cmt-container-img"
                      src={imgs[1]}
                      alt=""
                    />
                    <div className="posts-container-cmt-container-box">
                      <div className="posts-container-cmt-container-box-information">
                        <h4 className="posts-container-cmt-container-box-information-name">
                          {item?.author?.username || "Admin"}
                        </h4>
                        <p className="posts-container-cmt-container-box-information-time">
                          <Moment format="hh:mm DD/MM/YYYY ">{item?.date}</Moment>
                        </p>
                      </div>
                      <p className="posts-container-cmt-container-box-description">
                        {item?.content}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {/* chỉnh sửa */}

      <Dialog
        open={open1}
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
                  {formPost.pictures && renderPhotos(formPost.pictures)}
                </div>
              )}
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Hủy
          </Button>
          <button className="button-posts" onClick={handleCloseAndSave}>
              Lưu
          </button>
        </DialogActions>
      </Dialog>

      {/* Xóa */}
      <Dialog
        open={open2}
        onClose={handleClose1}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <div className="create-posts">
            <h3>Bạn có thật sự muốn xóa bài viết này ?</h3>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose1} color="primary">
            Hủy
          </Button>
          <button className="button-posts" onClick={handleCloseAndDelete}>
              Xóa
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Posts;
