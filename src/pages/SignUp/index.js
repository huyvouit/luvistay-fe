import React from 'react'
import Slideshow from '../../components/Apartment/SlideShow'
import logo from "../../assets/icons/logoluviStay.svg";
import gg from "../../assets/icons/gg.png";
import fb from "../../assets/icons/fb.png";
import "./signup.scss"
import { Link } from 'react-router-dom';

const SignUpPage = () => {
    return (
        <div className='signup-page'>
            <section className='signup-page-container'>
                <section className='signup-page-container-colum-one'>
                    <section className='signup-slide-show'>
                        <Slideshow imgs={[
                            "https://images.unsplash.com/photo-1585255318859-f5c15f4cffe9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
                            "https://images.unsplash.com/photo-1584226761916-3fd67ab5ac3a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
                            "https://images.unsplash.com/photo-1585179292338-45ba1f62f082?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
                            "https://images.unsplash.com/photo-1584753987666-ead137ec0614?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
                            "https://images.unsplash.com/photo-1584691267914-91c0bee55964?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
                            "https://images.unsplash.com/photo-1585084335487-f653d0859c14?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
                            "https://images.unsplash.com/photo-1583217874534-581393fd5325?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
                            "https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/06/superior-double-room-992x992.jpg",
                        ]} />
                    </section>
                </section>
                <form className='signup-page-container-colum-two'>
                    <img className='signup-page-container-colum-two-logo' src={logo} />
                    <h1 className='signup-page-container-colum-two-title'>Chào mừng bạn đến với LuviStay</h1>
                    <p className='signup-page-container-colum-two-description'>Nơi cung cấp một dịch vụ đặt phòng rẻ và dễ dàng nhất.</p>
                    <div className='signup-page-container-colum-two-box-input'>
                            <label >Tên tài khoản</label>
                            <input  name="name" type="text" required />
                    </div>
                    <div className='signup-page-container-colum-two-box-input'>
                            <label>Email</label>
                            <input name="email" type="email" required />
                    </div>
                    <div className='signup-page-container-colum-two-box-input'>
                            <label>Số điện thoại</label>
                            <input name="phone" type="number" required />
                    </div>
                    <div className='signup-page-container-colum-two-box-input'>
                            <label>Mật khẩu</label>
                            <input name="password" type="password" required />
                    </div>
                    <div className='signup-page-container-colum-two-box-input'>
                            <label>Xác nhận lại mật khẩu</label>
                            <input name="repassword" type="password" required />
                    </div>

                    <button type='submit'>Đăng ký</button>

                    <div className='sign-up-gg'>
                        <img src={gg}/>
                        <p>Đăng ký với Google</p>
                    </div>

                    <div className='sign-up-fb'>
                        <img src={fb}/>
                        <p>Đăng ký với Facebook</p>
                    </div>

                    <Link to="/signin">

                    <p className='to-sign-in'>Nếu bạn có một tài khoản? <span className='span-two'>Đăng nhập tại đây</span></p>
                    </Link>
                </form>
            </section>
        </div>
    )
}

export default SignUpPage