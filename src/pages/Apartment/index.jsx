import React from "react";
import PageHeader from "../../components/PageHeader";
import PageTitle from "../../components/PageTitle";
import Motel from "../../components/Apartment/Motel/Motel";

import Canonical from "../../components/Canonical";

const ApartmentPage = () => {
  return (
    <main>
      <Canonical title="Apartment | LuviStay" href="http://localhost:3000/" />
      <PageHeader title="Rooms & Suites" />
      <PageTitle title="The hotel is arranged on three floors, without a lift. On the ground floor, apart from the reception, there is a comfortable lounge where you can sit and drink tea." />
      <Motel />
    </main>
  );
};

export default ApartmentPage;
