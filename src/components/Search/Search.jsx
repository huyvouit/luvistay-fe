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
  console.log(location.state);
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
              <h1 className="title">K???t qu??? t??m ki???m</h1>
            </section>
          </section>
          {isLoading ? (
            <div>Loading...</div>
          ) : searchApartment ? (
            <>
              <p className="search-description">
                L???a chon c??c ph??ng c?? s???n theo t???ng c??n h???.
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
            <div>Ch??a c?? th??ng tin tim ki???m</div>
          )}
        </section>
        <section className="search-colum-two">
          <section className="box-search">
            <Booking
              textButton="T??m ki???m"
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
            <h4 className="special-offers-title">??u ????i ?????c bi???t</h4>
            <SpecialOffer />
            <SpecialOffer />
            <SpecialOffer />
          </section>
          <section className="box-about">
            <h4 className="box-about-title">??i???u kho???n v?? ??i???u ki???n</h4>
            <p className="search-description box-about-descript">
              Ch??ng t??i l?? m???t trong nh???ng nh?? s???n xu???t k??? ngh??? vui v??? ???????c c??ng
              nh???n nhi???u nh???t ??? Vi???t Nam - Ch??ng t??i cung c???p m???t lo???t c??c ??u
              ????i tuy???t v???i cho b???t k??? d???p n??o k??? t??? khi 2015.
            </p>
            <p className="search-description box-about-descript">
              Ch??ng t??i ch???p nh???n thanh to??n theo b???t k??? c??ch n??o thu???n ti???n cho
              b???n
            </p>
            <img className="box-about-img" src={LogoPayment} alt="" />
          </section>
        </section>
      </section>
    </main>
  );
};

export default Search;
