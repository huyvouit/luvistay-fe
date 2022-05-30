import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./StarRating.scss";

const StarRating = ({ ratingVote, isEditable, rating, setRating }) => {
  return (
    <main className="star-rating">
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              className="rating-star-radio"
              onClick={isEditable ? () => setRating(ratingValue) : () => {}}
            />
            <FontAwesomeIcon
              icon="fa-solid fa-star"
              // size={80}
              color={ratingValue <= rating ? "#c1b086" : "#ebebec"}
              className="rating-star-star"
              style={{ cursor: isEditable && "pointer" }}
            />
          </label>
        );
      })}
    </main>
  );
};
export default StarRating;
