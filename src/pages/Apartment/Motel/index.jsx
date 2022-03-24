import React from "react";
import Motel from "../../../components/Apartment/Motel/Motel";
import PageHeader from "../../../components/PageHeader";
import PageTitle from "../../../components/PageTitle";

const MotelPage = () => {
  return (
    <main>
      <PageHeader title="Rooms & Suites" />
      <PageTitle title="The hotel is arranged on three floors, without a lift. On the ground floor, apart from the reception, there is a comfortable lounge where you can sit and drink tea." />
      <Motel />
    </main>
  );
};

export default MotelPage;
