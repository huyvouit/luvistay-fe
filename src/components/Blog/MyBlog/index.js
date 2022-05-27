import React from 'react'
import BoxLeft from '../BoxLeft'
import Posts from '../Posts'
import "./myBlog.scss"

const MyBlog = () => {
  return (
    <div className='my-blog'>
        <div className='my-blog-container'>
            <div className='my-blog-container-colum-one'>
                <BoxLeft/>
            </div>
            <div className='my-blog-container-colum-two'>
                <Posts/>
                <Posts/>
                <Posts/>
                <Posts/>
                <Posts/>
                <Posts/>
                <Posts/>
            </div>
        </div>
    </div>
  )
}

export default MyBlog