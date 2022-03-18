import React, { useState } from "react";

import { useLocation } from "react-router-dom";

import "./header.scss";

const NAVLINK = [
  {
    route: "Home",
    path: "home",
  },
  {
    route: "Category",
    path: "category",
  },
  {
    route: "Blog",
    path: "Blog",
  },
  {
    route: "Contact",
    path: "contact",
  },
];

const Header = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <main className="header">
      <section className="header-content flex">
        <section className="logo">LuviStay</section>
        <div
          className="header-mobile flex-center"
          onClick={(event) => {
            setTimeout(() => {
              setOpenMenu(true);
              document.body.style.overflow = "hidden";
            }, 500);
          }}
        >
          <section className="icon">x</section>
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
              <section className="icon">+</section>
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
                    >
                      <p>{item.route}</p>
                    </div>
                  );
                })}

                <section className="header-mobile-item-item header-mobile-item-item-active">
                  <p>Login</p>
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
              >
                <p>{item.route}</p>
              </section>
            );
          })}
          <section className="divider navbar-item"></section>
          <section className="navbar-item">VI</section>
          <section className="navbar-item">Login</section>
        </section>
      </section>
    </main>
  );
};

export default Header;
