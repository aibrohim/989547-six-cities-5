import React from "react";
import CommentForm from "../comment-form/comment-form";
import propTypes from "prop-types";
import ReviewsList from "../reviews-list/reviews-list.jsx";
import Map from "../map/map";
import NearOffersList from "../near-offers-list/near-offers-list";
import {withDataLoading} from "../../hocks/with-data-loading";
import {connect} from "react-redux";
import classNames from "classnames";
import {Link} from "react-router-dom";
import UserNav from "../user-nav/user-nav";
import {AuthorizationStatus} from "../../consts";
import BookmarkButton from "../bookmarkButton/bookmarkButton";
import {getComments, getNearbyOffers, getOfferById} from "../../store/api-action";

const Offer = (props) => {
  const {offer, comments, nearbyHotels, authorizationStatus} = props;
  const {isPremium, description, bedrooms, adults, cost, isFavorite, rate, title, type, host, id} = offer;
  const {avatarUrl, name, isPro} = host;

  const images = offer.images.map((image, index) => ({
    url: image,
    id: index
  }));

  const goods = offer.goods.map((good, index) => ({
    name: good,
    id: index
  }));

  const commentComponent = () => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      return <CommentForm id={id}/>;
    }
    return null;
  };


  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <UserNav />
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
                <BookmarkButton name="property" id={id} isFavorite={isFavorite} width={31} height={33}/>
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
                  {bedrooms} Bedrooms
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
                {commentComponent()}
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
  nearbyHotels: propTypes.array.isRequired,
  authorizationStatus: propTypes.string.isRequired
};

const mapStateToProps = ({PROCESS, USER}) => ({
  offer: PROCESS.activeOffer,
  comments: PROCESS.comments,
  nearbyHotels: PROCESS.nearbyHotels,
  authorizationStatus: USER.authorizationStatus,
  isDataLoaded: PROCESS.isOfferLoaded && PROCESS.isCommentsLoaded && PROCESS.isNearbyOffersLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  loadComments(id) {
    dispatch(getComments(id));
  },
  loadOffer(id) {
    dispatch(getOfferById(id));
  },
  loadNearbyOffers(id) {
    dispatch(getNearbyOffers(id));
  },
});

export {Offer};
export default connect(mapStateToProps, mapDispatchToProps)(withDataLoading(Offer));
