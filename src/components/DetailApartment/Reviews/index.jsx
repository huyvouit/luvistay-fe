import React from "react";
import PrimaryButton from "../../PrimaryButton";
import StarRating from "../../StarRating";

import "./reviews.scss";

const ReviewsDetail = () => {
  return (
    <main className="reviews-detail-wrapper">
      <section className="reviews-header">
        <section className="reviews-header-left">
          <h1 className="reviews-header-quantity">2 Reviews</h1>
          <StarRating ratingVote="5" />
        </section>
        <PrimaryButton title="write a review" />
      </section>
      <section className="reviews-comments">
        {[...Array(2)].map((star, index) => {
          return (
            <section className="reviews-comments-content">
              <img
                src={`https://secure.gravatar.com/avatar/e913c28282474af166ee791c0f7fae7c?s=64&r=g`}
                alt=""
                className="reviews-avatar"
              />
              <section className="reviews-comments-body">
                <p className="reviews-name">NATHAN REYNOLDS</p>
                <p className="reviews-date">JULY 16, 2019 AT 2:04 PM</p>
                <section className="reviews-rating">
                  <StarRating ratingVote="5" />
                </section>
                <p className="reviews-desc">
                  Room is fully equipped and design is very modern and soothing.
                  View from the window is breathtaking.
                </p>
              </section>
            </section>
          );
        })}
      </section>
    </main>
  );
};

export default ReviewsDetail;
