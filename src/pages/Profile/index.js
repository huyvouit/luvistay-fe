import React, { useContext, useState } from "react";
import "./profile.scss";
import SidebarProfile from "../../components/Profile/Sidebar";
import { TextField } from "@mui/material";
import { AuthContext } from "../../hooks/contexts/auth_context";
import { useNavigate } from "react-router-dom";
import { APP_ROUTE } from "../../routes/app.routes";
import { toast } from "react-toastify";
import userApi from "../../api/user_api";

const ProfilePage = () => {
  const navigate = useNavigate();
  const {
    authState: { isAuthenticated, user },
    logoutUser,
    loadUser,
  } = useContext(AuthContext);

  const [infoUserForm, setInfoUserForm] = useState({
    username: user?.username || "",
    phone: user?.phone || "",
  });

  const handleSubmitChangeInfoUser = async () => {
    try {
      const infoUser = {
        username: infoUserForm.username,
        phone: infoUserForm.phone,
      };
      const res = await userApi.putUpdateUser(infoUser);
      if (res.success) {
        await loadUser();

        toast.success("Cập nhật thông tin thành công", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      toast.error("Cập nhật thông tin thất bại", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };
  return (
    <div className="profile">
      <div className="profile-container">
        <div className="profile-container-row-one">
          <h2>MY ACCOUNT</h2>
        </div>
        <div className="profile-container-row-two">
          <div className="profile-container-row-two-container">
            <div className="colum-one">
              <div className="colum-one-container">
                <SidebarProfile />
                <div
                  className="colum-one-container-logout"
                  onClick={() => logoutUser(() => navigate(APP_ROUTE.HOME))}
                >
                  ĐĂNG XUẤT
                </div>
              </div>
            </div>
            <div className="colum-two">
              <section className="form">
                <h1>Thông tin tài khoản</h1>
                <TextField
                  className="text-field"
                  id="full-name"
                  type={"text"}
                  value={infoUserForm.username}
                  autoFocus
                  label="Họ và tên"
                  variant="outlined"
                  required
                  onChange={(e) =>
                    setInfoUserForm({
                      ...infoUserForm,
                      username: e.target.value,
                    })
                  }
                />
                <div className="group-pe">
                  <TextField
                    className="text-field"
                    id="phone-number"
                    type={"text"}
                    value={infoUserForm.phone}
                    label="Số điện thoại"
                    autoFocus
                    variant="outlined"
                    required
                    onChange={(e) =>
                      setInfoUserForm({
                        ...infoUserForm,
                        username: e.target.value,
                      })
                    }
                  />
                  <TextField
                    className="text-field"
                    id="email"
                    type={"email"}
                    label="Email"
                    value={user?.email}
                    autoFocus
                    disabled
                    variant="outlined"
                    required
                  />
                </div>
                <button onClick={handleSubmitChangeInfoUser}>
                  Lưu thông tin
                </button>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
