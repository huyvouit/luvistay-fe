import React, { useContext, useEffect, useState } from "react";
// import PrimaryButton from "../../components/PrimaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, CircularProgress, TextField, Box, Modal } from "@mui/material";

import "./detail.scss";

import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Slideshow from "../../../components/Apartment/SlideShow";
import Moment from "react-moment";
import Posts from "../../../components/Blog/Posts";
import { AuthContext } from "../../../hooks/contexts/auth_context";
import { useDispatch, useSelector } from "react-redux";
import { getLikeBlogByUserApi } from "../../../redux/Api/user";
import blogApi from "../../../api/blog_api";
import { APP_ROUTE } from "../../../routes/app.routes";

const style = {
  width: "100%",
  bgcolor: "background.paper",
  height: "100%",
  boxShadow: 24,
  //   p: "10px",

  overflow: "scroll",
};

const DetailBlog = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { id } = useParams();
  // console.log(location.state);

  const {
    authState: { authLoading, user },
  } = useContext(AuthContext);
  const listLikeUser = useSelector((state) => state.user.likeBlog);

  const [listComments, setListComments] = React.useState(null);
  const [likes, setLikes] = React.useState(0);
  const [seen, setSeen] = useState(true);
  const [like, setLike] = useState(false);
  const [comment, setComment] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [formComment, setFormComment] = useState({
    blogId: location.state.blog?._id,
    content: "",
  });

  const fetchLikesByBlog = async () => {
    try {
      const res = await blogApi.getLikeByBlog(location.state.blog._id);
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
        blogId: location.state.blog?._id,
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

  const handleReactBlog = async (blogId) => {
    console.log(listLikeUser?.some((item) => item.blogId?._id === blogId));
    if (listLikeUser?.some((item) => item.blogId?._id === blogId)) {
      // setLike(true);
      try {
        const res = await blogApi.deleteUnLikeBlogByUser({
          blogId: location.state.blog?._id,
        });
        if (res.success) {
          setLike(false);
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
        const res = await blogApi.postLikeBlogByUser({
          blogId: location.state.blog?._id,
        });
        if (res.success) {
          setLike(true);
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

  const handlePostCommentToBlog = async () => {
    try {
      setIsLoading(true);
      const res = await blogApi.postCommentToBlog(formComment);
      if (res.success) {
        fetchCommentByBlog();
        setIsLoading(false);
        setFormComment({ ...formComment, content: "" });
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    if (
      listLikeUser?.some(
        (item) => item.blogId?._id === location?.state.blog._id
      )
    ) {
      setLike(true);
    } else {
      setLike(false);
    }
  }, [listLikeUser]);

  useEffect(() => {
    fetchLikesByBlog();
    fetchCommentByBlog();
    return {};
  }, []);
  console.log(like);
  if (!location.state.blog) {
    return <Navigate to={APP_ROUTE.HOME} />;
  }
  return (
    <Modal
      open={true}
      // onClose={() => navigate.goBack()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {authLoading ? (
          <section style={{ textAlign: "center", padding: "20px 0 " }}>
            <CircularProgress color="inherit" />
          </section>
        ) : (
          <section className="blog-detail-container">
            <section className="blog-detail-slides">
              <FontAwesomeIcon
                icon="fa-solid fa-xmark"
                className="blog-icon-close"
                onClick={() => navigate(-1)}
                //   width={30}
                width={"50px"}
              />
              <section className="slide-show">
                <Slideshow imgs={location.state.blog?.pictures} />
              </section>
            </section>
            <section className="blog-detail-info">
              <div className="posts-container-row-one-user">
                <img
                  className="posts-container-row-one-user-img"
                  src={
                    "https://images.unsplash.com/photo-1585255318859-f5c15f4cffe9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500"
                  }
                  alt=""
                />
                <div className="posts-container-row-one-user-information">
                  <h2 className="posts-container-row-one-user-information-name">
                    {location.state.blog?.author?.username || "Admin"}
                  </h2>
                  <p className="posts-container-row-one-user-information-time">
                    <Moment format="hh:mm DD/MM/YYYY ">
                      {location.state.blog?.date}
                    </Moment>
                  </p>
                </div>
              </div>
              <p className="posts-container-title">
                <span
                  className={
                    seen
                      ? "posts-container-title-content-show"
                      : "posts-container-title-content-hide"
                  }
                >
                  {location.state.blog?.content}
                </span>

                {location.state.blog?.content?.length > 300 && (
                  <span
                    className="posts-container-title-btn"
                    onClick={() => setSeen(!seen)}
                  >
                    {seen ? "Đọc tiếp" : "Ẩn bớt"}
                  </span>
                )}
              </p>
              <div className="posts-container-report">
                <div className="posts-container-report-box">
                  <h3
                    onClick={
                      user
                        ? () => handleReactBlog(location.state.blog?._id)
                        : () => {}
                    }
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
                    onClick={() => setComment(!comment)}
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
                      src="https://images.unsplash.com/photo-1585255318859-f5c15f4cffe9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500"
                      alt=""
                    />
                    <input
                      className="posts-container-cmt-container-input"
                      placeholder="Viết bình luận..."
                      type={"text"}
                      value={formComment.content}
                      onChange={(e) =>
                        setFormComment({
                          ...formComment,
                          content: e.target.value,
                        })
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
                      <div
                        className="posts-container-cmt-container"
                        key={index}
                      >
                        <img
                          className="posts-container-cmt-container-img"
                          src="https://images.unsplash.com/photo-1585255318859-f5c15f4cffe9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500"
                          alt=""
                        />
                        <div className="posts-container-cmt-container-box">
                          <div className="posts-container-cmt-container-box-information">
                            <h4 className="posts-container-cmt-container-box-information-name">
                              {item?.author?.username || "Admin"}
                            </h4>
                            <p className="posts-container-cmt-container-box-information-time">
                              <Moment format="hh:mm DD/MM/YYYY ">
                                {item?.date}
                              </Moment>
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
            </section>
          </section>
        )}
      </Box>
    </Modal>
  );
};

export default DetailBlog;
