import React, { useState } from "react";
import "./introduce.scss";

const data = [
  {
    id: 1,
    title: "Italia Chicken",
    desc: `With our Italian dishes cooked by
    professional chefs you will be feeling as if
    you are at authentic Italian restaurant. Olive
    oil, vines and wheat bread are the keys of
    Italian kitchen.`,
    active: false,
  },
  {
    id: 2,
    title: "Mexican Chicken",
    desc: `Genuine Mexican prepared at out restaurant
    is delicious, fresh and vibrant. Main feature
    here is chilly - both dried and fresh. Also key
    ingredients of Mexican kitchen are beans
    and corn.`,
    active: false,
  },
  {
    id: 3,
    title: "Vietnam Chicken",
    desc: `Genuine Mexican prepared at out restaurant
    is delicious, fresh and vibrant. Main feature
    here is chilly - both dried and fresh. Also key
    ingredients of Mexican kitchen are beans
    and corn.`,
    active: false,
  },
  {
    id: 4,
    title: "Indian Chicken",
    desc: `Genuine Mexican prepared at out restaurant
    is delicious, fresh and vibrant. Main feature
    here is chilly - both dried and fresh. Also key
    ingredients of Mexican kitchen are beans
    and corn.`,
    active: false,
  },
];

const Introduce = () => {
  const [fakeData, setFakeData] = useState(data);

  const handleOpenItem = (payload) => {
    const Copy = [...fakeData].map((item) =>
      item.id === payload.id && !payload.active
        ? {
            ...payload,
            active: true,
          }
        : {
            ...item,
            active: false,
          }
    );

    setFakeData(Copy);
  };

  return (
    <section className="introduce">
      <section className="introduce-image">
        <img
          src="https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/07/restaurant-1170x1122.jpg"
          alt=""
        />
      </section>
      <section className="introduce-content">
        <p className="introduce-content-title">Our Restaurant</p>
        <p className="introduce-content-subTitle">
          {`The buffet breakfast is served in the lounge on the ground floor and also outside on our little patio.`}
        </p>
        <section className="introduce-content-list">
          {fakeData.map((item, index) => {
            return (
              <section key={index}>
                <section
                  className="introduce-content-list-item"
                  onClick={() => handleOpenItem(item)}
                >
                  <p className={item.active ? "item-text active" : "item-text"}>
                    {item.title}
                  </p>
                  <section className="icon">{item.active ? "-" : "+"} </section>
                </section>
                {item.active && (
                  <section className="introduce-content-list-child">
                    <p className="text">{item.desc}</p>
                  </section>
                )}
              </section>
            );
          })}
        </section>
      </section>
    </section>
  );
};

export default Introduce;
