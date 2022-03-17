import React from "react";
// components
import HeroSlider from "../../components/HeroSlider";
import BoxBooking from "../../components/home/boxbooking";
import { BannerOne, BannerTwo } from "../../components/home/Banner";
import Introduce from "../../components/home/Introduce";
import { ReviewOne, ReviewTwo } from "../../components/home/review/Review";

const HomePage = () => {
  return (
    <>
      <HeroSlider />
      <BoxBooking />
      <BannerOne />
      <ReviewOne/>
      <BannerTwo />
      <Introduce />
      <ReviewTwo/>
    </>
  );
};

export default HomePage;
