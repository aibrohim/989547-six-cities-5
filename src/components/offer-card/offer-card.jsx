import React from "react";
import {Link} from "react-router-dom";
import propTypes from "prop-types";
import {connect} from "react-redux";
import {hoverOffer} from "../../store/action.js";
import {updateOfferBookmarkStatus} from "../../store/api-action";

class OfferCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleBookmarkClick = this.handleBookmarkClick.bind(this);
  }

  handleBookmarkClick() {
    const {offer, changeBookmarkStatus} = this.props;
    changeBookmarkStatus(offer.id, Number(!offer.isFavorite));
  }

  render() {
    const {onHoverOfferAction, className, block, offer} = this.props;
    const {id, isPremium, previewImg, cost, isFavorite, rate, title, type} = offer;


    const onMouseOver = () => onHoverOfferAction(offer);
    return (
      <article className={`${className} place-card`} onMouseOver={onMouseOver}>
        {
          isPremium
            ? <div className="place-card__mark">
              <span>Premium</span>
            </div>
            : ``
        }
        <div className={`${block}__image-wrapper place-card__image-wrapper`}>
          <Link to={{
            pathname: `/offer/${id}`,
            offer
          }}>
            <img className="place-card__image" src={previewImg} width="260" height="200"/>
          </Link>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{cost}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className={
              isFavorite
                ? `place-card__bookmark-button place-card__bookmark-button--active button`
                : `place-card__bookmark-button button`
            } type="button" onClick={this.handleBookmarkClick}>
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `${rate * 20}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to={{
              pathname: `/offer/${id}`,
              offer
            }}>{title}</Link>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onHoverOfferAction(offer) {
    dispatch(hoverOffer(offer));
  },
  changeBookmarkStatus(id, status) {
    dispatch(updateOfferBookmarkStatus(id, status));
  }
});

OfferCard.propTypes = {
  offer: propTypes.object,
  className: propTypes.string.isRequired,
  block: propTypes.string.isRequired,
  onHoverOfferAction: propTypes.func,
  changeBookmarkStatus: propTypes.func.isRequired
};

export {OfferCard};
export default connect(``, mapDispatchToProps)(OfferCard);
