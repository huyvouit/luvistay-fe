import React from "react";
// components
import HeroSlider from "../../components/HeroSlider";
import BoxBooking from "../../components/Home/BoxBooking/BoxBooking";
import Welcome from "../../components/Home/Welcome/Welcome";
import { BannerOne, BannerTwo } from "../../components/Home/Banner/Banner";
import Introduce from "../../components/Home/Introduce/Introduce";
import { ReviewOne, ReviewTwo } from "../../components/Home/Review/Review";

import Canonical from "../../components/Canonical";

import "./home.scss";

const HomePage = () => {
  return (
    <>
      <Canonical title="Trang chủ | LuviStay" />
      <HeroSlider />
      <BoxBooking />
      <Welcome />
      <BannerOne />
      <ReviewOne />
      <br />
      <BannerTwo />
      <Introduce />
      <ReviewTwo />
      <div className="__maps_embed">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.2311711967195!2d106.80086005103158!3d10.87001416039203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2sUniversity%20of%20Information%20Technology%20-%20VNUHCM!5e0!3m2!1sen!2s!4v1648476395213!5m2!1sen!2s"
          style={{border: "0", width: "100%", height: "500px"}}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default HomePage;
