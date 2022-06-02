import React, { useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { useParams } from "react-router";
import userApi from "../../api/user_api";
import PrimaryButton from "../../components/PrimaryButton";
import { CircularProgress, TextField } from "@mui/material";

export const ResetPassword = () => {
  const { token } = useParams();

  const [passwordForm, setPasswordForm] = useState({
    resetLink: token,
    newPassword: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const { newPassword, confirmPassword } = passwordForm;
  const [validationMsg, setValidationMsg] = useState({});
  const onChangePassForm = (event) =>
    setPasswordForm({
      ...passwordForm,
      [event.target.name]: event.target.value,
    });

  const validateAll = () => {
    const msg = {};

    if (newPassword !== confirmPassword) {
      msg.confirmPassword = "Confirm password is not matched";
    }

    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  const navigate = useNavigate();

  function handlePushHistory() {
    navigate({
      pathname: "/",
    });
  }

  const submitPassword = async (event) => {
    event.preventDefault();

    try {
      const body = { resetLink: token, newPassword };
      const formData = await userApi.postResetPass(body);
      // console.log(formData.data);
      if (formData.success) {
        toast.success(formData.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        handlePushHistory();
      } else {
        toast.error(formData.error, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      // console.log(error.response.data.error);
      toast.error("Error", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      handlePushHistory();
    }
  };

  return (
    <div className="ac_wrapper" style={{ height: "80vh", marginBottom: "0" }}>
      <h1 className="ac_title" style={{ marginTop: "0" }}>
        Get your new password!
      </h1>
      <p className="ac_content">
        Enter your password and you will have a new password.
      </p>
      <div className="input-field" style={{ marginTop: "40px" }}>
        <p className="form-label">Email</p>
        <TextField
          type="text"
          value=""
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
