import React from "react";
import logo from "../../assets/icons/logo-footer.svg";
import payments from "../../assets/images/payments.png"
import "./footer.scss"

const Footer = () => {
  return <div className="footer">

    <div className="footer-on">
        <div className="footer-on-area">
          <section>
            <div className="colum-one">
              <p>
              <a href="#">
                <img src={logo} />
              </a>
              </p>
              <p>Tất cả các khách sạn và bất động sản cho thuê kỳ nghỉ được liệt kê trên trang web này đều thuộc sở hữu và điều hành độc lập. </p>
              <p>Các phương thức thanh toán</p>
              <p><img src={payments}/></p>

            </div>
          </section>
        </div>
        <div className="footer-on-area">
          <section>
          <h4 className="area-title">Dành cho khách hàng</h4>
          <div className="menu-one">
            <ul className="menu">
              <li><a href="#">Về LuviStay</a></li>
              <li><a href="#">Chăm sóc khách hàng</a></li>
              <li><a href="#">Thông tin tài chính</a></li>
              <li><a href="#">Điều khoản và quy định</a></li>
              <li><a href="#"></a></li>
            </ul>
          </div>
          </section>
        </div>
        <div className="footer-on-area">
          <section>
            <h4 className="area-title">Tin tức liên quan</h4>
            <ul className="menu-two">
              <li><a href="#">Chuyến tham quan Đảo bí mật của chúng tôi chỉ dành cho bạn </a></li>
              <li><a href="#">Thư giãn và trốn thoát trong những nơi trú ẩn tự nhiên của chúng ta </a></li>
              <li><a href="#">Tháng 9 tại LuviStay</a></li>
              <li><a href="#">Hoà nhạc tại LuviStay</a></li>
            </ul>
          </section>
        </div>
        <div className="footer-on-area">
          <section>
            <h4 className="area-title">Liên hệ</h4>
            <div className="colum-four">
            <p className="colum-four-addres">Khu Phố 6, phường Linh Trung, thành phố Thủ Đức, thành phố Hồ Chí Minh </p>
            <p className="colum-four-link"><a href="#">luvistay@gmail.com</a></p>
            <p className="colum-four-link"><a href="tel:+84979412412">+84 979 412 412</a> <br/><a href="#">+84 979 412 412</a> </p>
            <p className="colum-four-link"><a href="#">Dịch vụ chăm sóc khách hàng 24/7</a></p>
            </div>
          </section>
        </div>
    </div>
    <div className="footer-up">
    <div className="footer-up-info"> LuviStay © 2022 </div>
    </div>

  </div>;
};

export default Footer;
