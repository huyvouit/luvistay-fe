import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PrimaryButton from "../../PrimaryButton";
import "./hotel.scss";
import Slideshow from "../SlideShow";
import {
  InformationResultOne,
  InformationResultTwo,
} from "../../InformationResult/InformationResult";

const HotelOne = ({ item }) => {
  return (
    <main className="hotel-one">
      <section className="hotel-one-container">
        <section className="hotel-one-colum-one">
          {item && <Slideshow imgs={item?.pictures.slice(0, 5)} />}
        </section>
        <section className="hotel-one-colum-two">
          <section className="hotel-one-colum-two-container">
            <p className="colum-one-highlight"></p>
            <h2 className="colum-one-title">{item?.name}</h2>
            <div
              className="colum-one-description"
              dangerouslySetInnerHTML={{ __html: item?.description }}
            ></div>
            {/* <InformationResultOne title="2" icon="fa-solid fa-person" />
            <InformationResultOne title="beach" icon="fa-solid fa-eye" />
            <InformationResultOne title="20m²" icon="fa-solid fa-expand" />
            <InformationResultOne title="queen bed" icon="fa-solid fa-bed" />
            <InformationResultTwo
              icon="fa-solid fa-bookmark"
              description={["single"]}
            />
            <InformationResultTwo
              icon="fa-solid fa-star"
              description={[
                "air-conditioning",
                "free wi-fi",
                "hairdryer",
                "in-room safety",
                "laundry",
                "minibar",
                "telephone",
              ]}
            /> */}
            <p className="colum-one-price">
              <span className="colum-one-price-one">$119</span>
              <span className="colum-one-price-two">/ per night</span>
            </p>
            <section className="colum-one-responsive-btn">
              <section className="btn-primary">
                <PrimaryButton title="BOOK" />
              </section>
              <section className="outlined-button">
                <p className="outlined-button-title">VIEW DETAILS</p>
              </section>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
};

const HotelTwo = ({ item }) => {
  return (
    <main className="hotel-two">
      <section className="hotel-two-container">
        <section className="hotel-two-colum-one">
          {item && <Slideshow imgs={item?.pictures.slice(0, 5)} />}
        </section>
        <section className="hotel-two-colum-two">
          <section className="hotel-two-colum-two-container">
            <p className="colum-one-highlight"></p>
            <h2 className="colum-one-title">{item?.name}</h2>
            <div
              className="colum-one-description"
              dangerouslySetInnerHTML={{ __html: item?.description }}
            ></div>

            <p className="colum-one-price">
              <span className="colum-one-price-one">$119</span>
              <span className="colum-one-price-two">/ per night</span>
            </p>
            <section className="colum-one-responsive-btn">
              <section className="btn-primary">
                <PrimaryButton title="BOOK" />
              </section>
              <section className="outlined-button">
                <p className="outlined-button-title">VIEW DETAILS</p>
              </section>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
};

export { HotelOne, HotelTwo };
