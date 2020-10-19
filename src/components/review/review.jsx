import React from "react";
import {MONTHS} from "../../consts.js";
import propTypes from "prop-types";

const Review = ({comment}) => {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={comment.avatar} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {comment.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${comment.rate * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment.review}
        </p>
        <time className="reviews__time" dateTime={comment.date.toISOString()}>{`${MONTHS[comment.date.getMonth() + 1]} ${comment.date.getFullYear()}`}</time>
      </div>
    </li>
  );
};

Review.propTypes = {
  comment: propTypes.shape({
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    date: propTypes.object.isRequired,
    rate: propTypes.number.isRequired,
    review: propTypes.string.isRequired
  })
};

export default Review;
