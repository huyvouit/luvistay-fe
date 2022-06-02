import React from 'react'
import "./specialOffer.scss"

const SpecialOffer = () => {
  return (
    <main className='special-offer'>
        <section className='special-offer-container' >
            <img className='special-offer-container-img' src='https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/06/classic-double-room-992x992.jpg'/>

            <h4 className='special-offer-container-title'>Đặt biệt</h4>
            <p className='special-offer-container-description'>Các phòng đơn tiêu chuẩn được thiết kế trong khu vực sinh hoạt mở và có nhiều cơ sở.</p>
            <p className='special-offer-container-price'><span className='special-offer-container-price-one'>$119 </span> <span className='special-offer-container-price-two'>/ trên đêm</span></p>
        </section>
    </main>
  )
}

export default SpecialOffer