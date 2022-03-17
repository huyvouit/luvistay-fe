import React from "react";
// components
import HeroSlider from "../../components/HeroSlider";
import BoxBooking from "../../components/Home/BoxBooking";
import { BannerOne, BannerTwo } from "../../components/Home/Banner";

const HomePage = () => {
  return (
    <>
      <HeroSlider />
      <BannerOne />
      <br />
      <BannerTwo />
    </>
  );
};

export default HomePage;
