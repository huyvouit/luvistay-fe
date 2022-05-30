import React, { useState, useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import SidebarProfile from '../Sidebar'
import { TextField } from '@mui/material';
import "./changePassword.scss"
import { AuthContext } from "../../../hooks/contexts/auth_context";
import { APP_ROUTE } from "../../../routes/app.routes";

const ChangePassword = () => {
    let navigate = useNavigate(); 
    const {
        authState: { isAuthenticated, user },
        logoutUser,
      } = useContext(AuthContext);

    return (
        <div className='change-password'>
            <div className='change-password-container'>
                <div className='change-password-container-row-one'>
                    <h2>MY ACCOUNT</h2>
                </div>
                <div className='change-password-container-row-two'>
                    <div className='change-password-container-row-two-container'>
                        <div className='colum-one'>
                            <div className='colum-one-container'>
                                <SidebarProfile/>
                                <h2 className='colum-one-container-logout' onClick={() => logoutUser(() => navigate(APP_ROUTE.HOME))}>ĐĂNG XUẤT</h2>
                            </div>
                        </div>
                        <div className='colum-two'>
                        <div className='colum-two'>
                            <form>
                                <h1>Change password</h1>
                                <TextField className='text-field' id="old-password" 
                                type={'password'}  label="Old passwrod"
                                variant="outlined" required
                                />
                                <TextField className='text-field' id="new-password" type={'password'}  label="New password" variant="outlined" required/>
                                <TextField className='text-field' id="confirm-password" type={'password'}  label="Confirm new password" variant="outlined" required/>
                                <button type='submit'>Update password</button>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword