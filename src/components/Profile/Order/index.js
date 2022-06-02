import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import SidebarProfile from "../Sidebar";
import "./order.scss";
import Detail from "../DetailOrder";
import { AuthContext } from "../../../hooks/contexts/auth_context";
import { APP_ROUTE } from "../../../routes/app.routes";
import { useDispatch, useSelector } from "react-redux";
import { getOrderByUserApi } from "../../../redux/Api/user";
import { CircularProgress } from "@mui/material";

const Order = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const listOrders = useSelector((state) => state.user.orders);
  const loading = useSelector((state) => state.loading.loading);
  const {
    authState: { isAuthenticated, user },
    logoutUser,
  } = useContext(AuthContext);

  useEffect(() => {
    if (listOrders) {
      return;
    } else {
      getOrderByUserApi(dispatch);
    }
  }, []);

  return (
    <div className="order">
      <div className="order-container">
        <div className="order-container-row-one">
          <h2>MY ACCOUNT</h2>
        </div>
        <div className="order-container-row-two">
          <div className="order-container-row-two-container">
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
            <div className="colum-two">
              <div className="colum-two-container">
                <h1 className="colum-two-container-title">Lịch sử đặt phòng</h1>
                {loading ? (
                  <CircularProgress color="inherit" size={30} />
                ) : listOrders ? (
                  <div className="table-order">
                    <div className="table-order-row">
                      <p className="table-order-colum-one table-title">
                        Thời gian
                      </p>
                      <p className="table-order-colum-two table-title">
                        Khách sạn
                      </p>
                      <p className="table-order-colum-three table-title">
                        Tổng tiền
                      </p>
                    </div>
                    {listOrders &&
                      listOrders.map((item, index) => {
                        return <Detail key={index} order={item} />;
                      })}
                  </div>
                ) : (
                  <p className="colum-two-container-description">
                    Chưa có đơn đặt phòng nào.!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
