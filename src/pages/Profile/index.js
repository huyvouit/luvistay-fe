import React, { useState } from "react";
import "./profile.scss";
import SidebarProfile from "../../components/Profile/Sidebar";
import { TextField } from "@mui/material";

const ProfilePage = () => {
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
                <h2 className="colum-one-container-logout">LOGOUT</h2>
              </div>
            </div>
            <div className="colum-two">
              <form>
                <h1>My Account</h1>
                <TextField
                  className="text-field"
                  id="full-name"
                  type={"text"}
                  label="Full name"
                  variant="outlined"
                  required
                />
                <div className="group-pe">
                  <TextField
                    className="text-field"
                    id="phone-number"
                    type={"number"}
                    label="Phone number"
                    variant="outlined"
                    required
                  />
                  <TextField
                    className="text-field"
                    id="email"
                    type={"email"}
                    label="Email"
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
