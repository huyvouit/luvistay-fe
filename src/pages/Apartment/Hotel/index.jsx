import React from "react";
import { HotelOne, HotelTwo } from "../../../components/Apartment/Hotel/Hotel";
import PageHeader from "../../../components/PageHeader";
import PageTitle from "../../../components/PageTitle";
import "./hotel.scss";

const HotelPage = () => {
  return (
    <main className="hotel-page">
      <HotelOne />
      <HotelTwo />
      <HotelOne />
      <HotelTwo />
      <HotelOne />
      <HotelTwo />
    </main>
  );
};

export default HotelPage;
