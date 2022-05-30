import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { Backdrop, CircularProgress, TextField } from "@mui/material";
import { toast } from "react-toastify";

import logo from "../../assets/icons/logoluviStay.svg";
import { AuthContext } from "../../hooks/contexts/auth_context";
import Slideshow from "../../components/Apartment/SlideShow";

import "./login.scss";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../../redux/Actions";
import { APP_ROUTE } from "../../routes/app.routes";

const SignInPage = () => {
  const {
    loginUser,
    authState: { authLoading },
  } = useContext(AuthContext);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading.loading);

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmitLogin = async () => {
    try {
      dispatch(showLoading());
      const loginData = await loginUser(loginForm);

      if (loginData.success) {
        toast.success(loginData.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        dispatch(hideLoading());
        navigate(APP_ROUTE.HOME);
      } else {
        toast.error(loginData.error, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return authLoading ? (
    <Backdrop
      sx={{ color: "#c1b086", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={authLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  ) : (
    <div className="login-page">
      <Backdrop
        sx={{ color: "#c1b086", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <section className="login-page-container">
        <section className="login-page-container-colum-one">
          <section className="login-slide-show">
            <Slideshow
              imgs={[
                "https://images.unsplash.com/photo-1585255318859-f5c15f4cffe9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
                "https://images.unsplash.com/photo-1584226761916-3fd67ab5ac3a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
                "https://images.unsplash.com/photo-1585179292338-45ba1f62f082?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
                "https://images.unsplash.com/photo-1584753987666-ead137ec0614?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
                "https://images.unsplash.com/photo-1584691267914-91c0bee55964?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
                "https://images.unsplash.com/photo-1585084335487-f653d0859c14?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
                "https://images.unsplash.com/photo-1583217874534-581393fd5325?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
                "https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/06/superior-double-room-992x992.jpg",
              ]}
            />
          </section>
        </section>
        <section className="login-page-container-colum-two">
          <img
            className="login-page-container-colum-two-logo"
            src={logo}
            alt=""
          />
          <h1 className="login-page-container-colum-two-title">
            Chào mừng bạn đến với LuviStay
          </h1>
          <p className="login-page-container-colum-two-description">
            Nơi cung cấp một dịch vụ đặt phòng rẻ và dễ dàng nhất.
          </p>
          <div className="login-page-container-colum-two-box-input">
            <label>Email</label>
            <TextField
              variant="outlined"
              type="email"
              className="textField"
              onChange={(e) =>
                setLoginForm({ ...loginForm, email: e.target.value })
              }
              required
            />
          </div>
          <div className="login-page-container-colum-two-box-input">
            <label>Mật khẩu</label>
            <TextField
              variant="outlined"
              type="password"
              className="textField"
              onChange={(e) =>
                setLoginForm({ ...loginForm, password: e.target.value })
              }
              required
            />
          </div>

          <button onClick={handleSubmitLogin}>Đăng nhập</button>

          {/* <div className="sign-in-gg">
            <img src={gg} />
            <p>Đăng nhập với Google</p>
          </div>

          <div className="sign-in-fb">
            <img src={fb} />
            <p>Đăng nhập với Facebook</p>
          </div> */}

          <Link to="/signup">
            <p className="to-sign-up">
              Nếu bạn không có một tài khoản?{" "}
              <span className="span-two">Đăng ký tại đây</span>
            </p>
          </Link>
        </section>
      </section>
    </div>
  );
};

export default SignInPage;
