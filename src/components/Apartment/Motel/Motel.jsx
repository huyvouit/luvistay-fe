import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PrimaryButton from "../../PrimaryButton";
import "./motel.scss";
import Slideshow from "../SlideShow";
import {
  InformationResultOne,
  InformationResultTwo,
} from "../../InformationResult/InformationResult";
import { flexbox } from "@mui/system";
import { formatter } from "../../../helper/format";
import { useNavigate } from "react-router-dom";
import { APP_ROUTE } from "../../../routes/app.routes";

const Motel = ({ room, thumbnail }) => {
  const navigate = useNavigate();
  return (
    <main className="motel">
      <section className="motel-container">
        <section className="motel-colum-one">
          <img src={thumbnail} alt="" />
        </section>
        <section className="motel-colum-two">
          <section className="motel-colum-two-container">
            <section className="colum-one">
              <h2 className="colum-one-title">{room?.name}</h2>

              <section className="info-room-detail">
                <InformationResultOne
                  title={`${room?.capacity} người`}
                  icon="fa-solid fa-person"
                />
                <InformationResultOne
                  title={room?.rating}
                  icon="fa-solid fa-eye"
                />
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
                  title={formatter.format(room?.price)}
                  style={{ color: "black", fontWeight: 600 }}
                />
              </section>
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
