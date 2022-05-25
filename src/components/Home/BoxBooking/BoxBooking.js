import React, { useEffect, useState } from "react";
import { MenuItem, Select, TextField } from "@mui/material";

import apartmentApi from "../../../api/aparment_api";
import { disablePastDate, handleCheckout } from "../../../helper/minInput";
import { formatDate } from "../../../helper/format";
import { useAppDispatch } from "../../../redux/store";
import "./boxBooking.scss";
import { getApartmentBySearchApi } from "../../../redux/Api/apartment";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { APP_ROUTE } from "../../../routes/app.routes";

const BoxBooking = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loading.loading);
  const navigate = useNavigate();
  const [listCity, setListCity] = useState([]);
  const [formSearch, setFormSearch] = useState({
    checkinDate: "",
    checkoutDate: "",
    people: 1,
    city: "",
  });

  const fetchCity = async () => {
    try {
      const res = await apartmentApi.getCityOfApartment();
      if (res.success) {
        setListCity(res.data);
      } else {
        setListCity([]);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleNavigate = () => {
    navigate(APP_ROUTE.SEARCH);
  };
  const handleSubmitSearch = async () => {
    const body = {
      checkinDate: formatDate(formSearch.checkinDate),
      checkoutDate: formatDate(formSearch.checkoutDate),
      city: formSearch.city,
      people: formSearch.people,
    };
    getApartmentBySearchApi(dispatch, body, handleNavigate);
  };
  useEffect(() => {
    fetchCity();
  }, []);

  return (
    <main className="boxbooking">
      <section className="boxbooking-section">
        <section className="boxbooking-section-input">
          <section className="inputField">
            <p className="inputField-title">
              Nhận phòng:<span>*</span>{" "}
            </p>
            <input
              type="date"
              className="textField"
              min={disablePastDate()}
              onChange={(event) => {
                setFormSearch({
                  ...formSearch,
                  checkinDate: event.target.value,
                });
              }}
            />
          </section>
          <section className="inputField">
            <p className="inputField-title">
              Trả phòng:<span>*</span>{" "}
            </p>
            <input
              type="date"
              className="textField"
              min={handleCheckout(formSearch.checkinDate)}
              onChange={(event) => {
                setFormSearch({
                  ...formSearch,
                  checkoutDate: event.target.value,
                });
              }}
            />
          </section>
          <section className="inputField">
            <p className="inputField-title">
              Tỉnh/Thành phố:<span>*</span>{" "}
            </p>
            <Select
              defaultValue=""
              className="selectField"
              onChange={(event) => {
                setFormSearch({
                  ...formSearch,
                  city: event.target.value,
                });
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
          <section className="inputField">
            <p className="inputField-title">
              Số người:<span>*</span>{" "}
            </p>
            <input
              type="number"
              defaultValue={1}
              className="textField"
              min={1}
              onChange={(event) => {
                setFormSearch({
                  ...formSearch,
                  people: Number(event.target.value),
                });
              }}
            />
          </section>
        </section>
        <section
          className="boxbooking-section-search"
          onClick={() => handleSubmitSearch(formSearch)}
        >
          Search
        </section>
      </section>
    </main>
  );
};

export default BoxBooking;
