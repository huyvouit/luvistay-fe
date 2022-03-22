import React, { ReactElement, Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import { APP_ROUTE } from "./app.routes";
import HomePage from "../pages/Home";
import Layout from "../components/Layout";
import SignInPage from "../pages/Login";
import ApartmentPage from "../pages/Apartment";
import HotelPage from "../pages/Apartment/Hotel";
import MotelPage from "../pages/Apartment/Motel";
import HomeStayPage from "../pages/Apartment/Homestay";
import SearchPage from "../pages/Search";
import ApartmentDetailPage from "../pages/Apartment/Detail";

export default function AppRoutes() {
  //   const dispatch = useAppDispatch();
  useEffect(() => {
    // dispatch()
  }, []);
  return (
    <Suspense fallback={null}>
      <Router>
        <Routes>
          <Route>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path={APP_ROUTE.APARTMENT} element={<ApartmentPage />} />
              <Route path={APP_ROUTE.HOTEL} element={<HotelPage />} />
              <Route
                path={APP_ROUTE.HOTEL_DETAIL}
                element={<ApartmentDetailPage />}
              />
              <Route path={APP_ROUTE.MOTEL} element={<MotelPage />} />
              <Route
                path={APP_ROUTE.MOTEL_DETAIL}
                element={<ApartmentDetailPage />}
              />
              <Route path={APP_ROUTE.HOME_STAY} element={<HomeStayPage />} />
              <Route
                path={APP_ROUTE.HOME_STAY_DETAIL}
                element={<ApartmentDetailPage />}
              />
              <Route path={APP_ROUTE.SEARCH} element={<SearchPage />} />
            </Route>
            <Route path={APP_ROUTE.SIGNIN} element={<SignInPage />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
}
