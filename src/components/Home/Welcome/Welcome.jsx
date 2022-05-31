import React from "react";
import "./_welcome.scss";

const Welcome = () => {
  return (
    <div className="__font flex flex-col flex-nowrap space-y-14 sm:space-y-12 sm:flex-row h-[66rem] sm:h-[38rem] mx-5 mt-10 mb-10 sm:mb-20 pb-4">
      <div className="__welcome-image-box bg-[url('https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/07/image_welcome.png')] bg-no-repeat bg-contain bg-center relative flex justify-start items-center h-[26%] sm:h-[50vh] sm:w-full">
        <img
          className="absolute left-0 bottom-0 z-10 w-[50%] h-[76%]"
          src="https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/07/welcome-1-902x1024.jpg"
        />
        <img
          className="absolute bottom-0 left-[25%] z-[12] w-[50%]"
          src="https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/07/welcome-2-1024x705.jpg"
        />
      </div>
      <div className="__welcome-content-box h-[40rem] sm:h-[32rem] sm:w-[100%] flex flex-col justify-start pl-2 sm:pl-5">
        <div className="flex flex-col justify-around sm:space-y-4 h-[45%] sm:h-[30%] pt-4 sm:pt-0 pb-2">
          <div className="w-16 sm:w-20 bg-primary h-[0.2rem]" />
          <div className="text-[12px] font-normal sm:font-[500] tracking-wide welcome-description">
          Nâng cao sự thoải mái lên mức cao nhất
          </div>
          <div className="text-2xl sm:text-4xl font-[500] tracking-wide welcom-title">
          Chào mừng đến với Luvistay Hotel Resort
          </div>
        </div>
        <div className="flex flex-col justify-evenly h-[58rem] sm:h-[70%] pl-12">
          <p className="text-gray-500 text-[16px] font-normal leading-6 sm:leading-7">
          Khách sạn Luviana là lựa chọn phù hợp cho du khách đang tìm kiếm
            cho sự kết hợp giữa sự quyến rũ và một vị trí thuận tiện từ nơi đến
            Khám phá môi trường xung quanh.
          </p>
          <p className="text-gray-500 text-[16px] font-normal leading-6 sm:leading-7">
          Các phòng được sắp xếp trên tầng thứ nhất, thứ hai và thứ ba. Trên
            Tầng trên cùng, cũng có một sân thượng quyến rũ hoặc Solarium có sẵn
            Đối với việc sử dụng khách, từ nơi bạn có thể ngắm cảnh.
          </p>
          <div className="flex justify-center items-center w-44 h-14 text-sm text-white font-mono rounded-full bg-primary cursor-pointer">
            <a href="#" className="text-white welcome-description">
            ĐỌC THÊM
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
