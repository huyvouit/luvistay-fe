import React from "react";
import HomeStay from "../../../components/Apartment/HomeStay/HomeStay";
import PageHeader from "../../../components/PageHeader";
import PageTitle from "../../../components/PageTitle";

const HomeStayPage = () => {
  return (
    <main>
      <PageHeader title="Rooms & Suites" />
      <PageTitle title="The hotel is arranged on three floors, without a lift. On the ground floor, apart from the reception, there is a comfortable lounge where you can sit and drink tea."/>
      <HomeStay />
      <HomeStay />
      <HomeStay />
    </main>
  );
};

export default HomeStayPage;
