import React from "react";
import Review from "../review/review.jsx";
import propTypes from "prop-types";

const ReviewsList = ({comments}) => {
  const MAX_COMMENTS_COUNT = 10;
  return (
    <ul className="reviews__list">
      {comments.map((comment, index) => {
        if (!(index >= MAX_COMMENTS_COUNT)) {
          return (
            <Review key={comment.id} review={comment}/>
          );
        }
        return ``;
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
