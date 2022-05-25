import React from 'react'
import BoxLeft from '../../components/Blog/BoxLeft'
import Posts from '../../components/Blog/Posts'
import "./blog.scss"
import avatar from "../../assets/images/profile.png"

const BlogPage = () => {
  return (
    <div className='blog'>
        <div className='blog-container'>
            <div className='blog-container-colum-one'>
                <BoxLeft/>
            </div>
            <div className='blog-container-colum-two'>
                <div className='blog-container-colum-two-posts'>
                  <div className='blog-container-colum-two-posts-box'>
                    <img src={avatar} className='blog-container-colum-two-posts-box-img'/>
                    <p className='blog-container-colum-two-posts-box-title'>Huy ơi, Bạn đang nghĩ gì thế?</p>
                  </div>
                  <p className='blog-container-colum-two-posts-text'>Tạo blog</p>
                </div>
                <Posts/>
                <Posts/>
                <Posts/>
                <Posts/>
            </div>
        </div>
    </div>
  )
}

export default BlogPage