import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PrimaryButton from "../../PrimaryButton";
import "./motel.scss";
import Slideshow from "../SlideShow";
import {
  InformationResultOne,
  InformationResultTwo,
} from "../../InformationResult/InformationResult";

const Motel = ({ room }) => {
  return (
    <main className="motel">
      <section className="motel-container">
        <section className="motel-colum-one">
          <img src={room?.thumbnail} alt="" />
        </section>
        <section className="motel-colum-two">
          <section className="motel-colum-two-container">
            <section className="colum-one">
              <h2 className="colum-one-title">{room?.name}</h2>
              {/* <p className="colum-one-description">
                Standard Single Rooms are designed in open-concept living area
                and have many facilities.
              </p> */}
              <InformationResultOne
                title={room?.capacity}
                icon="fa-solid fa-person"
              />
              <InformationResultOne title="beach" icon="fa-solid fa-eye" />
              <InformationResultOne
                title={`${room?.square} m²`}
                icon="fa-solid fa-expand"
              />
              <InformationResultOne
                title={room?.bedName}
                icon="fa-solid fa-bed"
              />
              <InformationResultOne
                icon="fa-solid fa-bookmark"
                title={room?.price}
              />
              {/* <InformationResultTwo
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
            </section>
          </section>
        </section>
      </section>
    </main>
  );
};

export default Motel;
