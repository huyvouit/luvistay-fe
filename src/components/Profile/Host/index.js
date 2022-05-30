import React, { useState, useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import SidebarProfile from '../Sidebar'
import AddApartment from './AddApartment'
import "./host.scss"
import HostApartment from './HostApartment'
import { AuthContext } from "../../../hooks/contexts/auth_context";
import { APP_ROUTE } from "../../../routes/app.routes";

const Host = () => {
    let navigate = useNavigate(); 
    const {
        authState: { isAuthenticated, user },
        logoutUser,
      } = useContext(AuthContext);
    return (
        <div className='host'>
            <div className='host-container'>
                <div className='host-container-row-one'>
                    <h2>MY ACCOUNT</h2>
                </div>
                <div className='host-container-row-two'>
                    <div className='host-container-row-two-container'>
                        <div className='colum-one'>
                            <div className='colum-one-container'>
                                <SidebarProfile/>
                                <h2 className='colum-one-container-logout' onClick={() => logoutUser(() => navigate(APP_ROUTE.HOME))}>ĐĂNG XUẤT</h2>
                            </div>
                        </div>
                        <div className='colum-two'>
                            
                                <AddApartment/>

                                
                            <HostApartment/>
                            <HostApartment/>
                            <HostApartment/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Host