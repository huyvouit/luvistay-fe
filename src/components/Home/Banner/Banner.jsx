import React from "react";
import "./_banner.scss";

import { BANNER_IMAGE } from "../constants";

const BannerOne = ({}) => {
  return (
    <div className="relative flex justify-center items-center h-[80vh] sm:h-[70vh] md:h-[80vh] overflow-hidden">
      <div className="__bg-banner_one bg-[url('https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/07/amenities-new.jpg')] bg-cover bg-no-repeat bg-center relative flex justify-center items-center w-full h-[85%] overflow-x-hidden"></div>
      <div className="__float-box-container_one absolute max-w-5xl -inset-y-0 flex justify-center md:justify-end w-[100%] md:w-[90%]">
        <div className="__float-box_one bg-[url('https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/07/image_testimonials.png')] bg-[#3f9cc1] bg-no-repeat bg-contain bg-left-top flex justify-center items-center h-full w-[90%] md:w-[50%] px-4 py-14 md:px-16 lg:px-20 md:py-20">
          <div className="flex flex-col justify-around h-full w-full text-white">
            <h1 className="text-4xl md:text-2xl font-normal">Our Amenities</h1>
            <p className="text-base md:text-lg">
              The hotel is arranged on three floors without a lift. On the
              ground floor, apart from the reception, there is a comfortable
              lounge where you can sit and drink tea.
            </p>
            <div className="__float-box-grid-content grid gap-6 md:gap-4 grid-cols-1 grid-rows-[8] sm:grid-cols-2 sm:grid-rows-4 font-medium text-base sm:text-xl md:text-base">
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
    <div className="relative flex justify-center items-center h-[50vh] md:h-[80vh] overflow-hidden mb-12">
      <div className="__bg-banner_two bg-[url('https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/07/People-Say-.jpg')] bg-cover bg-no-repeat bg-center relative flex justify-center items-center w-full h-[85%] overflow-x-hidden"></div>
      <div className="__float-box-container_two max-w-5xl absolute -inset-y-0 flex justify-center md:justify-start w-[100%] md:w-[90%]">
        <div className="__float-box_two bg-[url('https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/07/image_testimonials.png')] bg-[#3f9cc1] bg-no-repeat bg-contain bg-left-top flex justify-center items-center h-full w-[90%] md:w-[50%] px-4 pt-5 sm:pt-10 pb-10 sm:pb-14 md:px-16 lg:px-20 md:py-20">
          <div className="flex flex-col space-y-10 justify-between h-full w-full text-white">
            <div className="flex flex-col justify-between h-[24%]">
              <div className="h-1 w-14 md:w-20 bg-white"></div>
              <h5 className="text-sm font-[500]">
                AT THE HEART OF COMMUNITIES
              </h5>
              <h1 className="text-4xl md:text-2xl font-normal">People Say</h1>
            </div>
            <div className="flex flex-col justify-between space-y-10 pl-10 h-[70%] sm:h-[60%]">
              <p className="text-sm sm:text-lg font-thin italic">
                “We stayed here with our family and are fully satisfied with our
                vacation. Rooms are very modern, have all needed amenities, the
                kitchen is very delicious and service is just perfect. We will
                for sure come back.”
              </p>
              <div className="flex flex-row items-center w-full h-[42px] sm:h-[55px]">
                <div className="flex justify-center items-center h-full w-[42px] sm:w-[55px] rounded-full bg-primary mr-4">
                  Avatar
                </div>
                <div className="flex flex-col space-y-0 text-base">
                  <span>Huy Vô UIT</span>
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
