import React, { useState } from "react";
import moment from "moment";
import { MenuItem, Select, TextField } from "@mui/material";
import PrimaryButton from "../PrimaryButton";

import "./booking.scss";

const Booking = (props) => {
  const {
    detail,
    textButton,
    action,
    checkin,
    checkout,
    people,
    setCheckin,
    setCheckout,
    setPeople,
  } = props;
  // const [checkin, setCheckin] = useState("");
  // const [checkout, setCheckout] = useState("");
  // const [people, setPeople] = useState(null);

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
          <TextField
            variant="outlined"
            type="date"
            className="textField"
            value={checkin}
            onChange={(event) => setCheckin(event.target.value)}
          />
        </section>
        <section className="inputField">
          <p className="inputField-title">
            Check-out:<span>*</span>{" "}
          </p>
          <TextField
            variant="outlined"
            type="date"
            className="textField"
            value={checkout}
            onChange={(event) => setCheckout(event.target.value)}
          />
        </section>
        <section className="inputField">
          <p className="inputField-title">
            People:<span>*</span>{" "}
          </p>
          <Select defaultValue="1" className="selectField">
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
