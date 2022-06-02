import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./informationResult.scss";

const InformationResultOne = (props) => {
  const { title, icon, ...other } = props;
  return (
    <section className="review-container">
      <FontAwesomeIcon className="review-container-icon" icon={icon} />
      <p className="review-container-text" {...other}>
        {title}
      </p>
    </section>
  );
};

const InformationResultTwo = (props) => {
  const { title, icon, description } = props;
  return (
    <section className="review-container">
      <FontAwesomeIcon className="review-container-icon" icon={icon} />
      <p className="review-container-text">
        {" "}
        {title}
        {description.map((item, index) => {
          if (description.length - 1 === index) {
            return <span className="review-container-hover">{item}</span>;
          } else {
            return <span className="review-container-hover">{item}, </span>;
          }
        })}
      </p>
    </section>
  );
};

export { InformationResultOne, InformationResultTwo };
