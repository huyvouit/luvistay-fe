import React from "react";
import Booking from "../../../components/Booking";
import Relation from "../../../components/DetailApartment/Relation";
import { ImageGallery } from "../../../components/ImageGallery";
import PageHeader from "../../../components/PageHeader";

import "./detail.scss";

const ApartmentDetailPage = () => {
  return (
    <main>
      <PageHeader title="Standard Single Room" />
      <section className="detail-body">
        <section>
          <ImageGallery />
        </section>
        <section style={{ width: 400 }}>
          <Booking textButton="Search" detail={{ price: 250 }} />
        </section>
      </section>
      <Relation />
    </main>
  );
};

export default ApartmentDetailPage;
