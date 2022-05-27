import React, { useContext } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";
import { AuthContext } from "../../hooks/contexts/auth_context";
import { Backdrop, CircularProgress } from "@mui/material";
const Layout = () => {
  return (
    <main className="layout">
      <Header />
      <div className="layout-main">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
