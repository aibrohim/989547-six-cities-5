import React from "react";
import Review from "../review/review.jsx";
import propTypes from "prop-types";

const ReviewsList = ({comments}) => {
  return (
    <ul className="reviews__list">
      {comments.map((comment) => {
        return (
          <Review key={comment.id} review={comment}/>
        );
      })}
    </ul>
  );
};

ReviewsList.propTypes = {
  comments: propTypes.arrayOf(propTypes.shape({
    avatar: propTypes.string,
    name: propTypes.string,
    date: propTypes.string,
    rate: propTypes.number,
    review: propTypes.string
  })).isRequired,
};

export default ReviewsList;
