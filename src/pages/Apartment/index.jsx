import React from "react";
import PageHeader from "../../components/PageHeader";
import PageTitle from "../../components/PageTitle";
import Motel from "../../components/Apartment/Motel/Motel";
import { Outlet, useLocation } from "react-router-dom";
import Canonical from "../../components/Canonical";
import { base_url } from "../../constants";
const ApartmentPage = () => {
  let location = useLocation();
  return (
    <main>
      <Canonical title="Apartment | LuviStay" />
      <PageHeader title="Rooms & Suites" />
      <PageTitle title="The hotel is arranged on three floors, with\ut a lift. On the ground floor, apart from the reception, there is a comfortable lounge where you can sit and drink tea." />
      <Outlet />
    </main>
  );
};

export default ApartmentPage;
