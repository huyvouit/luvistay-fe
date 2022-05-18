import React, { useState } from 'react'
import "./profile.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfilePage = () => {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <div className='profile'>
            <div className='profile-container'>
                <div className='profile-container-row-one'>
                    <h2>MY ACCOUNT</h2>
                </div>
                <div className='profile-container-row-two'>
                    <div className='profile-container-row-two-container'>
                        <div className='colum-one'>
                            <div>
                                <h2>ACCOUNT DETAIL</h2>
                                <h2>CHANGE PASSWORD</h2>
                                <h2>ORDERS</h2>
                                <h2>HOST</h2>
                                <h2>LOGOUT</h2>
                                {/* <div
                                    onClick={(event) => {
                                        setTimeout(() => {
                                            setOpenMenu(true);
                                            document.body.style.overflow = "hidden";
                                        }, 500);
                                    }}
                                >
                                    <FontAwesomeIcon
                                        icon="fa-solid fa-bars"
                                        style={{ width: "30px", height: "30px !important" }}
                                    />
                                </div> */}
                            </div>
                        </div>
                        <div className='colum-two'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage