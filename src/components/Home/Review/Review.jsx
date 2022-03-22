import React, { useState, useEffect } from "react";
import { BANNER_IMAGE } from "../constants";
import "./review.scss"

const ReviewOne = ({ }) => {
    return (
      <div className="review-one">
        <div className="review-one-row-one">
          <div className="colum-one">
            <p className="highlinght"></p>
            <p className="content">RAISING COMFORT TO THE HIGHEST LEVEL</p>
            <h1 className="title">Rooms & Suites</h1>
          </div>
          <div className="colum-two">
            <div className="container">
            <a href="#" className="btn">VIEW ALL</a>
            </div>
            
          </div>
        </div>
        <div className="review-one-row-two">
        <div className="review-image image-one">
          <div className="row-one">
            <img className="image" src={BANNER_IMAGE.IMG_1} />
          </div>
          <div className="row-two">
            <h4 className="name">Superior Double Room</h4>
            <p><span className="span-one">$129</span> <span className="spane-two">/ per night</span></p>
          </div>
        </div>

        <div className="review-image image-two">
          <div className="row-one">
            <img className="image" src={BANNER_IMAGE.IMG_2} />
          </div>
          <div className="row-two">
            <h4 className="name">Superior Double Room</h4>
            <p><span className="span-one">$129</span> <span className="spane-two">/ per night</span></p>
          </div>
        </div>

        <div className="review-image image-three">
          <div className="row-one">
            <img className="image" src={BANNER_IMAGE.IMG_3} />
          </div>
          <div className="row-two">
            <h4 className="name">Superior Double Room</h4>
            <p><span className="span-one">$129</span> <span className="spane-two">/ per night</span></p>
          </div>
        </div>
        </div>
      </div>
    );
  };
  

  // Review two  
  const Slideshow = ({ imgs }) => {
    const [index, setIndex] = useState(0)
  
    useEffect(() => {
      setIndex(0)
    }, [])
  
    const next = () => {
      if (index + 3 === imgs.length - 1) {
        setIndex(0)
      } else {
        setIndex(index + 1)
      }
    }
    const prev = () => {
      if (index === 0) {
        setIndex(imgs.length - 4)
        console.log("hahahaha")
        console.log(index)
      } else {
        setIndex(index - 1)
        console.log("vlvlvlvl")
        console.log(index)
      }
    }
  
  
    return (
      <div className="slideshow">
        <img className="mainImg main-img-one " src={imgs[index]} />
        <img className="mainImg main-img-two" src={imgs[index+1]} />
        <img className="mainImg main-img-three" src={imgs[index+2]} />
        <img className="mainImg main-img-four" src={imgs[index+3]} />
        <div className="actions">
        <button onClick={prev}>👈</button>
        <button onClick={next}>👉</button>
        </div>
      </div>
    )
  }



  const ReviewTwo = ({ }) => {
    return (
      <div className="review-one">
      <div className="review-one-row-one">
        <div className="colum-one">
          <p className="highlinght"></p>
          <p className="content">WELCOME TO OUR PHOTO GALLERYL</p>
          <h1 className="title">Photo Gallery of Our Hotel</h1>
        </div>
        <div className="colum-two">
          <div className="container">
          <a href="#" className="btn">View Gallery</a>
          </div>
          
        </div>
      </div>
      <div className="slider" >

      <Slideshow
        imgs={[
          'https://images.unsplash.com/photo-1585255318859-f5c15f4cffe9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
          'https://images.unsplash.com/photo-1584226761916-3fd67ab5ac3a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
          'https://images.unsplash.com/photo-1585179292338-45ba1f62f082?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
          'https://images.unsplash.com/photo-1584753987666-ead137ec0614?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
          'https://images.unsplash.com/photo-1584691267914-91c0bee55964?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
          'https://images.unsplash.com/photo-1585084335487-f653d0859c14?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
          'https://images.unsplash.com/photo-1583217874534-581393fd5325?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
        ]}
      />
      </div>
    </div>
    );
  };

 export { ReviewOne, ReviewTwo };