import React from "react";
// components
import HeroSlider from "../../components/HeroSlider";
import BoxBooking from "../../components/Home/BoxBooking/BoxBooking";
import Welcome from "../../components/Home/Welcome/Welcome";
import { BannerOne, BannerTwo } from "../../components/Home/Banner/Banner";
import Introduce from "../../components/Home/Introduce/Introduce";
import { ReviewOne, ReviewTwo } from "../../components/Home/Review/Review";

import Canonical from "../../components/Canonical";

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
    </>
  );
};

export default HomePage;
