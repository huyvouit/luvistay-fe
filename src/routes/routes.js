import React, { ReactElement, Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
// import { useAppDispatch, AppRootState } from "app/redux/store";

import { APP_ROUTE } from "./app.routes";
import HomePage from "../pages/Home";
import Layout from "../components/Layout";
import SignInPage from "../pages/Login";

export default function AppRoutes() {
  //   const dispatch = useAppDispatch();
  useEffect(() => {
    // dispatch()
  }, []);
  return (
    <Suspense>
      <Router>
        <Routes>
          <Route>
            <Route path="/" element={<Layout />} >
              <Route index element={<HomePage />} />
            </Route>
            <Route path={APP_ROUTE.LOGIN} element={<SignInPage />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
}
