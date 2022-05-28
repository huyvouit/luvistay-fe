import React, { useContext, useState } from "react";
import "./profile.scss";
import SidebarProfile from "../../components/Profile/Sidebar";
import { TextField } from "@mui/material";
import { AuthContext } from "../../hooks/contexts/auth_context";

const ProfilePage = () => {
  const {
    authState: { isAuthenticated, user, logoutUser },
  } = useContext(AuthContext);
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
                  onClick={logoutUser}
                >
                  LOGOUT
                </div>
              </div>
            </div>
            <div className="colum-two">
              <form>
                <h1>My Account</h1>
                <TextField
                  className="text-field"
                  id="full-name"
                  type={"text"}
                  value={user?.username}
                  autoFocus
                  label="Full name"
                  variant="outlined"
                  required
                />
                <div className="group-pe">
                  <TextField
                    className="text-field"
                    id="phone-number"
                    // type={"number"}
                    type={"text"}
                    value={user?.phone}
                    label="Phone number"
                    autoFocus
                    variant="outlined"
                    required
                  />
                  <TextField
                    className="text-field"
                    id="email"
                    type={"email"}
                    label="Email"
                    value={user?.email}
                    autoFocus
                    variant="outlined"
                    required
                  />
                </div>
                <button type="submit">Save information</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
