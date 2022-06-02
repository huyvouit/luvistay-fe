import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../../assets/icons/logoluviStay.svg";

import { APP_ROUTE } from "../../routes/app.routes";
import "./header.scss";
import { AuthContext } from "../../hooks/contexts/auth_context";
import userIcon from "../../assets/images/profile.png";
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
    route: "Review",
    path: APP_ROUTE.BLOG,
  },
  {
    route: "Về chúng tôi",
    path: APP_ROUTE.CONTACT,
  },
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);
  const {
    authState: { authLoading, isAuthenticated, user },
  } = useContext(AuthContext);

  return (
    <main
      className="header"
      style={{ borderBottom: location.pathname !== "/" && "1px solid #dadada" }}
    >
      <section className="header-content flex">
        <section className="logo">
          <img
            src={logo}
            alt=""
            width={180}
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
                {NAVLINK.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={
                        location.pathname === item.path
                          ? "header-mobile-item-item header-mobile-item-item-active"
                          : "header-mobile-item-item"
                      }
                      onClick={() => {
                        navigate(item.path);
                        setOpenMenu(false);
                      }}
                    >
                      <p>{item.route}</p>
                    </div>
                  );
                })}
                {user ? (
                  <section
                    className={
                      location.pathname.includes("profile")
                        ? "header-mobile-item-item "
                        : "header-mobile-item-item"
                    }
                    onClick={() => {
                      navigate(APP_ROUTE.PROFILE);
                      setOpenMenu(false);
                    }}
                  >
                    <img
                      src={userIcon}
                      width="20px"
                      height="20px"
                      alt="user icon"
                    />
                  </section>
                ) : (
                  <section
                    className="header-mobile-item-item "
                    onClick={() => navigate(APP_ROUTE.SIGNIN)}
                  >
                    <p>Đăng nhập</p>
                  </section>
                )}
              </div>
            </div>
          </div>
        </section>
        <section className="navbar">
          {NAVLINK.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  location.pathname === item.path
                    ? "navbar-item navbar-item-active"
                    : "navbar-item"
                }
                onClick={() => navigate(item.path)}
              >
                <p>{item.route}</p>
              </div>
            );
          })}
          <section className="divider navbar-item"></section>
          {user ? (
            <section
              className={"navbar-item "}
              onClick={() => navigate(APP_ROUTE.PROFILE)}
            >
              <img
                src={user?.avatar}
                width="20px"
                height="20px"
                alt="user icon"
              />
            </section>
          ) : (
            <section
              className="navbar-item"
              onClick={() => navigate(APP_ROUTE.SIGNIN)}
            >
              <p>Đăng nhập</p>
            </section>
          )}
        </section>
      </section>
    </main>
  );
};

export default Header;
