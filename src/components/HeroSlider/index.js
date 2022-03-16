import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Thumbs, EffectFade } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";

// import { Button } from "@mui/material";
import "./heroSlider.scss";

const items = [
  {
    type: "Authentic",
    title: "Hello.Salut.Hola",
    description:
      "Imagine the feeling of a home designed to fit your lifestyle and reflect your personality. The benefits are clear. When you combine a pleasing colour scheme; free-flowing and functional space; perfect mood lighting and clever storage, you get pleasurable home-experiences and a happier life.",
    imageUrl:
      "https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/06/standart-single-room-992x992.jpg",
  },
  {
    type: "Timeless",
    title: "Interior designs",
    description:
      "Konsept was born in Vietnam in 2021, and is today a premium retail lifestyle brand. We design, produce and sell a range of contemporary Danish design furniture , accessories and lighting for the living room, dining room, bedroom, home-office and outdoor spaces.",
    imageUrl:
      "https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/06/superior-double-room-992x992.jpg",
  },
  {
    type: "Tailored",
    title: "Classic interiors",
    description:
      "Today, the company continues to address new lifestyles with the creation of complete, harmonious interior decor solutions that embody the best contemporary design for all areas of the home.",
    imageUrl:
      "https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/06/classic-double-room-992x992.jpg",
  },
  {
    title: "Made with love",
    description:
      "Imagine the feeling of a home designed to fit your lifestyle and reflect your personality. The benefits are clear. When you combine a pleasing colour scheme; free-flowing and functional space; perfect mood lighting and clever storage, you get pleasurable home-experiences and a happier life.",
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
        className="mySwiper2"
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
          {/* <div className="read-more">
            <button>Read more</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};
