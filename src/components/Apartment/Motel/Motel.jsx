import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PrimaryButton from "../../PrimaryButton";
import "./motel.scss";
import Slideshow from "../SlideShow";
import { InformationResultOne, InformationResultTwo } from "../../InformationResult/InformationResult";


const Motel = () => {
    return (
        <main className="motel">
            <section className="motel-container">
                <section className="motel-colum-one">
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
                <section className="motel-colum-two">
                    <section className="motel-colum-two-container">
                        <section className="colum-one">
                            <h2 className="colum-one-title">Standard Single Room</h2>
                            <p className="colum-one-description">Standard Single Rooms are designed in open-concept living area and have many facilities.</p>
                            <InformationResultOne title="2" icon="fa-solid fa-person" />
                            <InformationResultOne title="beach" icon="fa-solid fa-eye" />
                            <InformationResultOne title="20m²" icon="fa-solid fa-expand" />
                            <InformationResultOne title="queen bed" icon="fa-solid fa-bed" />
                            <InformationResultTwo icon="fa-solid fa-bookmark" description={["single"]} />
                            <InformationResultTwo icon="fa-solid fa-star" description={["air-conditioning", "free wi-fi", "hairdryer", "in-room safety", "laundry", "minibar", "telephone"]} />
                        </section>
                        <section className="colum-two">
                            <section className="colum-two-responsive">
                                <p className="colum-two-title">Prices start at:</p>
                                <p className="colum-two-price"><span className="colum-two-price-one">$119</span><span className="colum-two-price-two">/ per night</span></p>
                            </section>
                            <section className="colum-two-responsive responsive-two ">
                                <section className="btn-primary" >
                                    <PrimaryButton title="BOOK" />
                                </section>
                                <section className="outlined-button">
                                    <p className="outlined-button-title">
                                        VIEW DETAILS
                                    </p>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
        </main>
    );
};

export default Motel;
