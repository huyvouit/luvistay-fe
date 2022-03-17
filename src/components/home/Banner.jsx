import React from "react";
import "./banner.scss";

import { BANNER_IMAGE } from "./constants";

const BannerOne = ({}) => {
  return (
    <div className="relative flex justify-center items-center h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden">
      <div className="__bg-banner_one"></div>
      <div className="__float-box-container_one">
        <div className="__float-box_one">
          <div className="flex flex-col justify-around h-full w-full text-white">
            <h1 className="text-4xl md:text-2xl font-semibold">
              Our Amenities
            </h1>
            <p className="text-base md:text-lg">
              Our Amenities The hotel is arranged on three floors without a
              lift. On the ground floor, apart from the reception, there is a
              comfortable lounge where you can sit and drink tea.
            </p>
            <div className="__float-box-grid-content">
              <div>Swimming pool</div>
              <div>Gym & yoga</div>
              <div>Spa & massage</div>
              <div>Boat tours</div>
              <div>Surfing lessons</div>
              <div>Conference room</div>
              <div>Diving & snorkling</div>
              <div>Private Beach</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BannerTwo = ({}) => {
  return (
    <div className="relative flex justify-center items-center h-[50vh] md:h-[80vh] overflow-hidden">
      <div className="__bg-banner_two"></div>
      <div className="__float-box-container_two">
        <div className="__float-box_two">
          <div className="flex flex-col justify-evenly h-full w-full text-white">
            <h1 className="text-4xl md:text-2xl font-semibold">
              Our Amenities
            </h1>
            <div className="flex flex-col justify-between pl-10">
              <p className="text-xl md:text-lg">
                Our Amenities The hotel is arranged on three floors without a
                lift. On the ground floor, apart from the reception, there is a
                comfortable lounge where you can sit and drink tea.
              </p>
              <div className="flex flex-row items-center w-full h-max">
                <div className="h-30 w-30 bg-primary m-4">Avatar</div>
                <span>Nguyen Tra Vi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BannerOne, BannerTwo };
