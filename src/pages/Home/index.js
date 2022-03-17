import React from "react";
// components
import HeroSlider from "../../components/HeroSlider";
import BoxBooking from "../../components/Home/boxbooking";
import { BannerOne, BannerTwo } from "../../components/Home/Banner";

const HomePage = () => {
  return (
    <>
      <HeroSlider />
      <BoxBooking />
    </>
  );
};

export default HomePage;
