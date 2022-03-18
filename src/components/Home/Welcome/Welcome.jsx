import React from "react";
import "./welcome.scss";

const Welcome = () => {
  return (
    <div className="flex flex-col space-y-14 sm:space-y-10 sm:flex-row sm:h-[64vh] mx-5 mt-10 mb-10 sm:mb-20 pb-4">
      <div className="__welcome-image-box bg-[url('https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/07/image_welcome.png')] bg-no-repeat bg-contain bg-center relative flex justify-start items-center h-[40vh] sm:h-[50vh] sm:w-full">
        <img
          className="absolute left-0 bottom-0 z-10 w-[50%] h-[76%]"
          src="https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/07/welcome-1-902x1024.jpg"
        />
        <img
          className="absolute bottom-0 left-[25%] z-[12] w-[50%]"
          src="https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/07/welcome-2-1024x705.jpg"
        />
      </div>
        <div className="__welcome-content-box h-[60vh] sm:w-[100%] flex flex-col justify-start pl-5">
        <div className="flex flex-col justify-evenly sm:space-y-4 h-[30%] pt-4 sm:pt-0 pb-2">
          <div className="w-20 bg-primary h-1" />
          <div className="text-sm font-[450] sm:font-[500] tracking-wide">
            RAISING COMFORT TO THE HIGHEST LEVEL
          </div>
          <div className="text-3xl sm:text-5xl font-[500] tracking-wide">
            Welcome to LuviStay Hotel Resort
          </div>
        </div>
        <div className="flex flex-col justify-evenly h-[70%] pl-12">
            <p className="text-gray-500 text-lg leading-7">The Hotel Luviana is the right choice for visitors who are searching for a combination of charm and a convenient position from where to explore surroundings.</p>
            <p className="text-gray-500 text-lg leading-7">The rooms are arranged on the first, second and third floors. On the top floor, there is also a charming terrace or solarium available for the use of guests, from where you can enjoy the view.</p>
            <div className="flex justify-center items-center w-44 h-14 text-sm text-white font-mono rounded-full bg-primary cursor-pointer"><a href="#" className="text-white">READ MORE</a></div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
