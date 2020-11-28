import React, {createRef} from "react";
import {postComment} from "../../store/api-action";
import {connect} from "react-redux";
import propTypes from "prop-types";

class CommentForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rating: null,
      review: ``
    };
    this.buttonRef = createRef();
    this.formRef = createRef();

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  componentDidMount() {
    this.buttonRef.current.disabled = true;
  }

  handleFormSubmit(evt) {
    evt.preventDefault();
    const adaptedComment = Object.assign(
        {},
        this.state,
        {
          comment: this.state.review
        }
    );

    delete adaptedComment.review;
    this.props.postCommentAction(this.props.id, adaptedComment);
    this.buttonRef.current.disabled = true;
    this.formRef.current.reset();
    this.setState({
      rating: null,
      review: ``
    });
  }

  handleFieldChange(evt) {
    const {name, value} = evt.target;
    this.setState({
      [name]: value
    });
  }

  componentDidUpdate() {
    if (this.state.rating === null || this.state.review.length < 50 || this.state.review.length > 300) {
      this.buttonRef.current.disabled = true;
    } else {
      this.buttonRef.current.disabled = false;
    }
  }

  render() {
    return (
      <form className="reviews__form form" action="#" method="post" onSubmit={this.handleFormSubmit} ref={this.formRef}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" onChange={this.handleFieldChange}/>
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" onChange={this.handleFieldChange}/>
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" onChange={this.handleFieldChange}/>
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" onChange={this.handleFieldChange}/>
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" onChange={this.handleFieldChange}/>
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </div>
        <textarea className="reviews__textarea form__textarea" id="review" name="review" minLength="50" maxLength="300" placeholder="Tell how was your stay, what you like and what can be improved" onChange={this.handleFieldChange} />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" ref={this.buttonRef}>Submit</button>
        </div>
      </form>

    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  postCommentAction(id, commentInfo) {
    dispatch(postComment(id, commentInfo));
  }
});

CommentForm.propTypes = {
  postCommentAction: propTypes.func,
  id: propTypes.number.isRequired
};

export {CommentForm};
export default connect(null, mapDispatchToProps)(CommentForm);
