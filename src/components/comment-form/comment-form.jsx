import React from "react";
import {postComment} from "../../store/api-action";
import {connect} from "react-redux";
import propTypes from "prop-types";
import {CommentPostStatus} from "../../consts";
import {changeCommentPostStatus} from "../../store/action.js";
import {withComment} from "../../hocks/with-comment";

const CommentForm = (props) => {
  const {sendStatus, onFieldsChange, formRef, onFormSubmit, buttonRef} = props;
  const message = () => {
    switch (sendStatus) {
      case CommentPostStatus.ERROR:
        return <p className="reviews__status reviews__status--error">Error</p>;
      case CommentPostStatus.SUCCESSFULLY:
        return <p className="reviews__status reviews__status--success">Successfully sent</p>;
      case CommentPostStatus.SENDING:
        return <p className="reviews__status reviews__status--sending">Sending...</p>;
    }
    return ``;
  };
  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={onFormSubmit} ref={formRef} onChange={onFieldsChange}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"/>
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"/>
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"/>
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"/>
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"/>
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" minLength="50" maxLength="300" placeholder="Tell how was your stay, what you like and what can be improved" />
      {message()}
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" ref={buttonRef}>Submit</button>
      </div>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  postCommentAction(id, commentInfo) {
    dispatch(postComment(id, commentInfo));
  },
  changeSendStatus(status) {
    dispatch(changeCommentPostStatus(status));
  }
});

const mapStateToProps = ({PROCESS}) => ({
  sendStatus: PROCESS.commentPostStatus
});

CommentForm.propTypes = {
  onFieldsChange: propTypes.func.isRequired,
  sendStatus: propTypes.string.isRequired,
  formRef: propTypes.object.isRequired,
  buttonRef: propTypes.object.isRequired,
  onFormSubmit: propTypes.func.isRequired
};

export {CommentForm};
export default connect(mapStateToProps, mapDispatchToProps)(withComment(CommentForm));
