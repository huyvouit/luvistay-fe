import React, { useState } from "react";
import { MenuItem, Select, TextField } from "@mui/material";

import PageHeader from "../../components/PageHeader";

import "./checkout.scss";
const CheckoutPage = () => {
  const [openPrice, setOpenPrice] = useState(false);
  return (
    <main className="checkout-page">
      <PageHeader title="Booking Confirmation" />

      <section className="checkout-detail">
        <section className="checkout-content">
          <section className="checkout-content-date">
            <p className="checkout-title">Booking Details</p>
            <p className="checkout-key">
              Check in :{" "}
              <span>
                <strong>April 15, 2022 </strong>, from 11:00 am
              </span>
            </p>
            <p className="checkout-key">
              Check out :{" "}
              <span>
                <strong>April 16, 2022 </strong>, from 10:00 am
              </span>
            </p>
          </section>
          <section className="checkout-accommodation">
            <p className="checkout-title">Accommodation #1</p>
            <p className="checkout-key">
              Accommodation Type : <span>Standard Single Room</span>
            </p>
            <section className="inputField">
              <p className="inputField-title">
                Adults:<span>*</span>{" "}
              </p>
              <Select defaultValue="1" className="selectField">
                {[...Array(2)].map((x, i) => (
                  <MenuItem value={i + 1} key={i}>
                    {i + 1}
                  </MenuItem>
                ))}
              </Select>
            </section>
            <section className="inputField">
              <p className="inputField-title">Full Guest Name</p>
              <TextField variant="outlined" className="textField" />
            </section>
          </section>
        </section>
        <section className="checkout-content">
          <section className="checkout-content-price">
            <p className="checkout-title">Price Breakdown</p>
            <table>
              <colgroup
                style={{ width: "500px", backgroundColor: "white" }}
              ></colgroup>
              <colgroup style={{ backgroundColor: "#fcfcfc" }}></colgroup>
              <tr>
                <th onClick={() => setOpenPrice(!openPrice)}>
                  #1 Standard Single Room
                </th>
                <td>$129</td>
              </tr>
              {openPrice && (
                <tr>
                  <th>đ</th>
                  <td>đ</td>
                </tr>
              )}
            </table>
          </section>
          <section className="checkout-accommodation">
            <p className="checkout-title">Accommodation #1</p>
            <p className="checkout-key">
              Accommodation Type : <span>Standard Single Room</span>
            </p>
            <section className="inputField">
              <p className="inputField-title">
                Adults:<span>*</span>{" "}
              </p>
              <Select defaultValue="1" className="selectField">
                {[...Array(2)].map((x, i) => (
                  <MenuItem value={i + 1} key={i}>
                    {i + 1}
                  </MenuItem>
                ))}
              </Select>
            </section>
            <section className="inputField">
              <p className="inputField-title">
                Check-in:<span>*</span>{" "}
              </p>
              <TextField variant="outlined" className="textField" />
            </section>
          </section>
        </section>
      </section>
    </main>
  );
};

export default CheckoutPage;
