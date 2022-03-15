import { useAppDispatch,AppRootState } from "app/redux/store";
// import NotFoundPage from "pages/notfound";
import React, { ReactElement, Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import {
	BrowserRouter as Router, Navigate, Route, Routes, useLocation
} from "react-router-dom";
import { APP_ROUTE } from "./routes.const";

export default function AppRoutes() {
    const dispatch = useAppDispatch();
	useEffect(() => {
		// dispatch()
	}, []);
	return (
		<Suspense fallback={<Loader/>}>
			<Router>
				<Routes>
					<Route>
						<Route path="/" element={
							<Navigate to={APP_ROUTE.HOME} />
						} />
						<Route path={APP_ROUTE.SIGNIN} element={<SignInPage />}/>
						{/* <Route path={APP_ROUTE.SIGNUP} element={<SignInPage />}/> */}
						{/* <Route path={`${APP_ROUTE}/*`} element={
							<RequireAuth>
								<div>
									Private Pages
								</div>
							</RequireAuth>
						}/> */}
						{/* <Route path="*" element={<NotFoundPage />}/> */}
					</Route>
				</Routes>
			</Router>
		</Suspense>
	);
}