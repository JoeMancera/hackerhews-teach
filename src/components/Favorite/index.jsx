import React, { useState, useEffect } from "react";
import { addFavorite, removeFavorite, isInFavorites } from "utils/favorites";
import favoriteIconActive from "assets/favorite-active.svg";
import favoriteIconInactive from "assets/favorite-inactive.svg";
import { FavButton, FavIcon } from "./styles";

export const Favorite = ({ infoNews, idNews }) => {
  // TODO: refactor this to a custom hook
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    if (!isFavorite) {
      addFavorite(infoNews);
    } else {
      removeFavorite(infoNews.story_id);
    }
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    setIsFavorite(isInFavorites(infoNews.story_id));
  }, [infoNews, isFavorite]);

  return (
    <FavButton onClick={handleClick}>
      <FavIcon
        src={isFavorite ? favoriteIconActive : favoriteIconInactive}
        alt={isFavorite ? "Remove from favorites" : "Add to favorites"}
      />
    </FavButton>
  );
};
