import React from 'react'
import SidebarProfile from '../Sidebar'
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
                                <SidebarProfile/>
                                <h2 className='colum-one-container-logout'>LOGOUT</h2>
                            </div>
                        </div>
                        <div className='colum-two'>
                            <div className='colum-two-container-one'>
                                <h1>Orders tracking</h1>
                                <p>No order found. Shopping now!</p>
                            </div>
                            <div className='colum-two-container-two'>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order