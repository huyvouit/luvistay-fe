import React from 'react'
import Booking from '../Booking'
import headerStar from "../../assets/images/header_star.png";
import PrimaryButton from '../PrimaryButton'
import LogoPayment from "../../assets/images/payments.png"
import "./search.scss"
import SpecialOffer from './SpecialOffer/SpecialOffer';
import ResultSearch from './ResultSearch/ResultSearch';

const Search = () => {
    return (
        <main className='search'>
            <section className='search-container'>
                <section className='search-colum-one'>
                    <section className="pageherder" >
                        <section className="page-header-star">
                            <img className='img' src={headerStar} alt="header star" title="five star" />
                        </section>
                        <section className="page-header-title">
                            <h1 className='title'>Search Results</h1>
                        </section>
                    </section>
                    <p className='search-description'>4 accommodations found from April 4, 2022 – till April 5, 2022</p>
                    <section className='box-suggest'>
                        <h4 className='box-suggest-title'>Recommended for 1 adult</h4>
                        <section className='row-one'>
                            <p><span className='search-description' >1 ×</span><span className='room-name'>Standard Single Room</span></p>
                            <p className='price'>$119</p>
                        </section>
                        <p className='search-description' >Max occupancy: 2 adults</p>
                        <section className='row-two'>
                            <p className='colum-one'><span className='search-description'>Total:  </span><span className='price'>$119</span></p>
                            <section className='btn'>
                                <PrimaryButton title="RESERVE" />
                            </section>
                        </section>
                    </section>
                    <p className='search-description'>Select from available accommodations.</p>
                    <section>
                        <ResultSearch/>
                        <ResultSearch/>
                        <ResultSearch/>
                        <ResultSearch/>
                    </section>

                </section>
                <section className='search-colum-two'>
                    <section className='box-search'>
                        <Booking textButton="Search" />
                    </section>
                    <section className='special-offers'>
                        <h4 className='special-offers-title'>Special Offers</h4>
                        <SpecialOffer/>
                        <SpecialOffer/>
                        <SpecialOffer/>
                    </section>
                    <section className='box-about'>
                        <h4 className='box-about-title'>Terms & Conditions</h4>
                        <p className='search-description box-about-descript'>We are one of the most recognized happy vacation makers in Greece – we provide a wide range of great offers for any occasion since 2015.</p>
                        <p className='search-description box-about-descript'>We accept payments in any way convenient for you</p>
                        <img className='box-about-img' src={LogoPayment} />
                    </section>
                </section>
            </section>
        </main>
    )
}

export default Search