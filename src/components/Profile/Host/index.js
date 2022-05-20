import React from 'react'
import SidebarProfile from '../Sidebar'
import "./host.scss"


const Host = () => {
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
                                <h2 className='colum-one-container-logout'>LOGOUT</h2>
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

export default Host