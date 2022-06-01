import { CircularProgress } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../../../hooks/contexts/auth_context";
import { getAllBlogByUserApi } from "../../../redux/Api/blog";
import BoxLeft from "../BoxLeft";
import Posts from "../Posts";
import "./myBlog.scss";

const MyBlog = () => {
  const dispatch = useDispatch();
  const listMyBlog = useSelector((state) => state.blog.listBlogUser);
  const loading = useSelector((state) => state.loading.loading);
  const {
    authState: { user, authLoading },
  } = useContext(AuthContext);

  useEffect(() => {
    getAllBlogByUserApi(dispatch, { page: 1, limit: 5 });
  }, []);
  return (
    <div className="my-blog">
      <div className="my-blog-container">
        <div className="my-blog-container-colum-one">
          <BoxLeft />
        </div>
        <div className="my-blog-container-colum-two">
          {authLoading ? (
            <div
              className="blog-container-colum-two"
              style={{ textAlign: "center" }}
            >
              <CircularProgress color="inherit" size={25} />
            </div>
          ) : user ? (
            loading ? (
              <div
                className="blog-container-colum-two"
                style={{ textAlign: "center" }}
              >
                <CircularProgress color="inherit" size={25} />
              </div>
            ) : (
              listMyBlog?.map((item, index) => {
                return <Posts key={index} blog={item} />;
              })
            )
          ) : (
            <div> Bạn không có quyền truy cập</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyBlog;
