import React from "react";

import { MenuItem, Select, TextField } from "@mui/material";
import PrimaryButton from "../PrimaryButton";

import "./booking.scss";

const Booking = (props) => {
  const { detail, textButton, action } = props;

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
          <TextField variant="outlined" type="date" className="textField" />
        </section>
        <section className="inputField">
          <p className="inputField-title">
            Check-out:<span>*</span>{" "}
          </p>
          <TextField variant="outlined" type="date" className="textField" />
        </section>
        <section className="inputField">
          <p className="inputField-title">
            Adults:<span>*</span>{" "}
          </p>
          <Select defaultValue="1" className="selectField">
            {[...Array(10)].map((x, i) => (
              <MenuItem value={i + 1} key={i}>
                {i + 1}
              </MenuItem>
            ))}
          </Select>
        </section>
        <section className="inputField">
          <p className="inputField-title">
            Children:<span>*</span>{" "}
          </p>
          <Select defaultValue="0" className="selectField">
            {[...Array(10)].map((x, i) => (
              <MenuItem value={i} key={i}>
                {i}
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
