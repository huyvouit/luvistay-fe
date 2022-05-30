import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert, Backdrop, CircularProgress } from "@mui/material";

import Booking from "../../../components/Booking";
import Relation from "../../../components/DetailApartment/Relation";
import ReviewsDetail from "../../../components/DetailApartment/Reviews";
import { ImageGallery } from "../../../components/ImageGallery";
import PageHeader from "../../../components/PageHeader";
import PageTitle from "../../../components/PageTitle";
import Motel from "../../../components/Apartment/Motel/Motel";

import {
  getDetailApartmentApi,
  searchRoomByApartmentApi,
} from "../../../redux/Api/detail";
import moment from "moment";
import "./detail.scss";
import { formatDate } from "../../../helper/format";
import { APP_ROUTE } from "../../../routes/app.routes";

const ApartmentDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detailApartment);
  const isLoading = useSelector((state) => state.loading.loading);
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  // const [isLoading, setIsLoading] = useState(true);
  const [people, setPeople] = useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    getDetailApartmentApi(dispatch, id);
  }, [id]);

  const handleNavigate = () => {};
  const handleSearchRoom = () => {
    const body = {
      checkinDate: formatDate(checkin),
      checkoutDate: formatDate(checkout),
      people: people,
      apartmentId: id,
    };
    console.log(body);
    searchRoomByApartmentApi(dispatch, body, () =>
      navigate({ pathname: APP_ROUTE.SEARCH, state: { infoDate: body } })
    );
  };
  return !isLoading ? (
    <main className="detail-page">
      <PageHeader title={detail.info?.name} />
      <PageTitle
        title={`  ${detail.info?.address?.apartmentNumber} 
        ${detail.info?.address?.street}, ${detail.info?.address?.district}, 
        ${detail.info?.address?.province}`}
      />

      <section className="detail-image">
        <img
          src={detail.info?.pictures[0]}
          alt=""
          style={{ objectFit: "cover" }}
        />
      </section>
      <section className="detail-body">
        <section className="detail-body-left">
          <div
            className="detail-description"
            dangerouslySetInnerHTML={{ __html: detail.info?.description }}
          ></div>
          {detail.info?.pictures && (
            <ImageGallery listImage={detail.info.pictures.slice(1, 6)} />
          )}
          <section className="detail-table">
            <section>
              <h2 className="detail-table-title">Danh sách phòng</h2>

              {detail.rooms.map((item, index) => {
                return (
                  <Motel
                    room={item}
                    key={index}
                    thumbnail={detail.info.thumbnail}
                  />
                );
              })}
            </section>
          </section>
        </section>
        <section className="detail-body-right">
          <section className="detail-body-right-item">
            <Booking
              textButton="Search"
              checkin={checkin}
              setCheckin={setCheckin}
              checkout={checkout}
              setCheckout={setCheckout}
              people={people}
              setPeople={setPeople}
              action={handleSearchRoom}
              notCity="true"
            />
          </section>
        </section>
      </section>

      <Relation />
      <ReviewsDetail />
    </main>
  ) : (
    <Backdrop
      sx={{ color: "#c1b086", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default ApartmentDetailPage;
