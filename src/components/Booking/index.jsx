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

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  const handleCheckout = (checkin) => {
    if (checkin !== "") {
      const newArr = checkin.split("-"); // ["29", "1", "2016"]
      const today = new Date(
        parseInt(newArr[0]),
        parseInt(newArr[1]) - 1,
        parseInt(newArr[2])
      );
      const dd = String(today.getDate() + 1).padStart(2, "0");
      const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      const yyyy = today.getFullYear();
      return yyyy + "-" + mm + "-" + dd;
    } else {
      console.log("run");
      return disablePastDate();
    }
  };
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
        <section className="inputField">
          <p className="inputField-title">
            Tỉnh/Thành phố:<span>*</span>{" "}
          </p>
          <input
            type="date"
            className="textField"
            // value={city}
            onChange={(event) => setCheckout(event.target.value)}
          />
        </section>
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
