import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SRLWrapper } from "simple-react-lightbox";
import blogApi from "../../../api/blog_api";
import { AuthContext } from "../../../hooks/contexts/auth_context";
import { getLikeBlogByUserApi } from "../../../redux/Api/user";
import "./posts.scss";

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
  const [listComments, setListComments] = React.useState([]);
  const [likes, setLikes] = React.useState(0);
  const [seen, setSeen] = useState(true);
  const [like, setLike] = useState(false);
  const [comment, setComment] = useState(false);
  const [formComment, setFormComment] = useState({
    blogId: blog?.id,
    content: "",
  });

  const checkSeen = () => setSeen(!seen);
  const checkLike = () => setLike(!like);
  const checkComment = () => setComment(!comment);

  const handleReactBlog = async (blogId) => {
    if (listLikeUser?.some((item) => item.blogId?._id === blogId)) {
      try {
        const res = await blogApi.deleteUnLikeBlogByUser({ blogId: blog?._id });
        if (res.success) {
          setLike(true);
          getLikeBlogByUserApi(dispatch, { userId: user?._id });
          fetchLikesByBlog();
        }
      } catch (error) {
        setLike(false);
      }
    } else {
      try {
        const res = await blogApi.postLikeBlogByUser({ blogId: blog?._id });
        if (res.success) {
          setLike(false);
          getLikeBlogByUserApi(dispatch, { userId: user?._id });
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
      console.log(error);
    }
  };
  const handlePostCommentToBlog = async () => {
    try {
      const res = await blogApi.postLikeBlogByUser(formComment);
      if (res.success) {
        // console.log(res);
        setLikes(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLike();
    fetchLikesByBlog();
    fetchCommentByBlog();
  }, []);

  useEffect(() => {
    if (listLikeUser) {
      setLike(listLikeUser?.some((item) => item.blogId?._id === blog._id));
    }
  }, [listLikeUser]);
  console.log("like", listComments);
  return (
    <div className="posts">
      <div className="posts-container">
        <div className="posts-container-user">
          <img className="posts-container-user-img" src={imgs[0]} alt="" />
          <div className="posts-container-user-information">
            <h2 className="posts-container-user-information-name">
              {blog?.author?.username}
            </h2>
            <p className="posts-container-user-information-time">
              12 phút trước
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
            {blog?.content}
          </span>{" "}
          {blog?.content.length > 300 && (
            <span
              className="posts-container-title-btn"
              onClick={() => checkSeen(!seen)}
            >
              {seen ? "Đọc tiếp" : "Ẩn bớt"}
            </span>
          )}
        </p>
        <SRLWrapper>
          <div className="posts-container-img">
            {blog?.pictures.map((item, index) => {
              if (imgs.length === 1) {
                return (
                  <img
                    className="posts-container-img-one"
                    src={item}
                    key={index}
                    alt=""
                  />
                );
              } else if (imgs.length === 2) {
                return (
                  <img
                    className="posts-container-img-two"
                    src={item}
                    key={index}
                    alt=""
                  />
                );
              } else if (imgs.length === 3) {
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
                        +{imgs.length - 3}
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
        </SRLWrapper>
        <div className="posts-container-report">
          <div className="posts-container-report-box">
            <h3
              onClick={() => handleReactBlog(blog?._id)}
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
              {listComments.comments?.length}
            </p>
          </div>
        </div>

        <div
          className={
            comment ? "posts-container-cmt" : "posts-container-cmt-hide"
          }
        >
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
            <button className="posts-container-cmt-container-btn">Gửi</button>
          </div>

          {/* show comment ở đây lặp cái này */}
          {listComments.comments.length > 0 &&
            listComments?.comments?.map((item, index) => {
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
                        {item?.author}
                      </h4>
                      <p className="posts-container-cmt-container-box-information-time">
                        7 phút trước
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
  );
};

export default Posts;
