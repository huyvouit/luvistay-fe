import React from 'react'
import SidebarProfile from '../Sidebar'
import { Link } from "react-router-dom";
import "./order.scss"

const Order = () => {
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
                                <h2 className='colum-one-container-logout'>LOGOUT</h2>
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
                                    <Link to="/profile" className='table-container'>
                                        <div className='table-order-row'>
                                            <p className='table-order-colum-one'>#1306552651656513516845</p>
                                            <p className='table-order-colum-one'>30/05/2022 - 05/06/2022</p>
                                            <p className='table-order-colum-two'>LuviStay</p>
                                            <p className='table-order-colum-two'>5.000.000 VNĐ</p>
                                        </div>
                                    </Link>
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