import React from "react";
// components
import HeroSlider from "../../components/HeroSlider";
import BoxBooking from "../../components/Home/BoxBooking";
import Welcome from "../../components/Home/Welcome/Welcome";
import { BannerOne, BannerTwo } from "../../components/Home/Banner/Banner";
import Introduce from "../../components/Home/Introduce";

const HomePage = () => {
  return (
    <>
      <HeroSlider />
      {/* <BoxBooking /> */}
      <Welcome />
      <BannerOne />
      <br />
      <BannerTwo />
      {/* <Introduce /> */}
    </>
  );
};

export default HomePage;
