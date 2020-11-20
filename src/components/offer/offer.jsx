import React from "react";
import CommentForm from "../comment/comment";
import propTypes from "prop-types";
import ReviewsList from "../reviews-list/reviews-list.jsx";
import Map from "../map/map";
import NearOffersList from "../near-offers-list/near-offers-list";
import {withDataLoading} from "../../hocks/with-data-loading";
import {connect} from "react-redux";
import classNames from "classnames";

const Offer = (props) => {
  const {offer, comments, nearbyHotels} = props;
  const {isPremium, description, rooms, adults, cost, isFavorite, rate, title, type, host} = offer;
  const {avatarUrl, name, isPro} = host;

  const images = offer.images.map((image, index) => ({
    url: image,
    id: index
  }));

  const goods = offer.goods.map((good, index) => ({
    name: good,
    id: index
  }));


  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image) => {
                return (<div key={image.id} className="property__image-wrapper">
                  <img className="property__image" src={image.url} alt="Photo studio" />
                </div>);
              })}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium
                ? <div className="property__mark">
                  <span>Premium</span>
                </div>
                : ``}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={isFavorite === true
                  ? `property__bookmark-button property__bookmark-button--active button`
                  : `property__bookmark-button button`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${rate * 20}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rate}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {rooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {adults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{cost}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good) => {
                    return (
                      <li key={good.id} className="property__inside-item">
                        {good.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={classNames(`property__avatar-wrapper user__avatar-wrapper`, {"property__avatar-wrapper--pro": isPro})}>
                    <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>

                <ReviewsList comments={comments}/>
                <CommentForm />
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map offers={nearbyHotels} styles={{width: `1144px`, marginLeft: `auto`, marginRight: `auto`}}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <NearOffersList offers={nearbyHotels} />
          </section>
        </div>
      </main>
    </div>
  );
};

Offer.propTypes = {
  offer: propTypes.object.isRequired,
  comments: propTypes.array.isRequired,
  nearbyHotels: propTypes.array.isRequired
};

const mapStateToProps = ({PROCESS}) => ({
  offer: PROCESS.activeOffer,
  comments: PROCESS.comments,
  nearbyHotels: PROCESS.nearbyHotels
});

export {Offer};
export default connect(mapStateToProps)(withDataLoading(Offer));
