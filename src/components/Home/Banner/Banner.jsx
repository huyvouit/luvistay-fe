import React from "react";
import "./banner.scss";

import { BANNER_IMAGE } from "../constants";

const BannerOne = ({}) => {
  return (
    <div className="relative flex justify-center items-center h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden">
      <div className="__bg-banner_one"></div>
      <div className="__float-box-container_one">
        <div className="__float-box_one">
          <div className="flex flex-col justify-around h-full w-full text-white">
            <h1 className="text-4xl md:text-2xl font-normal">Our Amenities</h1>
            <p className="text-base md:text-lg">
              The hotel is arranged on three floors without a
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
          <div className="flex flex-col space-y-10 justify-between h-full w-full text-white">
            <div className="flex flex-col justify-between h-[24%]">
              <div className="h-1 w-1/5 bg-white"></div>
              <h5 className="text-sm font-[500]">AT THE HEART OF COMMUNITIES</h5>
              <h1 className="text-4xl md:text-2xl font-normal">People Say</h1>
            </div>
            <div className="flex flex-col justify-between space-y-10 pl-10 h-[60%]">
              <p className="text-xl md:text-lg font-thin italic">
                “We stayed here with our family and are fully satisfied with our
                vacation. Rooms are very modern, have all needed amenities, the
                kitchen is very delicious and service is just perfect. We will
                for sure come back.”
              </p>
              <div className="flex flex-row items-center w-full h-[55px]">
                <div className="flex justify-center items-center h-full w-[55px] rounded-full bg-primary mr-4">
                  Avatar
                </div>
                <div className="flex flex-col space-y-0 text-base">
                  <span>Nguyen Tra Vi</span>
                  <span>Chủ tịch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BannerOne, BannerTwo };
