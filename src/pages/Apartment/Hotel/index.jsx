import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import apartmentApi from "../../../api/aparment_api";
import { HotelOne, HotelTwo } from "../../../components/Apartment/Hotel/Hotel";
import PageHeader from "../../../components/PageHeader";
import PageTitle from "../../../components/PageTitle";
import getAllApartmentApi from "../../../redux/Api/apartment";
import "./hotel.scss";

const HotelPage = () => {
  const dispatch = useDispatch();
  const apartment = useSelector((state) => state.apartment);
  const [data, setData] = useState(apartment);

  console.log("data", data);

  useEffect(() => {
    getAllApartmentApi(dispatch, { currentPage: 0, apartmentPerPage: 5 });
  }, []);

  useEffect(() => {
    setData(apartment);
  }, [apartment]);

  return (
    <main className="hotel-page">
      <HotelOne item={data[0]} />
      <HotelTwo />
      <HotelOne />
      <HotelTwo />
      <HotelOne />
      <HotelTwo />
    </main>
  );
};

export default HotelPage;
