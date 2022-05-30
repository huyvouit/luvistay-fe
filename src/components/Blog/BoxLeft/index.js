import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate  } from "react-router-dom";
import { AuthContext } from "../../../hooks/contexts/auth_context";
import "./boxLeft.scss";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BoxLeft = () => {
  let navigate = useNavigate(); 
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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    navigate("/blog");
  };
  const handleClose1 = () => {
    setAnchorEl(null);
    navigate("/my-blog");
  };

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
      {
        user ? <FontAwesomeIcon
        className="menu-icon"
          onClick={handleClick}
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          icon="fa-solid fa-bars"
          style={{ width: "30px", height: "30px !important" }}
        /> : <Link
        to="/blog" className="menu-icon"
      >
        <h2>BÀI VIẾT</h2>
      </Link>
      }
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose} >BÀI VIẾT</MenuItem>
        <MenuItem onClick={handleClose1}>BÀI VIẾT CỦA TÔI</MenuItem>
      </Menu>
    </>
  );
};

export default BoxLeft;
