import React, { useEffect, useContext } from "react";

import { Link } from "react-router-dom";
import { TOKEN_NAME, REFTOKEN } from "../../../constants";
import { useParams } from "react-router";

export const RegisterSuccess = () => {
  const { access, refresh } = useParams();

  useEffect(() => {
    if ((access, refresh)) {
      console.log(access, refresh);
      localStorage.setItem(TOKEN_NAME, access);
      localStorage.setItem(REFTOKEN, refresh);
    }
  }, []);

  return (
    <div className="auth-wrapper">
      <h1 className="auth_title">CHAO MỪNG BẠN ĐẾN VỚI LUVISTAY</h1>
      <p className="auth_content">Tài khoản của bạn đã được kích hoạt</p>
      <p className="auth_content">Hãy đặt phòng với chúng tôi</p>
      {/* <img className="ac_icon" src={check} alt="cart-tick"></img> */}
      <Link to="/" className="auth_btn">
        Đặt phòng ngay
      </Link>
    </div>
  );
};
