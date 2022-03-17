import React from "react";
// components
import HeroSlider from "../../components/HeroSlider";
import BoxBooking from "../../components/home/boxbooking";
import { BannerOne, BannerTwo } from "../../components/home/Banner";
import { ReviewOne, ReviewTwo } from "../../components/home/review/Review";

const HomePage = () => {
  return (
    <>
      <HeroSlider />
      <BannerOne/>
      <ReviewOne/>
      <BannerTwo/>
      <ReviewTwo/>
    </>
  );
};

export default HomePage;
