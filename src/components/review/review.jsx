import React from "react";
import {MONTHS} from "../../consts.js";
import propTypes from "prop-types";

const Review = ({review}) => {
  const {user, comment, rating} = review;
  const date = new Date(review.date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date.toISOString()}>{`${MONTHS[date.getMonth() + 1]} ${date.getFullYear()}`}</time>
      </div>
    </li>
  );
};

Review.propTypes = {
  review: propTypes.shape({
    user: propTypes.shape({
      avatarUrl: propTypes.string.isRequired,
      name: propTypes.string
    }).isRequired,
    rating: propTypes.number.isRequired,
    date: propTypes.string.isRequired,
    comment: propTypes.string.isRequired,
  })
};

export default Review;
