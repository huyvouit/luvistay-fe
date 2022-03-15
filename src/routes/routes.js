import { reLogin } from "app/redux/actions";
import { useAppDispatch,AppRootState } from "app/redux/store";
// import NotFoundPage from "pages/notfound";
import React, { ReactElement, Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import {
	BrowserRouter as Router, Navigate, Route, Routes, useLocation
} from "react-router-dom";

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
							<Navigate to={APP_ROUTE.ADMIN} />
						} />
						{/* <Route path={APP_ROUTE.SIGN_IN} element={<SignInPage />}/> */}
						{/* <Route path="*" element={<NotFoundPage />}/> */}
					</Route>
				</Routes>
			</Router>
		</Suspense>
	);
}