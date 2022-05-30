import React, { useContext, useEffect, useState } from "react";
import {
  TextField,
  TextareaAutosize,
  Typography,
  CircularProgress,
} from "@mui/material";
import Radio from "@mui/material/Radio";

import PageHeader from "../../components/PageHeader";
import PrimaryButton from "../../components/PrimaryButton";
import "./checkout.scss";
import { Navigate, useLocation } from "react-router-dom";
import { APP_ROUTE } from "../../routes/app.routes";
import apartmentApi from "../../api/aparment_api";
import { calculateDate } from "../../helper/calculateDate";
import { formatter } from "../../helper/format";
import { AuthContext } from "../../hooks/contexts/auth_context";

const TablePrice = ({ room, body, index }) => {
  const [openPrice, setOpenPrice] = useState(false);
  return (
    <table>
      <colgroup style={{ width: "500px", backgroundColor: "white" }}></colgroup>
      <colgroup></colgroup>
      <tbody>
        <tr>
          <th
            onClick={() => setOpenPrice(!openPrice)}
            style={{ color: "#c1b086" }}
          >
            #{index} {room?.name}
          </th>
          <td>{formatter.format(room?.price)}</td>
        </tr>
        {openPrice && (
          <>
            <tr>
              <th>Số người tối đa</th>
              <td>{room?.capacity}</td>
            </tr>
            <tr>
              <th>Số ngày ở</th>
              <td>{calculateDate(body?.checkinDate, body?.checkoutDate)}</td>
            </tr>
          </>
        )}
        <tr style={{ backgroundColor: "#f4f4f4" }}>
          <th>Thành tiền</th>
          <td>
            {formatter.format(
              room?.price * calculateDate(body?.checkinDate, body?.checkoutDate)
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
};
const CheckoutPage = () => {
  const location = useLocation();
  console.log(location.state);
  const {
    authState: { authLoading, isAuthenticated, user },
  } = useContext(AuthContext);
  const [formUser, setFormUser] = useState({
    username: user?.username || "",
    email: user?.email || "",
    phone: user?.phone || "",
    note: "",
  });
  const [selectedValue, setSelectedValue] = React.useState("a");
  const [infoApartment, setInfoApartment] = useState(null);
  const [totalCost, setTotalCost] = useState(null);
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const fetchInfoApartment = async () => {
    try {
      const res = await apartmentApi.getApartmentById(
        location.state.listSelectedRoom.apartment.apartmentId
      );
      if (res.success) {
        setInfoApartment(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (location.state) {
      fetchInfoApartment();
    } else {
      return;
    }
  }, []);
  useEffect(() => {
    if (location.state) {
      let sum = 0;
      location.state.listSelectedRoom.listRoom.forEach((item, index) => {
        sum = sum + item.price;
      });
      setTotalCost(
        sum *
          calculateDate(
            location.state.body?.checkinDate,
            location.state.body?.checkoutDate
          )
      );
    }
  }, []);

  if (location.state && user) {
    return (
      <section style={{ textAlign: "center", padding: "20px 0" }}>
        <CircularProgress color="inherit" size={30} />;
      </section>
    );
  }
  console.log(location.state);
  return location.state && isAuthenticated ? (
    infoApartment ? (
      <main className="checkout-page">
        <PageHeader title="Booking Confirmation" />

        <section className="checkout-detail">
          <section className="checkout-content">
            <section className="checkout-content-date">
              <p className="checkout-title">Booking Details</p>
              <p className="checkout-key">
                Check in :{" "}
                <span>
                  <strong> {location.state.body.checkinDate}</strong>, from
                  11:00 am
                </span>
              </p>
              <p className="checkout-key">
                Check out :{" "}
                <span>
                  <strong>{location.state.body.checkoutDate}</strong>, from
                  10:00 am
                </span>
              </p>
            </section>
          </section>
          <section className="checkout-content">
            <section className="checkout-content-price">
              <p className="checkout-title">
                Thành tiền: {infoApartment?.name}
              </p>
              {location.state.listSelectedRoom.listRoom.map((item, index) => {
                return (
                  <TablePrice
                    key={index}
                    room={item}
                    body={location.state?.body}
                    index={index + 1}
                  />
                );
              })}
              <table>
                <colgroup
                  style={{ width: "500px", backgroundColor: "white" }}
                ></colgroup>
                <colgroup></colgroup>
                <tbody>
                  <tr style={{ backgroundColor: "#e4e4e4" }}>
                    <th>Tổng tiền</th>
                    <td>{formatter.format(totalCost)}</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </section>
          <section className="checkout-content">
            <section className="checkout-information">
              <p className="checkout-title">Thông tin khách hàng</p>
              <p className="checkout-required">
                {`Yêu cầu điền đầy đủ thông tin bởi : *`}
              </p>
              <section className="inputField">
                <p className="inputField-title">
                  Họ và tên:<span>*</span>{" "}
                </p>
                <TextField
                  variant="outlined"
                  className="textField"
                  value={formUser.username}
                  onChange={(e) =>
                    setFormUser({ ...formUser, username: e.target.value })
                  }
                />
              </section>
              <section className="inputField">
                <p className="inputField-title">
                  Email:<span>*</span>{" "}
                </p>
                <TextField
                  variant="outlined"
                  className="textField"
                  value={formUser.email}
                  onChange={(e) =>
                    setFormUser({ ...formUser, email: e.target.value })
                  }
                />
              </section>
              <section className="inputField">
                <p className="inputField-title">
                  Number Phone:<span>*</span>{" "}
                </p>
                <TextField
                  variant="outlined"
                  className="textField"
                  value={formUser.phone}
                  onChange={(e) =>
                    setFormUser({ ...formUser, phone: e.target.value })
                  }
                />
              </section>

              <section className="inputField">
                <p className="inputField-title">Note:</p>
                <TextareaAutosize
                  className="textField"
                  minRows={3}
                  value={formUser.note}
                  onChange={(e) =>
                    setFormUser({ ...formUser, note: e.target.value })
                  }
                />
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
                  <Typography className="payment-label">
                    Pay via Momo
                  </Typography>
                </section>
                <Typography>
                  Visa, MasterCard, Discover, or American Express. Use the card
                  number 5555555555554444 with CVC 123 and a valid expiration
                  date to test a payment.
                </Typography>
              </section>
            </section>
            <section style={{ width: "200px", marginTop: 30 }}>
              <PrimaryButton title="Book Now" />
            </section>
          </section>
        </section>
      </main>
    ) : (
      <section style={{ textAlign: "center", padding: "20px 0" }}>
        <CircularProgress color="inherit" size={30} />
      </section>
    )
  ) : (
    <Navigate to={APP_ROUTE.HOME} />
  );
};

export default CheckoutPage;
