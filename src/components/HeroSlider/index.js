import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Thumbs, EffectFade } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";

import OutlinedButton from "../OutlinedButton";

import "./heroSlider.scss";

const items = [
  {
    type: "Authentic",
    title: "Xin chào.Salut.Hola",
    description:
      "Hãy tưởng tượng cảm giác của một ngôi nhà được thiết kế để phù hợp với lối sống của bạn và phản ánh tính cách của bạn. Những lợi ích là rõ ràng. Khi bạn kết hợp một bảng màu dễ chịu; Không gian chảy tự do và chức năng; Ánh sáng tâm trạng hoàn hảo và lưu trữ thông minh, bạn có được những trải nghiệm gia đình thú vị và một cuộc sống hạnh phúc hơn.",
    imageUrl:
      "https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/06/standart-single-room-992x992.jpg",
  },
  {
    type: "Timeless",
    title: "Thiết kế nội thất",
    description:
      "Konsept được sinh ra tại Việt Nam vào năm 2021, và ngày nay là một thương hiệu phong cách sống bán lẻ cao cấp. Chúng tôi thiết kế, sản xuất và bán một loạt các đồ nội thất thiết kế đương đại của Đan Mạch, phụ kiện và ánh sáng cho phòng khách, phòng ăn, phòng ngủ, văn phòng tại nhà và không gian ngoài trời.",
    imageUrl:
      "https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/06/superior-double-room-992x992.jpg",
  },
  {
    type: "Tailored",
    title: "Nội thất cổ điển",
    description:
      "Ngày nay, công ty tiếp tục giải quyết những lối sống mới với việc tạo ra các giải pháp trang trí nội thất hoàn chỉnh, hài hòa thể hiện thiết kế hiện đại tốt nhất cho tất cả các khu vực của ngôi nhà.",
    imageUrl:
      "https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/06/classic-double-room-992x992.jpg",
  },
  {
    title: "Được trang trí tâm huyết",
    description:
      "Hãy tưởng tượng cảm giác của một ngôi nhà được thiết kế để phù hợp với lối sống của bạn và phản ánh tính cách của bạn. Những lợi ích là rõ ràng. Khi bạn kết hợp một bảng màu dễ chịu; Không gian chảy tự do và chức năng; Ánh sáng tâm trạng hoàn hảo và lưu trữ thông minh, bạn có được những trải nghiệm gia đình thú vị và một cuộc sống hạnh phúc hơn.",
    imageUrl:
      "https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/06/comfort-triple-room-1170x780.jpg",
  },
];

const images = [
  "https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/06/standart-single-room-992x992.jpg",
  "https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/06/superior-double-room-992x992.jpg",
  "https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/06/classic-double-room-992x992.jpg",
  "https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/06/comfort-triple-room-1170x780.jpg",
];
export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="hero-slider">
      <Swiper
        loop={true}
        spaceBetween={0}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Autoplay, EffectFade, Thumbs]}
        className="main-swiper"
        autoplay={{ delay: 2000 }}
        effect={"fade"}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <HeroSliderItem data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <section className="thumbs">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className="thumbs-swiper"
        >
          {images.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={item} alt="" className="img-navigation" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </section>
  );
}

const HeroSliderItem = ({ data }) => {
  // const history = useHistory()

  return (
    <div
      className={`hero-slider-item`}
      style={{ backgroundImage: `url(${data.imageUrl})` }}
    >
      <div className="hero-slider-item-content ">
        <div className="hero-slider-item-content-info">
          <h2 className="title">{data.title}</h2>
          <div className="description">{data.description}</div>
          <div className="read-more">
            <OutlinedButton title="Đọc thêm" />
          </div>
        </div>
      </div>
    </div>
  );
};
