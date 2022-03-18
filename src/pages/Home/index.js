import React from "react";
// components
import HeroSlider from "../../components/HeroSlider";
import BoxBooking from "../../components/Home/BoxBooking";
import Welcome from "../../components/Home/Welcome";
import { BannerOne, BannerTwo } from "../../components/Home/Banner";
import Introduce from "../../components/Home/Introduce";
import { ReviewOne, ReviewTwo } from "../../components/Home/Review/Review";

const HomePage = () => {
  return (
    <>
      <HeroSlider />
      <BoxBooking />
      <Welcome />
      <BannerOne />
      <ReviewOne/>
      <br />
      <BannerTwo />
      <Introduce />
      <ReviewTwo/>
    </>
  );
};

export default HomePage;
