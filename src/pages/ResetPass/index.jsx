import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { useParams } from "react-router";
import userApi from "../../api/user_api";
import PrimaryButton from "../../components/PrimaryButton";
import { CircularProgress, TextField } from "@mui/material";
import "../ForgotPass/styles.scss";
import { APP_ROUTE } from "../../routes/app.routes";
export const ResetPassword = () => {
  const { reset } = useParams();
  console.log(reset);
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const [validationMsg, setValidationMsg] = useState({});
  const onChangePassForm = (event) => setPassword(event.target.value);

  const navigate = useNavigate();

  function handlePushHistory() {
    navigate(APP_ROUTE.HOME);
  }

  const submitPassword = async (event) => {
    event.preventDefault();

    try {
      const formData = await axios({
        method: "post",
        url: "https://luviana.herokuapp.com/user/reset-password",
        data: {
          password: password,
        },
        headers: {
          authorizationtoken: `Bearer ${reset}`,
        },
      });
      // console.log(formData.data);
      if (formData.data.success) {
        toast.success("Đã tạo mới mới khẩu", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        handlePushHistory();
      } else {
        toast.error("Đã có lỗi xảy ra!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      toast.error("Đã có lỗi xảy ra! Kiểm tra lại mật khẩu", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      // handlePushHistory();
      setPassword("");
    }
  };

  return (
    <div className="auth-wrapper" style={{ height: "80vh", marginBottom: "0" }}>
      <h1 className="auth_title" style={{ marginTop: "0" }}>
        Lấy lại mật khẩu
      </h1>
      <p className="auth_content">Nhập mật khẩu và bạn sẽ có mật khẩu mới</p>
      <div className="input-field" style={{ marginTop: "40px" }}>
        <p className="form-label">Mật khẩu</p>
        <TextField
          type="password"
          value={password}
          onChange={onChangePassForm}
          className="textField"
        />
      </div>

      <PrimaryButton
        title={
          loading ? (
            <CircularProgress color="inherit" size={15} />
          ) : (
            "Lưu mật khẩu"
          )
        }
        action={submitPassword}
        style={{ marginTop: "20px", width: 200 }}
      />
    </div>
  );
};
