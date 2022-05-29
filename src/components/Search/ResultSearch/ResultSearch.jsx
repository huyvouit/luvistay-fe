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

const ResultSearch = ({ info, listSelectedRoom, setListSelectedRoom }) => {
  const [openApartment, setOpenApartment] = useState([]);

  const handleSelectedRoom = (apartmentId, item) => {
    if (apartmentId === listSelectedRoom.apartmentId) {
      console.log("đã chọn apartment này");
      if (listSelectedRoom.listRoom.includes(item)) {
        console.log(
          "đã chọn room cua apartment này",
          listSelectedRoom.listRoom?.length
        );
        if (listSelectedRoom.listRoom?.length > 1) {
          const temp = listSelectedRoom?.listRoom?.filter(
            (selected) => selected !== item
          );
          console.log("temp:", temp);
          if (temp.length === 0) {
            setListSelectedRoom({
              ...listSelectedRoom,
              apartmentId: "",
              listRoom: [],
            });
          } else {
            setListSelectedRoom({
              ...listSelectedRoom,

              listRoom: temp,
            });
          }
        } else {
          setListSelectedRoom({
            ...listSelectedRoom,
            apartmentId: "",
            listRoom: [],
          });
        }
      } else {
        console.log("chon thêm room khác của ap nay");
        setListSelectedRoom({
          ...listSelectedRoom,
          listRoom: [...listSelectedRoom.listRoom, item],
        });
      }
    } else {
      console.log("chưa chọn apartment nào");
      setListSelectedRoom({
        ...listSelectedRoom,
        apartmentId,
        listRoom: [item],
      });
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
  // console.log(listSelectedRoom);
  return (
    <main className="result-search">
      <section className="result-search-container">
        <h3 className="result-search-container-title">{info.name}</h3>

        <section className="result-search-container-one">
          <section className="colum-one">
            <section className="result-search-img">
              <img src={info?.thumbnail} alt="" />
            </section>
            {/* <section style={{ display: "flex", justifyContent: "center" }}>
              <PrimaryButton title="Đặt phòng" />
            </section> */}
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
          <>
            {info.rooms.map((item, index) => {
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
                    <Button
                      onClick={() => handleSelectedRoom(info._id, item._id)}
                    >
                      {listSelectedRoom.listRoom?.includes(item._id)
                        ? "Bỏ chọn"
                        : "Chọn"}
                    </Button>
                  </section>
                </section>
              );
            })}
            {listSelectedRoom.apartmentId === info._id && (
              <section style={{ display: "flex", justifyContent: "center" }}>
                <PrimaryButton title="Đặt phòng" />
              </section>
            )}
          </>
        ) : (
          <div></div>
        )}
      </section>
    </main>
  );
};

export default ResultSearch;
