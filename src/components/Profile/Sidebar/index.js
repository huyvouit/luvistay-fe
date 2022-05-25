import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";
const SidebarProfile = () => {
  const management = [
    { managementId: "/profile", name: "ACCOUNT DETAIL" },
    { managementId: "/profile/change-password", name: "CHANGE PASSWORD" },
    { managementId: "/profile/orders", name: "ORDERS" },
    { managementId: "/profile/host", name: "HOST" },
  ];

  const [locationHref, setLocationHref] = useState("");
  useEffect(() => {
    let wlh = window.location.href;
    for (let i = 0; i < 4; i++) {
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
            className={locationHref === path ? "sidebar-aSelect" : "sidebar-a"}
          >
            <h2>{item.name}</h2>
          </Link>
        );
      })}
    </>
  );
};

export default SidebarProfile;
