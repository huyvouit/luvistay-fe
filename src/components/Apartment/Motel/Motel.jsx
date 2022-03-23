import React, { useState, useEffect } from "react";
import PrimaryButton from "../../PrimaryButton";
import "./motel.scss";

const Slideshow = ({ imgs }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setIndex(0);
    }, []);

    const next = () => {
        if (index === imgs.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    };
    const prev = () => {
        if (index === 0) {
            setIndex(imgs.length - 1);
        } else {
            setIndex(index - 1);
        }
    };

    return (
        <section className="slideshow">
            <img className="mainImg" src={imgs[index]} />
            <section className="actions">
                <button onClick={prev}>👈</button>
                <button onClick={next}>👉</button>
            </section>
        </section>
    );
};

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
                            <section className="colum-one-review">
                                <img className="colum-one-review-colum-one" />
                                <p className="colum-one-review-colum-two">Adults: 2</p>
                            </section>
                            <section className="colum-one-review">
                                <img className="colum-one-review-colum-one" />
                                <p className="colum-one-review-colum-two">View: beach</p>
                            </section>
                            <section className="colum-one-review">
                                <img className="colum-one-review-colum-one" />
                                <p className="colum-one-review-colum-two">Size: 20m²</p>
                            </section>
                            <section className="colum-one-review">
                                <img className="colum-one-review-colum-one" />
                                <p className="colum-one-review-colum-two">Bed Type: queen bed</p>
                            </section>
                            <section className="colum-one-review">
                                <img className="colum-one-review-colum-one" />
                                <p className="colum-one-review-colum-two">Categories: <span className="hover-text">single</span></p>
                            </section>
                            <section className="colum-one-review">
                                <img className="colum-one-review-colum-one" />
                                <p className="colum-one-review-colum-two">Amenities: <span className="hover-text">air-conditioning</span>, <span className="hover-text">free wi-fi</span>, <span className="hover-text">hairdryer</span>, <span className="hover-text">in-room safety</span>, <span className="hover-text">laundry</span>, <span className="hover-text">minibar</span>, <span className="hover-text">telephone</span></p>
                            </section>
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
