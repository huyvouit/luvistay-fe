import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import SidebarProfile from "../Sidebar";
import { TextField } from "@mui/material";
import "./changePassword.scss";
import { AuthContext } from "../../../hooks/contexts/auth_context";
import { APP_ROUTE } from "../../../routes/app.routes";
import userApi from "../../../api/user_api";
import { toast } from "react-toastify";
const ChangePassword = () => {
  let navigate = useNavigate();
  const {
    authState: { isAuthenticated, user },
    logoutUser,
    loginUser,
  } = useContext(AuthContext);
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");

  const handleUpdatePassword = async () => {
    try {
      const res = await loginUser({
        email: user?.email,
        password: oldPass,
      });
      if (res.success) {
        const response = await userApi.postNewPassword({
          password: newPass,
        });
        if (response.success) {
          toast.success("Cập nhật thành công", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        } else {
          toast.error("Đã có lỗi xảy ra hãy kiểm tra lại", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      } else {
        toast.error("Đã có lỗi xảy ra. Hãy kiểm tra lại mật khẩu", {
          position: "top-right",
          autoClose: 5000,
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
  return (
    <div className="change-password">
      <div className="change-password-container">
        <div className="change-password-container-row-one">
          <h2>MY ACCOUNT</h2>
        </div>
        <div className="change-password-container-row-two">
          <div className="change-password-container-row-two-container">
            <div className="colum-one">
              <div className="colum-one-container">
                <SidebarProfile />
                <h2
                  className="colum-one-container-logout"
                  onClick={() => logoutUser(() => navigate(APP_ROUTE.HOME))}
                >
                  ĐĂNG XUẤT
                </h2>
              </div>
            </div>
            <div className="colum-two">
              <div className="colum-two">
                <section className="form">
                  <h1>Đổi mật khẩu</h1>
                  <TextField
                    className="text-field"
                    id="old-password"
                    type={"password"}
                    label="Mật khẩu cũ"
                    variant="outlined"
                    required
                    value={oldPass}
                    onChange={(e) => setOldPass(e.target.value)}
                  />
                  <TextField
                    className="text-field"
                    id="new-password"
                    type={"password"}
                    label="Mật khẩu mới"
                    variant="outlined"
                    required
                    value={newPass}
                    onChange={(e) => setNewPass(e.target.value)}
                  />

                  <button onClick={handleUpdatePassword}>Cập nhật</button>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
