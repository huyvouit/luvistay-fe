import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import apartmentApi from "../../../api/aparment_api";
import { HotelOne, HotelTwo } from "../../../components/Apartment/Hotel/Hotel";
import PageHeader from "../../../components/PageHeader";
import PageTitle from "../../../components/PageTitle";
import getAllApartmentApi from "../../../redux/Api/apartment";
import "./hotel.scss";

const HotelPage = () => {
  const dispatch = useDispatch();
  const apartment = useSelector((state) => state.apartment);
  const [data, setData] = useState([]);

  console.log("data", data);

  useEffect(() => {
    getAllApartmentApi(dispatch, { currentPage: 0, apartmentPerPage: 5 });
  }, []);

  useEffect(() => {
    setData(apartment.apartment);
  }, [apartment]);

  return (
    <main className="hotel-page">
      {data &&
        data.map((item, index) => {
          return index % 2 === 0 ? (
            <HotelOne item={item} key={index} />
          ) : (
            <HotelTwo item={item} key={index} />
          );
        })}
    </main>
  );
};

export default HotelPage;
