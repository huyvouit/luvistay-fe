import React, { useState, useEffect,useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./sidebar.scss";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthContext } from "../../../hooks/contexts/auth_context";
import { APP_ROUTE } from "../../../routes/app.routes";
const SidebarProfile = () => {
  const management = [
    { managementId: "/profile", name: "TÀI KHOẢN" },
    { managementId: "/profile/change-password", name: "ĐỔI MẬT KHẨU" },
    { managementId: "/profile/orders", name: "HÓA ĐƠN" },
    { managementId: "/profile/host", name: "CHỦ NHÀ" },
  ];

  const [locationHref, setLocationHref] = useState("");
  useEffect(() => {
    let wlh = window.location.href;
    for (let i = 0; i < 4; i++) {
      if (wlh.includes(management[i].managementId))
        setLocationHref(management[i].managementId);
    }
  }, [window.location.href]);

  let navigate = useNavigate(); 
    const {
        authState: { isAuthenticated, user },
        logoutUser,
      } = useContext(AuthContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
    navigate("/profile");
  };

  const handleCloseMenu5 = () => {
    setAnchorEl(null);
  };
  const handleCloseMenu1 = () => {
    setAnchorEl(null);
    navigate("/profile/change-password");
  };
  const handleCloseMenu2 = () => {
    setAnchorEl(null);
    navigate("/profile/orders");
  };
  const handleCloseMenu3 = () => {
    setAnchorEl(null);
    navigate("/profile/host");
  };
  const handleCloseMenu4 = () => {
    setAnchorEl(null);
    logoutUser(() => navigate(APP_ROUTE.HOME))
  };



  return (
    <>
      {management.map((item, index) => {
        let path = item.managementId;
        return (
          <Link
            to={path}
            className={locationHref === path ? "sidebar-aSelect" : "sidebar-a"}
          >
            <h2 className="sidebar-label">{item.name}</h2>
          </Link>
        );
      })}
      <FontAwesomeIcon
        className="menu-icon"
        onClick={handleClick}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        icon="fa-solid fa-bars"
        style={{ width: "30px", height: "30px !important" }}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu5}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleCloseMenu} >TÀI KHOẢN</MenuItem>
        <MenuItem onClick={handleCloseMenu1}>ĐỔI MẬT KHẨU</MenuItem>
        <MenuItem onClick={handleCloseMenu2}>HÓA ĐƠN</MenuItem>
        <MenuItem onClick={handleCloseMenu3}>CHỦ NHÀ</MenuItem>
        <MenuItem onClick={handleCloseMenu4}>ĐĂNG XUẤT</MenuItem>
      </Menu>

    </>
  );
};

export default SidebarProfile;
