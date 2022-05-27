import React, { useState } from "react";
import Booking from "../Booking";
import headerStar from "../../assets/images/header_star.png";
import PrimaryButton from "../PrimaryButton";
import LogoPayment from "../../assets/images/payments.png";
import "./search.scss";
import SpecialOffer from "./SpecialOffer/SpecialOffer";
import ResultSearch from "./ResultSearch/ResultSearch";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getApartmentBySearchApi } from "../../redux/Api/apartment";
import { formatDate } from "../../helper/format";

const Search = () => {
  const dispatch = useDispatch();
  const searchApartment = useSelector((state) => state.apartment.searchRoom);
  const isLoading = useSelector((state) => state.loading.loading);
  console.log(searchApartment);

  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [city, setCity] = useState("");
  const [people, setPeople] = useState(1);

  const handleSearchRoom = () => {
    const body = {
      checkinDate: formatDate(checkin),
      checkoutDate: formatDate(checkout),
      people: people,
      city: city,
    };
    console.log(body);
    getApartmentBySearchApi(dispatch, body);
  };

  return (
    <main className="search">
      <section className="search-container">
        <section className="search-colum-one">
          <section className="pageherder">
            <section className="page-header-star">
              <img
                className="img"
                src={headerStar}
                alt="header star"
                title="five star"
              />
            </section>
            <section className="page-header-title">
              <h1 className="title">Search Results</h1>
            </section>
          </section>
          {isLoading ? (
            <div>Loading...</div>
          ) : searchApartment ? (
            <>
              <p className="search-description">
                Lựa chon các phòng có sẵn theo từng căn hộ.
              </p>
              <section>
                {searchApartment.length >= 2 ? (
                  searchApartment.map((item, index) => {
                    return <ResultSearch key={index} info={item} />;
                  })
                ) : (
                  <ResultSearch info={searchApartment} />
                )}
              </section>
            </>
          ) : (
            <div>Chưa có thông tin tim kiếm</div>
          )}
        </section>
        <section className="search-colum-two">
          <section className="box-search">
            <Booking
              textButton="Search"
              checkin={checkin}
              setCheckin={setCheckin}
              checkout={checkout}
              setCheckout={setCheckout}
              people={people}
              setPeople={setPeople}
              city={city}
              setCity={setCity}
              action={handleSearchRoom}
            />
          </section>
          <section className="special-offers">
            <h4 className="special-offers-title">Special Offers</h4>
            <SpecialOffer />
            <SpecialOffer />
            <SpecialOffer />
          </section>
          <section className="box-about">
            <h4 className="box-about-title">Terms & Conditions</h4>
            <p className="search-description box-about-descript">
              We are one of the most recognized happy vacation makers in Greece
              – we provide a wide range of great offers for any occasion since
              2015.
            </p>
            <p className="search-description box-about-descript">
              We accept payments in any way convenient for you
            </p>
            <img className="box-about-img" src={LogoPayment} />
          </section>
        </section>
      </section>
    </main>
  );
};

export default Search;
