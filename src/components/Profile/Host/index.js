import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import SidebarProfile from "../Sidebar";
import AddApartment from "./AddApartment";
import "./host.scss";
import HostApartment from "./HostApartment";
import { AuthContext } from "../../../hooks/contexts/auth_context";
import { APP_ROUTE } from "../../../routes/app.routes";
import AddRoomForApartment from "./AddRoomForApartment";
import { useDispatch, useSelector } from "react-redux";
import { getApartmentByUserApi } from "../../../redux/Api/user";
import { CircularProgress } from "@mui/material";

const Host = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const apartments = useSelector((state) => state.user.apartments);
  const rents = useSelector((state) => state.user.rents);
  const loading = useSelector((state) => state.loading.loading);

  const {
    authState: { isAuthenticated, user },
    logoutUser,
  } = useContext(AuthContext);
  const [apartment, setApartment] = useState(true);
  const [tab, setTab] = useState(true);

  useEffect(() => {
    getApartmentByUserApi(dispatch);
  }, []);

  return (
    <div className="host">
      <div className="host-container">
        <div className="host-container-row-one">
          <h2>MY ACCOUNT</h2>
        </div>
        <div className="host-container-row-two">
          <div className="host-container-row-two-container">
            <div className="colum-one">
              <div className="colum-one-container">
                <SidebarProfile />
                <h2
                  className="colum-one-container-logout"
                  onClick={() => logoutUser(() => navigate(APP_ROUTE.HOME))}
                >
                  ĐĂNG XUẤT
                </h2>
              </div>
            </div>
            {apartment ? (
              <div className="colum-two">
                <div className="colum-two-header">
                  <div className="colum-two-group">
                    <p
                      className="text-header"
                      style={{
                        color: tab ? "#222" : "#e2e2e2",
                        textDecoration: tab && "underline",
                      }}
                      onClick={() => setTab(true)}
                    >
                      Danh sách căn hộ
                    </p>
                    <p
                      className="text-header"
                      style={{
                        color: !tab ? "#222" : "#b1b1b1",
                        textDecoration: !tab && "underline",
                      }}
                      onClick={() => setTab(false)}
                    >
                      Căn hộ được thuê
                    </p>
                  </div>
                  <div className="colum-two-group">
                    <AddRoomForApartment />
                    <AddApartment />
                  </div>
                </div>
                {tab ? (
                  loading ? (
                    <CircularProgress color="inherit" size={25} />
                  ) : (
                    apartments?.map((item, index) => {
                      return <HostApartment key={index} apartment={item} />;
                    })
                  )
                ) : (
                  <div>ABC</div>
                )}
              </div>
            ) : (
              <div className="colum-three">
                <h2>
                  Bạn chưa có căn hộ trên hệ thống. Hãy thêm ngay một căn hộ để
                  trở thành chủ nhà trên LuviStay nào.
                </h2>
                <div className="colum-three-btn">
                  <AddApartment />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Host;
