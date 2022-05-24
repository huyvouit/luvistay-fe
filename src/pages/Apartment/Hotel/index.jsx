import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Backdrop, CircularProgress } from "@mui/material";

import { HotelOne, HotelTwo } from "../../../components/Apartment/Hotel/Hotel";
import PageHeader from "../../../components/PageHeader";
import PageTitle from "../../../components/PageTitle";
import getAllApartmentApi from "../../../redux/Api/apartment";
import "./hotel.scss";

const LIST_TYPE = [
  {
    id: 0,
    type: "",
    name: "Tất cả căn hộ",
  },
  {
    id: 1,
    type: "hotel",
    name: "Khách sạn",
  },
  {
    id: 2,
    type: "resort",
    name: "Resort",
  },
  {
    id: 3,
    type: "homestay",
    name: "Homestay",
  },
  {
    id: 4,
    type: "motel",
    name: "Nhà nghỉ",
  },
  {
    id: 5,
    type: "house",
    name: "Nhà ở",
  },
];
const HotelPage = () => {
  const dispatch = useDispatch();
  const apartment = useSelector((state) => state.apartment);
  const isLoading = useSelector((state) => state.loading.loading);
  const [data, setData] = useState([]);
  const [type, setType] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  const [titlePage, setTitlePage] = useState("Tất cả căn hộ");
  console.log("data", isLoading);

  useEffect(() => {
    // setIsLoading(true);
    getAllApartmentApi(dispatch, {
      currentPage: 0,
      apartmentPerPage: 10,
      type,
    });
  }, [type]);

  const handleSelectType = (item) => {
    setType(item.type);
    setTitlePage(item.name);
  };
  useEffect(() => {
    if (apartment) {
      // setIsLoading(false);
      setData(apartment.apartment);
    } else {
      setData([]);
    }
  }, [apartment]);

  return (
    <main className="hotel-page">
      <Backdrop
        sx={{ color: "#c1b086", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <PageHeader title={titlePage} />
      <br />
      <section className="list-type">
        <section className="list-button-type">
          {LIST_TYPE.map((item, index) => {
            return (
              <main
                key={index}
                className="button-type"
                onClick={() => handleSelectType(item)}
                style={{
                  backgroundColor: type === item.type ? "#c1b086" : "#fff",
                }}
              >
                <p className="button-title">{item.name}</p>
              </main>
            );
          })}
        </section>
        {/* <section>View:</section> */}
      </section>
      {data &&
        data.map((item, index) => {
          return index % 2 === 0 ? (
            <HotelOne item={item} key={index} />
          ) : (
            <HotelTwo item={item} key={index} />
          );
        })}
    </main>
  );
};

export default HotelPage;
