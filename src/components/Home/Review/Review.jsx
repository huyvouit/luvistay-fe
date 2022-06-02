import React, { useState, useEffect } from "react";
import PrimaryButton from "../../PrimaryButton";
import { BANNER_IMAGE } from "../constants";
import "./review.scss";
import icon_left from "../../../assets/icons/arrow-left.svg";
import icon_right from "../../../assets/icons/arrow-right.svg";

import apartmentApi from "../../../api/aparment_api";
import { APP_ROUTE } from "../../../routes/app.routes";
import { useNavigate } from "react-router-dom";

const ReviewOne = ({}) => {
  const [apartments, setApartments] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        const res = await apartmentApi.getAllApartment({ currentPage: 5 });
        if (res.success) {
          setApartments(res.data.apartment);
        }
      } catch (error) {
        console.log("error to get apartment list", error);
      }
    })();
  }, []);

  return (
    <div className="review-one">
      <div className="review-one-row-one">
        <div className="colum-one">
          <p className="highlinght"></p>
          <p className="content">Nâng cao sự thoải mái lên mức cao nhất</p>
          <h1 className="title">Các căn hộ</h1>
        </div>
        <div className="colum-two">
          <PrimaryButton
            title="xem tất cả"
            action={() => navigate(APP_ROUTE.APARTMENT)}
          />
        </div>
      </div>
      <div className="review-one-row-two">
        {apartments?.slice(0, 3).map((item, index) => {
          return (
            <div className="review-image" key={index}>
              <div className="row-one">
                <img className="image" src={item?.thumbnail} alt="" />
              </div>
              <div className="row-two">
                <h4
                  className="name"
                  onClick={() => navigate(`/apartment/${item._id}`)}
                >
                  {item?.name}
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Review two
const Slideshow = ({ imgs }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, []);

  const next = () => {
    if (index + 3 === imgs.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 4);
      console.log("hahahaha");
      console.log(index);
    } else {
      setIndex(index - 1);
      console.log("vlvlvlvl");
      console.log(index);
    }
  };

  return (
    <div className="slideshow">
      <img className="mainImg main-img-one " src={imgs[index]} />
      <img className="mainImg main-img-two" src={imgs[index + 1]} />
      <img className="mainImg main-img-three" src={imgs[index + 2]} />
      <img className="mainImg main-img-four" src={imgs[index + 3]} />
      <div className="actions">
        <button onClick={prev}>
          <img src={icon_left} />
        </button>
        <button onClick={next}>
          <img src={icon_right} />
        </button>
      </div>
    </div>
  );
};

const ReviewTwo = ({}) => {
  return (
    <div className="review-one">
      <div className="review-one-row-one">
        <div className="colum-one">
          <p className="highlinght"></p>
          <p className="content">
            Chào mừng bạn đến với bộ sưu tập ảnh của chúng tôi
          </p>
          <h1 className="title">Thư viện ảnh của khách sạn của chúng tôi</h1>
        </div>
        <div className="colum-two">
          <PrimaryButton title="Xem bộ sưu tập" />
        </div>
      </div>
      <div className="slider">
        <Slideshow
          imgs={[
            "https://images.unsplash.com/photo-1585255318859-f5c15f4cffe9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
            "https://images.unsplash.com/photo-1584226761916-3fd67ab5ac3a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
            "https://images.unsplash.com/photo-1585179292338-45ba1f62f082?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
            "https://images.unsplash.com/photo-1584753987666-ead137ec0614?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
            "https://images.unsplash.com/photo-1584691267914-91c0bee55964?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
            "https://images.unsplash.com/photo-1585084335487-f653d0859c14?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
            "https://images.unsplash.com/photo-1583217874534-581393fd5325?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
          ]}
        />
      </div>
    </div>
  );
};

export { ReviewOne, ReviewTwo };
