import React from "react";
import Review from "../review/review.jsx";
import propTypes from "prop-types";

const ReviewsList = ({comments}) => {
  return (
    <ul className="reviews__list">
      {comments.map((comment) => {
        return (
          <Review key={comment.id} comment={comment}/>
        );
      })}
    </ul>
  );
};

ReviewsList.propTypes = {
  comments: propTypes.arrayOf(propTypes.shape({
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    date: propTypes.object.isRequired,
    rate: propTypes.number.isRequired,
    review: propTypes.string.isRequired
  })).isRequired,
};

export default ReviewsList;
