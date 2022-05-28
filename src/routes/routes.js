import React, { useContext, Suspense, useEffect, lazy } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { APP_ROUTE } from "./app.routes";

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
import ProfilePage from "../pages/Profile";
import Order from "../components/Profile/Order";
import Host from "../components/Profile/Host";
import ChangePassword from "../components/Profile/ChangePassword";
import NewsPage from "../pages/News";
import BlogPage from "../pages/Blog";
import MyBlog from "../components/Blog/MyBlog/";

import ScrollToTop from "../helper/scrollToTop";
import { AuthContext } from "../hooks/contexts/auth_context";

const HomePage = lazy(() => import("../pages/Home"));
export default function AppRoutes() {
  const {
    // loginUser,
    authState: { user },
  } = useContext(AuthContext);
  //   const dispatch = useAppDispatch();
  useEffect(() => {
    // dispatch()
  }, []);
  return (
    <Suspense fallback={null}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path={APP_ROUTE.ABOUT} element={<AboutUsPage />} />
              <Route path={APP_ROUTE.APARTMENT} element={<HotelPage />}>
                <Route path={APP_ROUTE.HOTEL} element={<HotelPage />} />

                <Route path={APP_ROUTE.MOTEL} element={<MotelPage />} />

                <Route path={APP_ROUTE.HOME_STAY} element={<HomeStayPage />} />
              </Route>

              <Route path={APP_ROUTE.DETAIL} element={<ApartmentDetailPage />} />

              <Route path={APP_ROUTE.SEARCH} element={<SearchPage />} />
              <Route path={APP_ROUTE.CHECKOUT} element={<CheckoutPage />} />
{/* <<<<<<< HEAD
              <Route path={APP_ROUTE.PROFILE} element={<ProfilePage />} />
              <Route path={APP_ROUTE.PROFILE_ORDER} element={<Order />} />
              <Route path={APP_ROUTE.PROFILE_HOST} element={<Host />} />
              <Route path={APP_ROUTE.PROFILE_CHANGE_PASSWORD} element={<ChangePassword />} />
              
              <Route path={APP_ROUTE.NEWS} element={<NewsPage />} />
======= */}
              <Route
                path={`${APP_ROUTE.PROFILE}/*`}
                element={
                  <RequireAuth>
                    <Routes>
                      <Route index element={<ProfilePage />} />
                      <Route
                        path={APP_ROUTE.PROFILE_ORDER}
                        element={<Order />}
                      />
                      <Route path={APP_ROUTE.PROFILE_HOST} element={<Host />} />
                      <Route
                        path={APP_ROUTE.PROFILE_CHANGE_PASSWORD}
                        element={<ChangePassword />}
                      />
                    </Routes>
                  </RequireAuth>
                }
              />

              <Route path={APP_ROUTE.MY_BLOG} element={<MyBlog />} />
              <Route path={APP_ROUTE.BLOG} element={<BlogPage />} />
              <Route path={APP_ROUTE.NEWS} element={<NewsPage />} />
            </Route>

            <Route path={APP_ROUTE.SIGNIN} element={<SignInPage />} />
            <Route path={APP_ROUTE.SIGNUP} element={<SignUpPage />} />
            <Route path={APP_ROUTE.ERROR} element={<ErrorPage />} />
          </Route>
        </Routes>
        <ToastContainer />
      </Router>
    </Suspense>
  );
}

function RequireAuth({ children }) {
  const location = useLocation();

  const {
    authState: { isAuthenticated, authLoading },
  } = useContext(AuthContext);
  console.log("require", isAuthenticated);
  if (authLoading) return <div>Loading...</div>;
  if (!isAuthenticated) {
    return <Navigate to={APP_ROUTE.SIGNIN} state={{ from: location }} />;
  }
  return children;
}
