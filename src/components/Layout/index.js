import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";
const Layout = () => {
  return (
    <>
      <Header />
      <main className="layout">
        <div className="layout-main">
          <div className="layout-content">
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
