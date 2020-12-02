import React from "react";
import {BookmarkButton} from "./bookmark-button";
import renderer from "react-test-renderer";

const BookmarkButtonTypesWithProperties = {
  PROPERTY: {
    name: `property`,
    width: 31,
    height: 33
  },
  PLACE_CARD: {
    name: `place-card`,
    width: 18,
    height: 19
  }
};

const id = 45;

const isFavorite = true;

describe(`Should Bookmark button render correctly`, () => {
  it(`Button with active status`, () => {
    const tree = renderer
    .create(<BookmarkButton
      type={BookmarkButtonTypesWithProperties.PROPERTY}
      id={id}
      isFavorite={isFavorite}
      changeBookmarkStatus={() => {}}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Button with non active status`, () => {
    const tree = renderer.create(<BookmarkButton
      type={BookmarkButtonTypesWithProperties.PROPERTY}
      id={id}
      isFavorite={!isFavorite}
      changeBookmarkStatus={() => {}}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
