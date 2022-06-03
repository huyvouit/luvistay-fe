import React, { useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import userApi from "../../api/user_api";
import "./styles.scss";
import { CircularProgress, TextField } from "@mui/material";
import PrimaryButton from "../../components/PrimaryButton";
export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [validationMsg, setValidationMsg] = useState({});
  const onChangeForm = (event) => setEmail(event.target.value);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  function handlePushHistory() {
    navigate({
      pathname: "/reset-password",
    });
  }

  const submitEmail = async (event) => {
    event.preventDefault();

    try {
      const body = { email };
      setLoading(true);
      const formData = await userApi.postForgotPass(body);
      console.log(formData);
      if (formData.data.success) {
        toast.success(`Email đã được gửi tới ${email}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setLoading(false);
        setEmail("");
      } else {
        toast.error("Đã có lỗi xảy ra", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setLoading(false);
      }
    } catch (error) {
      toast.error("Đã có lỗi xảy ra. Kiểm tra lại email đã nhập.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setLoading(false);
    }
  };

  return (
    <div className="auth-wrapper" style={{ height: "80vh", marginBottom: "0" }}>
      <h1 className="auth_title" style={{ marginTop: "0" }}>
        Quên mật khẩu?
      </h1>
      <p className="auth_content">
        Đừng lo lắng! Hãy nhập email vào sau đó sẽ nhận được liên kết.
      </p>
      <div className="input-field" style={{ marginTop: "40px" }}>
        <p className="form-label">Email</p>
        <TextField
          type="text"
          value={email}
          onChange={onChangeForm}
          className="textField"
        />
      </div>

      <PrimaryButton
        title={
          loading ? (
            <CircularProgress color="inherit" size={15} />
          ) : (
            "Gửi yêu cầu"
          )
        }
        action={(e) => submitEmail(e)}
        style={{ marginTop: "20px", width: 200 }}
      />
    </div>
  );
};
