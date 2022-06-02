import React, { useEffect, useContext } from "react";

import { Link } from "react-router-dom";
import { TOKEN_NAME, REFTOKEN } from "../../../constants";
import { useParams } from "react-router";
import "./index.scss";
import PrimaryButton from "../../../components/PrimaryButton";
import { APP_ROUTE } from "../../../routes/app.routes";
import { useNavigate } from "react-router-dom";
export const RegisterSuccess = () => {
  const { access, refresh } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if ((access, refresh)) {
      console.log(access, refresh);
      localStorage.setItem(TOKEN_NAME, access);
      localStorage.setItem(REFTOKEN, refresh);
    }
  }, []);

  return (
    <div className="auth-wrapper">
      <p className="auth_title">CHÀO MỪNG BẠN ĐẾN VỚI LUVISTAY</p>
      <p className="auth_content">Tài khoản của bạn đã được kích hoạt</p>
      <p className="auth_content">Hãy đặt phòng với chúng tôi</p>
      {/* <img className="ac_icon" src={check} alt="cart-tick"></img> */}
      <section className="auth_btn">
        <PrimaryButton
          title="Đặt phòng ngay"
          action={() => navigate(APP_ROUTE.HOME)}
        />
      </section>
    </div>
  );
};
