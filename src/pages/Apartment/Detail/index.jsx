import React from "react";
import Booking from "../../../components/Booking";
import Relation from "../../../components/DetailApartment/Relation";
import ReviewsDetail from "../../../components/DetailApartment/Reviews";
import { ImageGallery } from "../../../components/ImageGallery";
import PageHeader from "../../../components/PageHeader";

import "./detail.scss";

const ApartmentDetailPage = () => {
  return (
    <main className="detail-page">
      <PageHeader title="Standard Single Room" />
      <section className="detail-image">
        <img
          src="https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/06/standart-single-room-1170x780.jpg"
          alt=""
        />
      </section>
      <section className="detail-body">
        <section className="detail-body-left">
          <p>
            Classic Double Rooms come with either double or single beds.
            Designed in open-concept living area, they have lots of in-room
            facilities. The room sizes vary from 20 to 25 sqm. They are also
            equipped with a fully-stocked minibar and snacks, air-conditioning
            unit, two comfortable chairs, makeup mirror, huge wardrobe, a soft
            hand-made carpet and ensuite bathroom. Perfect choice for
            honeymooners and couples. Moreover, you may also order any type of
            meal any time as we work around-the-clock.
          </p>
          <ImageGallery />
          <section className="detail-table">
            <section>
              <h2 className="detail-table-title">Details</h2>
              <table>
                <colgroup
                  style={{ width: "150px", backgroundColor: "white" }}
                ></colgroup>
                <colgroup style={{ backgroundColor: "#fcfcfc" }}></colgroup>
                <tr>
                  <th>Peter</th>
                  <td>
                    air-conditioning, free wi-fi, hairdryer, in-room safety,
                    laundry, minibar, telephone
                  </td>
                </tr>
                <tr>
                  <th>Peter</th>
                  <td>Griffin</td>
                </tr>
                <tr>
                  <th>Peter</th>
                  <td>Swanson</td>
                </tr>
                <tr>
                  <th>Peter</th>
                  <td>Brown</td>
                </tr>
              </table>
            </section>
          </section>
        </section>
        <section className="detail-body-right">
          <section className="detail-body-right-item">
            <Booking textButton="Search" detail={{ price: 250 }} />
          </section>
        </section>
      </section>

      <Relation />
      <ReviewsDetail />
    </main>
  );
};

export default ApartmentDetailPage;
