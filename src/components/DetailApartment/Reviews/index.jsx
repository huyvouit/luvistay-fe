import React from "react";
import PrimaryButton from "../../PrimaryButton";

import "./reviews.scss";

const ReviewsDetail = () => {
  return (
    <main className="reviews-detail-wrapper">
      <section className="reviews-header">
        <h1 className="reviews-header-quantity">
          2 Reviews{" "}
          <span>
            <input class="rating" max="5" step="1" type="range" value="0" />
          </span>
        </h1>
        <PrimaryButton title="write a review" />
      </section>
    </main>
  );
};

export default ReviewsDetail;
