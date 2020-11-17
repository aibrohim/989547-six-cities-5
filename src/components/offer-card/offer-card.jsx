import React from "react";
import {Link} from "react-router-dom";
import propTypes from "prop-types";
import {connect} from "react-redux";
import {hoverOffer} from "../../store/action.js";

const adaptToClient = (data) => {
  const adaptedData = Object.assign(
      {},
      data,
      {
        isPremium: data.is_premium,
        previewImg: data.preview_image,
        cost: data.price,
        isFavorite: data.is_favorite,
        rate: data.rating
      }
  );

  delete adaptedData.is_premium;
  delete adaptedData.preview_image;
  delete adaptedData.price;
  delete adaptedData.is_favorite;
  delete adaptedData.rating;

  return adaptedData;
};

const OfferCard = ({onHoverOfferAction, className, block, offer}) => {
  const {id, isPremium, previewImg, cost, isFavorite, rate, title, type} = adaptToClient(offer);

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
  onHoverOfferAction(offer) {
    dispatch(hoverOffer(offer));
  }
});

OfferCard.propTypes = {
  offer: propTypes.object,
  className: propTypes.string.isRequired,
  block: propTypes.string.isRequired,
  onHoverOfferAction: propTypes.func,
};

export {OfferCard};
export default connect(``, mapDispatchToProps)(OfferCard);
