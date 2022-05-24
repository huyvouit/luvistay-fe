import React from "react";

import { MenuItem, Select, TextField } from "@mui/material";

import "./boxBooking.scss";

const BoxBooking = () => {
  return (
    <main className="boxbooking">
      <section className="boxbooking-section">
        <section className="boxbooking-section-input">
          <section className="inputField">
            <p className="inputField-title">
              Nhận phòng:<span>*</span>{" "}
            </p>
            <TextField variant="outlined" type="date" className="textField" />
          </section>
          <section className="inputField">
            <p className="inputField-title">
              Trả phòng:<span>*</span>{" "}
            </p>
            <TextField variant="outlined" type="date" className="textField" />
          </section>
          <section className="inputField">
            <p className="inputField-title">
              Thành phố:<span>*</span>{" "}
            </p>
            <Select defaultValue="1" className="selectField">
              {[...Array(20)].map((x, i) => (
                <MenuItem value={i + 1} key={i}>
                  {i + 1}
                </MenuItem>
              ))}
            </Select>
          </section>
          <section className="inputField">
            <p className="inputField-title">
              Số người:<span>*</span>{" "}
            </p>
            <TextField
              variant="outlined"
              type="number"
              defaultValue={1}
              className="textField"
              InputProps={{
                inputProps: {
                  min: 1,
                },
              }}
            />
          </section>
        </section>
        <section className="boxbooking-section-search">Search</section>
      </section>
    </main>
  );
};

export default BoxBooking;
