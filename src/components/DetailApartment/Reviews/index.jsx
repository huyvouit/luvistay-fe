import React, { useContext, useEffect, useState } from "react";

import { CircularProgress, TextareaAutosize } from "@mui/material";

import PrimaryButton from "../../PrimaryButton";
import StarRating from "../../StarRating";

import "./reviews.scss";
import { AuthContext } from "../../../hooks/contexts/auth_context";
import {
  getAvgRatingByApartmentApi,
  getReviewByApartmentApi,
} from "../../../redux/Api/detail";
import { useDispatch, useSelector } from "react-redux";
import apartmentApi from "../../../api/aparment_api";
import Moment from "react-moment";

const ReviewsDetail = ({ apartment }) => {
  const dispatch = useDispatch();
  const listReviews = useSelector((state) => state.detailApartment.reviews);
  const maxPage = useSelector((state) => state.detailApartment.maxPageReview);
  const avgRating = useSelector((state) => state.detailApartment.avgRating);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const {
    authState: { isAuthenticated, authLoading, user },
  } = useContext(AuthContext);
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (apartment) {
      if (reviews?.length <= 0) {
        getReviewByApartmentApi(dispatch, {
          id: apartment._id,
          page,
          limit: 5,
        });
      }
      getAvgRatingByApartmentApi(dispatch, apartment._id);
    }
  }, [apartment]);
  console.log(reviews);
  useEffect(() => {
    if (listReviews?.length > 0) {
      setReviews([...reviews, ...listReviews]);
    } else {
      setReviews([]);
    }
  }, [listReviews]);
  const handleAddReview = async () => {
    try {
      setLoading(true);
      const res = await apartmentApi.postReview({
        apartmentId: apartment._id,
        content,
        rating,
      });
      if (res.success) {
        getReviewByApartmentApi(dispatch, {
          id: apartment._id,
          page,
          limit: 5,
        });
        getAvgRatingByApartmentApi(dispatch, apartment._id);
        setLoading(false);
      }
    } catch (error) {}
  };

  const handleLoadMoreReview = () => {
    getReviewByApartmentApi(dispatch, {
      id: apartment._id,
      page: page + 1,
      limit: 5,
    });
    setPage(page + 1);
  };

  return (
    <main className="reviews-detail-wrapper">
      <h1 className="reviews-post-title">Đánh giá "{apartment?.name}"</h1>
      <section className="reviews-header">
        <section className="reviews-header-left">
          <h1 className="reviews-header-quantity">
            {reviews?.length} Đánh giá
          </h1>
          <StarRating rating={avgRating.toString()} isEditable={false} />
        </section>
        {user && (
          <PrimaryButton
            title={
              loading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                "Đánh giá"
              )
            }
            action={handleAddReview}
            style={{ width: "150px" }}
          />
        )}
      </section>
      {user && (
        <section className="reviews-post">
          <section className="reviews-post-vote">
            <p className="reviews-post-text">Đánh giá của bạn: </p>
            <StarRating
              rating={rating}
              isEditable={true}
              setRating={setRating}
            />
          </section>
          <TextareaAutosize
            maxRows={4}
            placeholder="Nhập đánh giá của bạn"
            className="reviews-post-textarea"
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </section>
      )}
      {reviews ? (
        <section className="reviews-comments">
          {reviews.map((item, index) => {
            return (
              <section className="reviews-comments-content" key={index}>
                <img
                  src={`https://secure.gravatar.com/avatar/e913c28282474af166ee791c0f7fae7c?s=64&r=g`}
                  alt=""
                  className="reviews-avatar"
                />
                <section className="reviews-comments-body">
                  <p className="reviews-name">{item?.user?.username}</p>
                  <p className="reviews-date">
                    <Moment format="hh:mm DD/MM/YYYY ">{item?.date}</Moment>
                  </p>
                  <section className="reviews-rating">
                    <StarRating rating={item?.rating} />
                  </section>
                  <p className="reviews-desc">{item?.content}</p>
                </section>
              </section>
            );
          })}
          {page < maxPage && <div>Xem thêm</div>}
        </section>
      ) : (
        <div style={{ padding: "20px 0" }}>Chưa có đánh giá nào</div>
      )}
    </main>
  );
};

export default ReviewsDetail;
