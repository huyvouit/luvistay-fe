import React, { useState, useEffect } from "react";
import icon_left from "../../assets/icons/arrow-left.svg"
import icon_right from "../../assets/icons/arrow-right.svg"

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
      <img className="mainImg" src={imgs[index]} alt="" />
      <section className="actions">
        <button onClick={prev}>
          <img src={icon_left}/>
        </button>
        <button onClick={next}>
        <img src={icon_right}/>
        </button>
      </section>
    </section>
  );
};

export default Slideshow;
