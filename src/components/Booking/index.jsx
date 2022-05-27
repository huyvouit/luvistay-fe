import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MenuItem, Select, TextField } from "@mui/material";
import moment from "moment";

import PrimaryButton from "../PrimaryButton";
import { disablePastDate, handleCheckout } from "../../helper/minInput";

import "./booking.scss";
import getAllCityApi from "../../redux/Api/city";

const Booking = (props) => {
  const dispatch = useDispatch();

  const {
    detail,
    textButton,
    action,
    checkin,
    checkout,
    city,
    setCity,
    people,
    setCheckin,
    setCheckout,
    setPeople,
    notCity,
  } = props;

  const listCity = useSelector((state) => state.city);

  useEffect(() => {
    if (notCity) {
      return;
    }
    getAllCityApi(dispatch);
  }, []);
  return (
    <main className="booking-wrapper">
      {detail && (
        <>
          <p className="booking-price">
            {detail.price}
            <span> /per night</span>
          </p>
          <hr />
        </>
      )}
      <section className="booking-input">
        <section className="inputField">
          <p className="inputField-title">
            Check-in:<span>*</span>{" "}
          </p>
          <input
            // variant="outlined"
            type="date"
            className="textField"
            value={checkin}
            onChange={(event) => setCheckin(event.target.value)}
            min={disablePastDate()}
          />
        </section>
        <section className="inputField">
          <p className="inputField-title">
            Check-out:<span>*</span>{" "}
          </p>
          <input
            type="date"
            className="textField"
            value={checkout}
            onChange={(event) => setCheckout(event.target.value)}
            min={handleCheckout(checkin)}
          />
        </section>
        {!notCity && (
          <section className="inputField">
            <p className="inputField-title">
              Tỉnh/Thành phố:<span>*</span>{" "}
            </p>
            <Select
              defaultValue=""
              className="selectField"
              onChange={(event) => {
                setCity(event.target.value);
              }}
            >
              {listCity &&
                listCity.map((item, i) => (
                  <MenuItem value={item} key={i}>
                    {item}
                  </MenuItem>
                ))}
            </Select>
          </section>
        )}
        <section className="inputField">
          <p className="inputField-title">
            People:<span>*</span>{" "}
          </p>
          <Select
            defaultValue="1"
            className="selectField"
            onChange={(e) => setPeople(e.target.value)}
          >
            {[...Array(10)].map((x, i) => (
              <MenuItem value={i + 1} key={i}>
                {i + 1}
              </MenuItem>
            ))}
          </Select>
        </section>
      </section>
      <PrimaryButton title={textButton} action={action} />
    </main>
  );
};

export default Booking;
