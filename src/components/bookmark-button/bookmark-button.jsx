import React from "react";
import {connect} from "react-redux";
import {updateOfferBookmarkStatus} from "../../store/api-action.js";
import classNames from "classnames";
import propTypes from "prop-types";

const BookmarkButton = ({type, id, isFavorite, changeBookmarkStatus}) => {
  const {name, width, height} = type;
  const handleClick = () => {
    changeBookmarkStatus(id, Number(!isFavorite));
  };

  const buttonActiveClass = () => {
    if (isFavorite) {
      return `${name}__bookmark-button--active`;
    }
    return ``;
  };

  const svgClass = () => `${name}__bookmark-icon`;

  return (
    <button className={classNames(`${name}__bookmark-button button`, buttonActiveClass())} type="button" onClick={handleClick}>
      <svg className={svgClass()} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeBookmarkStatus(id, status) {
    dispatch(updateOfferBookmarkStatus(id, status));
  }
});

BookmarkButton.propTypes = {
  type: propTypes.shape({
    name: propTypes.string.isRequired,
    width: propTypes.number.isRequired,
    height: propTypes.number.isRequired
  }).isRequired,
  id: propTypes.number.isRequired,
  isFavorite: propTypes.bool.isRequired,
  changeBookmarkStatus: propTypes.func.isRequired
};

export {BookmarkButton};
export default connect(null, mapDispatchToProps)(BookmarkButton);
