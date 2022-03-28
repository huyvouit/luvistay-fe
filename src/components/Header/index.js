import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/icons/logo-footer.svg";

import "./header.scss";
import { APP_ROUTE } from "../../routes/app.routes";

const NAVLINK = [
  {
    route: "Trang chủ",
    path: APP_ROUTE.HOME,
  },
  {
    route: "Căn hộ",
    path: APP_ROUTE.APARTMENT,
  },
  {
    route: "Bài viết",
    path: APP_ROUTE.BLOG,
  },
  {
    route: "Liên hệ",
    path: APP_ROUTE.CONTACT,
  },
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <main
      className="header"
      style={{ borderBottom: location.pathname !== "/" && "1px solid $gray25" }}
    >
      <section className="header-content flex">
        <section className="logo">
          <img
            src={logo}
            alt=""
            width={140}
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          />
        </section>
        <div
          className="header-mobile flex-center"
          onClick={(event) => {
            setTimeout(() => {
              setOpenMenu(true);
              document.body.style.overflow = "hidden";
            }, 500);
          }}
        >
          <FontAwesomeIcon
            icon="fa-solid fa-bars"
            style={{ width: "30px", height: "30px !important" }}
          />
        </div>
        <section
          className={
            openMenu
              ? "header-mobile-container header-mobile-container-open div100vh"
              : "header-mobile-container"
          }
        >
          <div
            className={
              openMenu
                ? "header-mobile-container-box header-mobile-container-box-open"
                : "header-mobile-container-box"
            }
          >
            <div
              className="header-mobile flex-center"
              onClick={(event) => {
                setTimeout(() => {
                  setOpenMenu(false);
                  document.body.style.overflow = "unset";
                }, 600);
              }}
            >
              <FontAwesomeIcon icon="fa-solid fa-xmark" className="icon" />
            </div>
            <div className="header-mobile-item-box ">
              <div className="header-mobile-item-list flex-center flex-col">
                {NAVLINK.map((item) => {
                  return (
                    <div
                      className={
                        location === item.path
                          ? "header-mobile-item-item header-mobile-item-item-active"
                          : "header-mobile-item-item"
                      }
                      onClick={() => navigate(item.path)}
                    >
                      <p>{item.route}</p>
                    </div>
                  );
                })}

                <section className="header-mobile-item-item header-mobile-item-item-active">
                  <p>Đăng nhập</p>
                </section>
                <section className="header-mobile-item-item header-mobile-item-item-active">
                  <p>VI</p>
                </section>
              </div>
            </div>
          </div>
        </section>
        <section className="navbar">
          {NAVLINK.map((item) => {
            return (
              <section
                className={
                  location === item.path
                    ? "navbar-item navbar-item-active"
                    : "navbar-item"
                }
                onClick={() => navigate(item.path)}
              >
                <p>{item.route}</p>
              </section>
            );
          })}
          <section className="divider navbar-item"></section>
          <section className="navbar-item">VI</section>
          <section className="navbar-item">Đăng nhập</section>
        </section>
      </section>
    </main>
  );
};

export default Header;
