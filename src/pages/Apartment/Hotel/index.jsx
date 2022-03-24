import React from "react";
import Hotel from "../../../components/Apartment/Hotel/Hotel";
import PageHeader from "../../../components/PageHeader";
import PageTitle from "../../../components/PageTitle";

const HotelPage = () => {
  return (
    <main>
      <PageHeader title="Rooms & Suites" />
      <PageTitle title="The hotel is arranged on three floors, without a lift. On the ground floor, apart from the reception, there is a comfortable lounge where you can sit and drink tea."/>
      <Hotel/>
    </main>
  );
};

export default HotelPage;