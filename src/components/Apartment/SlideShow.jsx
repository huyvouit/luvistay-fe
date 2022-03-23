import React, { useState, useEffect } from "react";

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

export default Slideshow;