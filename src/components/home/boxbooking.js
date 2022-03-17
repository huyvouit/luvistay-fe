import { MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import "./boxBooking.scss";

const BoxBooking = () => {
  return (
    <main className="boxbooking">
      <section className="boxbooking-section">
        <section className="boxbooking-section-input">
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
        <section className="boxbooking-section-search">Search</section>
      </section>
    </main>
  );
};

export default BoxBooking;
