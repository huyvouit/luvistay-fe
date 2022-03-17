import React from "react";
// components
import HeroSlider from "../../components/HeroSlider";
import BoxBooking from "../../components/home/boxbooking";
import { BannerOne, BannerTwo } from "../../components/home/Banner";
import Introduce from "../../components/home/Introduce";

const HomePage = () => {
  return (
    <>
      <HeroSlider />
      <BoxBooking />
      <BannerOne />
      <BannerTwo />
      <Introduce />
    </>
  );
};

export default HomePage;
