import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../hooks/contexts/auth_context";
import "./boxLeft.scss";

const BoxLeft = () => {
  const {
    authState: { user },
  } = useContext(AuthContext);
  const management = [
    { managementId: "/blog", name: "BÀI VIẾT" },
    { managementId: "/my-blog", name: "BÀI VIẾT CỦA TÔI" },
  ];

  const [locationHref, setLocationHref] = useState("");
  useEffect(() => {
    let wlh = window.location.href;
    for (let i = 0; i < 2; i++) {
      if (wlh.includes(management[i].managementId))
        setLocationHref(management[i].managementId);
    }
  }, [window.location.href]);
  return (
    <>
      {management.map((item, index) => {
        let path = item.managementId;
        if (index == 0) {
          return (
            <Link
              key={index}
              to={path}
              className={locationHref === path ? "blog-aSelect" : "blog-a"}
            >
              <h2>{item.name}</h2>
            </Link>
          );
        } else if (index === 1 && user) {
          return (
            <Link
              key={index}
              to={path}
              className={locationHref === path ? "blog-aSelect" : "blog-a"}
            >
              <h2>{item.name}</h2>
            </Link>
          );
        }
      })}
    </>
  );
};

export default BoxLeft;
