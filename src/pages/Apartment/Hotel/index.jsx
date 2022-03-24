import React from "react";
import { HotelOne, HotelTwo } from "../../../components/Apartment/Hotel/Hotel";
import PageHeader from "../../../components/PageHeader";
import PageTitle from "../../../components/PageTitle";
import "./hotel.scss";

const HotelPage = () => {
  return (
    <main className="hotel-page">
      <PageHeader title="Rooms & Suites" />
      <PageTitle title="The hotel is arranged on three floors, without a lift. On the ground floor, apart from the reception, there is a comfortable lounge where you can sit and drink tea."/>
      <HotelOne/>
      <HotelTwo/>
      <HotelOne/>
      <HotelTwo/>
      <HotelOne/>
      <HotelTwo/>
    </main>
  );
};

export default HotelPage;