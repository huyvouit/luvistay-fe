import React, { useState, useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import SidebarProfile from '../Sidebar'
import "./order.scss"
import Detail from '../DetailOrder';
import { AuthContext } from "../../../hooks/contexts/auth_context";
import { APP_ROUTE } from "../../../routes/app.routes";

const Order = () => {
    let navigate = useNavigate(); 
    const {
        authState: { isAuthenticated, user },
        logoutUser,
      } = useContext(AuthContext);
    return (
        <div className='order'>
            <div className='order-container'>
                <div className='order-container-row-one'>
                    <h2>MY ACCOUNT</h2>
                </div>
                <div className='order-container-row-two'>
                    <div className='order-container-row-two-container'>
                        <div className='colum-one'>
                            <div className='colum-one-container'>
                                <SidebarProfile />
                                <h2 className='colum-one-container-logout' onClick={() => logoutUser(() => navigate(APP_ROUTE.HOME))}>ĐĂNG XUẤT</h2>
                            </div>
                        </div>
                        <div className='colum-two'>
                            <div className='colum-two-container'>
                                <h1 className='colum-two-container-title'>Orders tracking</h1>
                                <p className='colum-two-container-description'>No order found. Shopping now!</p>
                                <div className='table-order'>
                                    <div className='table-order-row'>
                                        <p className='table-order-colum-one table-title'>ID</p>
                                        <p className='table-order-colum-one table-title'>Date</p>
                                        <p className='table-order-colum-two table-title'>Hotel</p>
                                        <p className='table-order-colum-two table-title'>Total</p>
                                    </div>
                                        <Detail/>
                                        <Detail/>
                                        <Detail/>
                                        <Detail/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order