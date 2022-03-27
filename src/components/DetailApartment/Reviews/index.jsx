import React, { useState } from "react";

import { TextareaAutosize } from "@mui/material";

import PrimaryButton from "../../PrimaryButton";
import StarRating from "../../StarRating";

import "./reviews.scss";

const ReviewsDetail = () => {
  const [checkLogin, setCheckLogin] = useState(true);
  const [isComment, setIsComment] = useState(false);

  return (
    <main className="reviews-detail-wrapper">
      <section className="reviews-header">
        <section className="reviews-header-left">
          <h1 className="reviews-header-quantity">2 Reviews</h1>
          <StarRating ratingVote="5" isEditable={true} />
        </section>
        {checkLogin && isComment ? (
          <PrimaryButton title="add review" action={() => {}} />
        ) : (
          <PrimaryButton
            title="write a review"
            action={() => setIsComment(true)}
          />
        )}
      </section>
      {isComment && (
        <section className="reviews-post">
          <h1 className="reviews-post-title">Review "Standard Single Room"</h1>
          {checkLogin ? (
            <>
              <section className="reviews-post-vote">
                <p className="reviews-post-text">Your vote: </p>
                <StarRating ratingVote="5" isEditable={true} />
              </section>
              <TextareaAutosize
                maxRows={4}
                placeholder="Please enter your review.!"
                className="reviews-post-textarea"
                required
              />
            </>
          ) : (
            <p
              className="reviews-post-login"
              onClick={() => console.log("run")}
            >
              You must be <span>logged in</span> to post a comment.
            </p>
          )}
        </section>
      )}
      <section className="reviews-comments">
        {[...Array(2)].map((star, index) => {
          return (
            <section className="reviews-comments-content" key={index}>
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
