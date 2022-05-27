import React, { useState } from "react";
import Slideshow from "../../Apartment/SlideShow";
import PrimaryButton from "../../PrimaryButton";
import { Button, MenuItem, Select } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./resultSearch.scss";
import {
  InformationResultOne,
  InformationResultTwo,
} from "../../InformationResult/InformationResult";
import { formatter } from "../../../helper/format";

const ResultSearch = ({ info }) => {
  const [listSelectedRoom, setListSelectedRoom] = useState([]);
  const [openApartment, setOpenApartment] = useState([]);

  const handleSelectedRoom = (item) => {
    if (listSelectedRoom.includes(item)) {
      const temp = [...listSelectedRoom].filter((selected) => selected != item);
      setListSelectedRoom(temp);
    } else {
      setListSelectedRoom([...listSelectedRoom, item]);
    }
  };
  const handleOpenApartment = (item) => {
    if (openApartment.includes(item)) {
      // const temp = [...openApartment].filter((selected) => selected != item);
      setOpenApartment([]);
    } else {
      // console.log("in:", [...openApartment]);
      setOpenApartment([...openApartment, item]);
    }
  };
  console.log(openApartment);
  return (
    <main className="result-search">
      <section className="result-search-container">
        <h3 className="result-search-container-title">{info.name}</h3>
        {/* <p className="result-search-description">
          Standard Single Rooms are designed in open-concept living area and
          have many facilities.
        </p> */}
        <section className="result-search-container-one">
          <section className="colum-one">
            <section className="result-search-img">
              <img src={info?.thumbnail} alt="" />
            </section>
          </section>
          <section className="colum-two">
            <div
              className="colum-two-description"
              dangerouslySetInnerHTML={{ __html: info?.description }}
            ></div>
          </section>
        </section>
      </section>
      <section className="list-room">
        <section
          className="list-room-header"
          onClick={() => handleOpenApartment(info._id)}
        >
          <p className="list-room-title">Danh sách phòng hiện có</p>
          {!openApartment.includes(info._id) ? (
            <FontAwesomeIcon icon="fa-solid fa-angle-up" />
          ) : (
            <FontAwesomeIcon icon="fa-solid fa-angle-down" />
          )}
        </section>
        {!openApartment.includes(info._id) ? (
          info.rooms.map((item, index) => {
            return (
              <section key={index} className="list-room-show">
                <section className="row-one">
                  <p>
                    {/* <span className="search-description">1 ×</span> */}
                    <span className="list-room-name">{item.name}</span>
                  </p>
                  <p className="list-room-price">
                    {formatter.format(item.price)}
                  </p>
                </section>
                <section className="row-one">
                  <p className="list-room-description">
                    Sức chứa: {item.capacity} người
                  </p>
                  <Button onClick={() => handleSelectedRoom(item._id)}>
                    {listSelectedRoom.includes(item._id) ? "Bỏ chọn" : "Chọn"}
                  </Button>
                </section>
              </section>
            );
          })
        ) : (
          <div></div>
        )}
      </section>
    </main>
  );
};

export default ResultSearch;
