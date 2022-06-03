import React, { useContext } from "react";
// components
import HeroSlider from "../../components/HeroSlider";
import BoxBooking from "../../components/Home/BoxBooking/BoxBooking";
import Welcome from "../../components/Home/Welcome/Welcome";
import { BannerOne, BannerTwo } from "../../components/Home/Banner/Banner";
import Introduce from "../../components/Home/Introduce/Introduce";
import { ReviewOne, ReviewTwo } from "../../components/Home/Review/Review";

import Canonical from "../../components/Canonical";

import "./home.scss";
import { AuthContext } from "../../hooks/contexts/auth_context";
import { Backdrop, CircularProgress } from "@mui/material";

const HomePage = () => {
  return (
    <>
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1959.123450308989!2d106.80327138400044!3d10.868816298372641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175273ccf83c687%3A0x9c14bbc57c56a121!2sLuvistay!5e0!3m2!1svi!2s!4v1654186242144!5m2!1svi!2s"
          width="600"
          height="450"
          style={{ border: 0, width: "100%" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="luviStay"
        ></iframe>
      </div>
    </>
  );
};

export default HomePage;
