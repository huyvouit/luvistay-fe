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
              <p>All hotels and vacation rental properties listed on this website are independently owned and operated.</p>
              <p>Accepted payment methods</p>
              <p><img src={payments}/></p>

            </div>
          </section>
        </div>
        <div className="footer-on-area">
          <section>
          <h4 className="area-title">For Customers</h4>
          <div className="menu-one">
            <ul className="menu">
              <li><a href="#">About Luviana</a></li>
              <li><a href="#">Customer Care/Help</a></li>
              <li><a href="#">Corporate Accounts</a></li>
              <li><a href="#">Financial Information</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
          </section>
        </div>
        <div className="footer-on-area">
          <section>
            <h4 className="area-title">Recent News</h4>
            <ul className="menu-two">
              <li><a href="#">Our Secret Island Boat Tour Is Just for You</a></li>
              <li><a href="#">Chill and Escape in Our Natural Shelters</a></li>
              <li><a href="#">September in Luviana Hotel</a></li>
              <li><a href="#">Live Music Concerts at Luviana</a></li>
            </ul>
          </section>
        </div>
        <div className="footer-on-area">
          <section>
            <h4 className="area-title">Contact Us</h4>
            <div className="colum-four">
            <p className="colum-four-addres">3015 Grand Ave, Coconut Grove,<br/>Merrick Way, FL 12345</p>
            <p className="colum-four-link"><a href="#">hello@luviana.com</a></p>
            <p className="colum-four-link"><a href="#">1.954.456.6789</a> <br/><a href="#">1.954.456.6788</a> </p>
            <p className="colum-four-link"><a href="#">24/7 Customer Service</a></p>
            </div>
          </section>
        </div>
    </div>
    <div className="footer-up">
    <div className="footer-up-info"> Luvíana © 2022 All Rights Reserved</div>
    </div>

  </div>;
};

export default Footer;
