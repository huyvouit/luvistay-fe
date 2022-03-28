import React from 'react'
import Slideshow from '../../Apartment/SlideShow'
import PrimaryButton from '../../PrimaryButton'
import { MenuItem, Select } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./resultSearch.scss";
import { InformationResultOne, InformationResultTwo } from '../../InformationResult/InformationResult';

const ResultSearch = () => {
  return (
    <main className='result-search'>
      <section className='result-search-container'>
        <h3 className='result-search-container-title'>Standard Single Room</h3>
        <p className='result-search-description'>Standard Single Rooms are designed in open-concept living area and have many facilities.</p>
        <section className='result-search-container-one'>
          <section className='colum-one'>
            <section className='result-search-img'>
              <Slideshow
                imgs={[
                  "https://images.unsplash.com/photo-1585255318859-f5c15f4cffe9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
                  "https://images.unsplash.com/photo-1584226761916-3fd67ab5ac3a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
                  "https://images.unsplash.com/photo-1585179292338-45ba1f62f082?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
                  "https://images.unsplash.com/photo-1584753987666-ead137ec0614?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
                  "https://images.unsplash.com/photo-1584691267914-91c0bee55964?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
                  "https://images.unsplash.com/photo-1585084335487-f653d0859c14?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
                  "https://images.unsplash.com/photo-1583217874534-581393fd5325?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
                  "https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/06/superior-double-room-992x992.jpg",
                ]}
              />
            </section>
            <section className='row-two'>
              <section className='review-colum-one'>
                <InformationResultOne title="2" icon="fa-solid fa-person"/>
                <InformationResultOne title="beach" icon="fa-solid fa-eye"/>
                <InformationResultOne title="20m²" icon="fa-solid fa-expand"/>
                <InformationResultOne title="queen bed" icon="fa-solid fa-bed"/>
              </section>
              <section className='review-colum-two'>
                <InformationResultTwo icon="fa-solid fa-bookmark" description={["single"]}/>
                <InformationResultTwo icon="fa-solid fa-star" description={["air-conditioning","free wi-fi","hairdryer","in-room safety","laundry","minibar","telephone"]}/>
              </section>
            </section>
          </section>
          <section className='colum-two'>
            <section className='responsive'>
              <h6 className='colum-two-title'>Prices start at:</h6>
              <p className='colum-two-price'><span className='colum-two-price-one'>$119 </span><span className='colum-two-price-two'>/ per night</span></p>
            </section>
            <Select defaultValue="1" className="selectField">
              {[...Array(5)].map((x, i) => (
                <MenuItem value={i + 1} key={i}>
                  {i + 1}
                </MenuItem>
              ))}
            </Select>
            <p className='colum-two-description'>of 5 accommodations available.</p>
            <PrimaryButton title="Book" />
          </section>
        </section>
      </section>
    </main>
  )
}

export default ResultSearch