import React from "react";
// components
import HeroSlider from "../../components/HeroSlider";
import BoxBooking from "../../components/Home/BoxBooking";
import { BannerOne, BannerTwo } from "../../components/Home/Banner";
import Introduce from "../../components/Home/Introduce";

const HomePage = () => {
  return (
    <>
      <HeroSlider />
      {/* <BoxBooking /> */}
      <BannerOne />
      <br />
      <BannerTwo />
      {/* <Introduce /> */}
    </>
  );
};

export default HomePage;
