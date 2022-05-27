import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./boxLeft.scss";

const BoxLeft = () => {
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
        return (
          <Link
            to={path}
            className={locationHref === path ? "blog-aSelect" : "blog-a"}
          >
            <h2>{item.name}</h2>
          </Link>
        );
      })}
    </>
  );
};

export default BoxLeft;
