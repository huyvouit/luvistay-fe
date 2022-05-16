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
import ErrorPage from "../pages/Error";
import AboutUsPage from "../pages/AboutUs/AboutUs";
import SignUpPage from "../pages/SignUp";
import CheckoutPage from "../pages/Checkout";

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
              <Route path={APP_ROUTE.ABOUT} element={<AboutUsPage />} />
              <Route path={APP_ROUTE.APARTMENT} element={<ApartmentPage />}>
                <Route path={APP_ROUTE.HOTEL} element={<HotelPage />} />

                <Route path={APP_ROUTE.MOTEL} element={<MotelPage />} />

                <Route path={APP_ROUTE.HOME_STAY} element={<HomeStayPage />} />
              </Route>
              <Route
                path={APP_ROUTE.MOTEL_DETAIL}
                element={<ApartmentDetailPage />}
              />
              <Route
                path={APP_ROUTE.HOTEL_DETAIL}
                element={<ApartmentDetailPage />}
              />
              <Route
                path={APP_ROUTE.HOME_STAY_DETAIL}
                element={<ApartmentDetailPage />}
              />
              <Route path={APP_ROUTE.SEARCH} element={<SearchPage />} />
              <Route path={APP_ROUTE.CHECKOUT} element={<CheckoutPage />} />
            </Route>
            <Route path={APP_ROUTE.SIGNIN} element={<SignInPage />} />
            <Route path={APP_ROUTE.SIGNUP} element={<SignUpPage />} />
            <Route path={APP_ROUTE.ERROR} element={<ErrorPage />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
}
