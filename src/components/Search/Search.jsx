import React, { useState } from "react";
import Booking from "../Booking";
import headerStar from "../../assets/images/header_star.png";
import PrimaryButton from "../PrimaryButton";
import LogoPayment from "../../assets/images/payments.png";
import "./search.scss";
import SpecialOffer from "./SpecialOffer/SpecialOffer";
import ResultSearch from "./ResultSearch/ResultSearch";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getApartmentBySearchApi } from "../../redux/Api/apartment";
import { formatDate } from "../../helper/format";
import { APP_ROUTE } from "../../routes/app.routes";

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const searchApartment = useSelector((state) => state.apartment.searchRoom);
  const isLoading = useSelector((state) => state.loading.loading);

  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [city, setCity] = useState("");
  const [people, setPeople] = useState(1);
  const [listSelectedRoom, setListSelectedRoom] = useState({
    apartment: {
      apartmentId: "",
      owner: "",
    },
    listRoom: [],
  });

  const handleSearchRoom = () => {
    const body = {
      checkinDate: location.state?.infoDate?.checkinDate || formatDate(checkin),
      checkoutDate:
        location.state?.infoDate?.checkoutDate || formatDate(checkout),
      people: location.state?.infoDate?.people || people,
      city: city,
    };

    getApartmentBySearchApi(dispatch, body, () =>
      navigate(APP_ROUTE.SEARCH, { state: { infoDate: body } })
    );
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
              <h1 className="title">Kết quả tìm kiếm</h1>
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
                {searchApartment.length >= 1 &&
                Array.isArray(searchApartment) ? (
                  searchApartment.map((item, index) => {
                    return (
                      <ResultSearch
                        key={index}
                        info={item}
                        listSelectedRoom={listSelectedRoom}
                        setListSelectedRoom={setListSelectedRoom}
                        infoDate={location?.state?.infoDate}
                      />
                    );
                  })
                ) : (
                  <ResultSearch
                    info={searchApartment}
                    listSelectedRoom={listSelectedRoom}
                    setListSelectedRoom={setListSelectedRoom}
                    infoDate={location?.state?.infoDate}
                  />
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
              textButton="Tìm kiếm"
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
            <h4 className="special-offers-title">Ưu đãi đặc biệt</h4>
            <SpecialOffer />
            <SpecialOffer />
            <SpecialOffer />
          </section>
          <section className="box-about">
            <h4 className="box-about-title">Điều khoản và điều kiện</h4>
            <p className="search-description box-about-descript">
            Chúng tôi là một trong những nhà sản xuất kỳ nghỉ vui vẻ được công nhận nhiều nhất ở Việt Nam
              - Chúng tôi cung cấp một loạt các ưu đãi tuyệt vời cho bất kỳ dịp nào kể từ khi
              2015.
            </p>
            <p className="search-description box-about-descript">
            Chúng tôi chấp nhận thanh toán theo bất kỳ cách nào thuận tiện cho bạn
            </p>
            <img className="box-about-img" src={LogoPayment} />
          </section>
        </section>
      </section>
    </main>
  );
};

export default Search;
