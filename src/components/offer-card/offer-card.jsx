import React from "react";
import {Link} from "react-router-dom";
import propTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action.js";

const OfferCard = ({hoverOffer, className, block, offer}) => {
  const {id, isPremium, images, cost, isFavorite, rate, title, type} = offer;
  const onMouseOver = () => hoverOffer(offer);
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
          <img className="place-card__image" src={images[0].url} width="260" height="200" alt={images[0].description} />
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
          } type="button">
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
};

const mapDispatchToProps = (dispatch) => ({
  hoverOffer(offer) {
    dispatch(ActionCreator.hoverOffer(offer));
  }
});

OfferCard.propTypes = {
  offer: propTypes.shape({
    id: propTypes.number.isRequired,
    isPremium: propTypes.bool.isRequired,
    images: propTypes.arrayOf(propTypes.shape({
      url: propTypes.string.isRequired,
      description: propTypes.string.isRequired
    })),
    cost: propTypes.number.isRequired,
    isFavorite: propTypes.bool.isRequired,
    rate: propTypes.number.isRequired,
    type: propTypes.string.isRequired,
    title: propTypes.string.isRequired
  }),
  className: propTypes.string.isRequired,
  block: propTypes.string.isRequired,
  hoverOffer: propTypes.func,
};

export {OfferCard};
export default connect(``, mapDispatchToProps)(OfferCard);
