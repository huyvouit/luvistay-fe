import React, { useState } from "react";
import {
  MenuItem,
  Select,
  TextField,
  TextareaAutosize,
  Stack,
  Typography,
} from "@mui/material";
import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";
import PageHeader from "../../components/PageHeader";
import PrimaryButton from "../../components/PrimaryButton";
import "./checkout.scss";
const CheckoutPage = () => {
  const [openPrice, setOpenPrice] = useState(false);
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
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
        </section>
        <section className="checkout-content">
          <section className="checkout-content-price">
            <p className="checkout-title">Price Breakdown</p>
            <table>
              <colgroup
                style={{ width: "500px", backgroundColor: "white" }}
              ></colgroup>
              <colgroup></colgroup>
              <tr>
                <th onClick={() => setOpenPrice(!openPrice)}>
                  #1 Standard Single Room
                </th>
                <td>$129</td>
              </tr>
              {openPrice && (
                <>
                  <tr>
                    <th>People</th>
                    <td>7</td>
                  </tr>
                  <tr>
                    <th>Nights</th>
                    <td>2</td>
                  </tr>
                </>
              )}
              <tr style={{ backgroundColor: "#e4e4e4" }}>
                <th>Total</th>
                <td>129000 VND</td>
              </tr>
            </table>
            <table>
              <colgroup
                style={{ width: "500px", backgroundColor: "white" }}
              ></colgroup>
              <colgroup></colgroup>
              <tr>
                <th onClick={() => setOpenPrice(!openPrice)}>
                  #1 Standard Single Room
                </th>
                <td>$129</td>
              </tr>
              {openPrice && (
                <>
                  <tr>
                    <th>People</th>
                    <td>7</td>
                  </tr>
                  <tr>
                    <th>Nights</th>
                    <td>2</td>
                  </tr>
                </>
              )}
              <tr style={{ backgroundColor: "#e4e4e4" }}>
                <th>Total</th>
                <td>129000 VND</td>
              </tr>
            </table>
          </section>
        </section>
        <section className="checkout-content">
          <section className="checkout-information">
            <p className="checkout-title">Your Information</p>
            <p className="checkout-required">
              {`Required fields are followed by: *`}
            </p>
            <section className="inputField">
              <p className="inputField-title">
                Full Name:<span>*</span>{" "}
              </p>
              <TextField variant="outlined" className="textField" />
            </section>
            <section className="inputField">
              <p className="inputField-title">
                Email:<span>*</span>{" "}
              </p>
              <TextField variant="outlined" className="textField" />
            </section>
            <section className="inputField">
              <p className="inputField-title">
                Number Phone:<span>*</span>{" "}
              </p>
              <TextField variant="outlined" className="textField" />
            </section>
            <section className="inputField">
              <p className="inputField-title">
                Personal ID:<span>*</span>{" "}
              </p>
              <TextField variant="outlined" className="textField" />
            </section>
            <section className="inputField">
              <p className="inputField-title">Note:</p>
              <TextareaAutosize className="textField" minRows={3} />
            </section>
          </section>
        </section>
        <section className="checkout-content">
          <section className="checkout-payment">
            <p className="checkout-title">Payment</p>
            <section className="payment-selection">
              <section className="payment-item">
                <Radio
                  checked={selectedValue === "a"}
                  onChange={handleChange}
                  value="a"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
                <Typography className="payment-label">
                  Pay on Arrival
                </Typography>
              </section>
              <Typography>Pay with cash on arrival.</Typography>
            </section>
            <section className="payment-selection">
              <section className="payment-item">
                <Radio
                  checked={selectedValue === "b"}
                  onChange={handleChange}
                  value="b"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "B" }}
                />
                <Typography className="payment-label">Pay via Momo</Typography>
              </section>
              <Typography>
                Visa, MasterCard, Discover, or American Express. Use the card
                number 5555555555554444 with CVC 123 and a valid expiration date
                to test a payment.
              </Typography>
            </section>
          </section>
          <section style={{ width: "200px", marginTop: 30 }}>
            <PrimaryButton title="Book Now" />
          </section>
        </section>
      </section>
    </main>
  );
};

export default CheckoutPage;
