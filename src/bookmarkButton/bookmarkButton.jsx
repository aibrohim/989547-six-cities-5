import React from "react";
import {connect} from "react-redux";
import {updateOfferBookmarkStatus} from "../store/api-action";
import classNames from "classnames";
import propTypes from "prop-types";

const BookmarkButton = ({name, id, isFavorite, changeBookmarkStatus, width, height}) => {
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
  name: propTypes.string.isRequired,
  id: propTypes.number.isRequired,
  isFavorite: propTypes.bool.isRequired,
  changeBookmarkStatus: propTypes.func.isRequired,
  width: propTypes.number.isRequired,
  height: propTypes.number.isRequired,
};

export {BookmarkButton};
export default connect(null, mapDispatchToProps)(BookmarkButton);
