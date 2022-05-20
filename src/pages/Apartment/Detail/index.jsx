import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Booking from "../../../components/Booking";
import Relation from "../../../components/DetailApartment/Relation";
import ReviewsDetail from "../../../components/DetailApartment/Reviews";
import { ImageGallery } from "../../../components/ImageGallery";
import PageHeader from "../../../components/PageHeader";

import "./detail.scss";
import { useParams } from "react-router-dom";
import apartmentApi from "../../../api/aparment_api";
import PageTitle from "../../../components/PageTitle";
import Motel from "../../../components/Apartment/Motel/Motel";

const data = [
  {
    id: 1,
    icon: "fa-solid fa-bed",
    type: "People",
    value: "2",
  },
  {
    id: 1,
    icon: "fa-solid fa-bed",
    type: "People",
    value: "2",
  },
  {
    id: 1,
    icon: "fa-solid fa-bed",
    type: "People",
    value: "2",
  },
  {
    id: 1,
    icon: "fa-solid fa-bed",
    type: "People",
    value: "2",
  },
  {
    id: 1,
    icon: "fa-solid fa-bed",
    type: "People",
    value: "2",
  },
  {
    id: 1,
    icon: "fa-solid fa-bed",
    type: "People",
    value: "2",
  },
];
const ApartmentDetailPage = () => {
  const { id } = useParams();
  const [infoApartment, setInfoApartment] = useState(null);
  const [room, setRoom] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchApartmentById = async () => {
      try {
        // const params = { id };
        const response = await apartmentApi.getApartmentById(id);
        if (response.data) {
          setInfoApartment(response.data);

          await fetchRoomByApartment(response.data.type);
        }
      } catch (error) {
        console.log(error.response.data);
        console.log("Failed to fetch Apartment list: ", error);
        setIsLoading(false);
      }
    };
    const fetchRoomByApartment = async (type) => {
      try {
        const response = await apartmentApi.getRoomByApartment(id);
        if (response.data) {
          setRoom(response.data);
          setIsLoading(false);
        }
      } catch (error) {
        // console.log(error.response.data);
        // console.log("Failed to fetch Apartment list: ", error);
        setIsLoading(false);
      }
    };
    fetchApartmentById();
  }, [id]);
  console.log(room);
  return (
    infoApartment && (
      <main className="detail-page">
        <PageHeader title={infoApartment?.name} />
        <PageTitle
          title={`  ${infoApartment?.address?.apartmentNumber} 
        ${infoApartment?.address?.street}, ${infoApartment?.address?.district}, 
        ${infoApartment?.address?.province}`}
        />

        <section className="detail-image">
          <img
            src={infoApartment?.pictures[0]}
            alt=""
            style={{ objectFit: "cover" }}
          />
        </section>
        <section className="detail-body">
          <section className="detail-body-left">
            <div
              className="detail-description"
              dangerouslySetInnerHTML={{ __html: infoApartment?.description }}
            ></div>
            <ImageGallery listImage={infoApartment.pictures.slice(1, 6)} />
            <section className="detail-table">
              <section>
                <h2 className="detail-table-title">Danh sách phòng</h2>
                {/* <table>
                  <colgroup
                    style={{ width: "150px", backgroundColor: "white" }}
                  ></colgroup>
                  <colgroup style={{ backgroundColor: "#fcfcfc" }}></colgroup>
                  {data.map((item, index) => {
                    return (
                      <tr key={index}>
                        <th>
                          <FontAwesomeIcon
                            className="detail-icon"
                            icon={item.icon}
                          />
                          <span>{item.type}</span>
                        </th>
                        <td>{item.value}</td>
                      </tr>
                    );
                  })}
                </table> */}
                {room.map((item, index) => {
                  return <Motel room={item} />;
                })}
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
    )
  );
};

export default ApartmentDetailPage;
