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
import {
  getApartmentByUserApi,
  getRentsOfApartmentApi,
} from "../../../redux/Api/user";
import {
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import RowRoom from "./HostApartment/RowRoom";
import Moment from "react-moment";

const Host = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const apartments = useSelector((state) => state.user.apartments);
  const rents = useSelector((state) => state.user.rents);
  const loading = useSelector((state) => state.loading.loading);
  const [isLoading, setIsLoading] = useState(true);
  const {
    authState: { isAuthenticated, user },
    logoutUser,
  } = useContext(AuthContext);

  const [listRents, setListRents] = useState([]);
  const [tab, setTab] = useState(true);

  useEffect(() => {
    getApartmentByUserApi(dispatch);
    getRentsOfApartmentApi(dispatch);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (apartments) {
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    }, 2000);
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
            {isLoading ? (
              <div className="colum-two">
                <CircularProgress color="inherit" size={25} />
              </div>
            ) : apartments ? (
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
                ) : loading ? (
                  <CircularProgress color="inherit" size={25} />
                ) : (
                  rents?.map((item, index) => {
                    return (
                      <div className="rents" key={index}>
                        <div className="rents-info">
                          <img
                            className="rents-img"
                            src={item?.apartment?.thumbnail}
                            alt=""
                          />
                          <div className="rents-apartment">
                            <p className="apartment-title">
                              {item?.apartment?.name}
                            </p>
                            <div className="rents-room">
                              <h4 className="rooms-title">
                                Danh sách lịch thuê phòng
                              </h4>
                              {item?.roomsCalendar?.map((item, index) => (
                                <div className="list-rents">
                                  <div className="list-rents-apartment">
                                    {/* <h3 className="apartment-name">
                                      {item?.room?.name}
                                    </h3> */}
                                  </div>
                                  <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">
                                      {item?.room?.name}
                                    </InputLabel>
                                    <Select
                                      className="rooms-select"
                                      label={item?.room?.name}
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      // disabled
                                    >
                                      {item?.calendar?.map((date, index) => {
                                        return (
                                          <MenuItem>
                                            <Moment format="DD/MM/YYYY ">
                                              {date.beginDate}
                                            </Moment>
                                            {" - "}
                                            <Moment format="DD/MM/YYYY ">
                                              {date.endDate}
                                            </Moment>
                                          </MenuItem>
                                        );
                                      })}
                                    </Select>
                                  </FormControl>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
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
