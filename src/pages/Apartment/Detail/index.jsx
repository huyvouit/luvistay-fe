import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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

const data = [
  {
    id: 1,
    icon: "fa-solid fa-bed",
    type: "People",
    value: "2",
  },
  {
    id: 1,
    icon: "fa-solid fa-bed",
    type: "People",
    value: "2",
  },
  {
    id: 1,
    icon: "fa-solid fa-bed",
    type: "People",
    value: "2",
  },
  {
    id: 1,
    icon: "fa-solid fa-bed",
    type: "People",
    value: "2",
  },
  {
    id: 1,
    icon: "fa-solid fa-bed",
    type: "People",
    value: "2",
  },
  {
    id: 1,
    icon: "fa-solid fa-bed",
    type: "People",
    value: "2",
  },
];
const ApartmentDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detailApartment);
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [people, setPeople] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    getDetailApartmentApi(dispatch, id);
    setIsLoading(false);
  }, [id, isLoading]);
  // console.log(room);
  console.log(
    checkin,
    moment(checkout, "YYYY-MM-DD").format("MM-DD-YYYY").replaceAll("-", "/"),
    people
  );

  const handleSearchRoom = () => {
    const body = {
      checkinDate: moment(checkin, "YYYY-MM-DD")
        .format("MM-DD-YYYY")
        .replaceAll("-", "/"),
      checkoutDate: moment(checkout, "YYYY-MM-DD")
        .format("MM-DD-YYYY")
        .replaceAll("-", "/"),
      people: [`${people} người`],
      apartmentId: id,
    };
    console.log(body);
    searchRoomByApartmentApi(dispatch, body);
  };
  return detail.info ? (
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
          <ImageGallery listImage={detail.info.pictures.slice(1, 6)} />
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
