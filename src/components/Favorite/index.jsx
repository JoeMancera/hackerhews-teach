import React, { useState, useEffect } from "react";
import favoriteIconActive from "assets/favorite-active.svg";
import favoriteIconInactive from "assets/favorite-inactive.svg";
import { FavButton, FavIcon } from "./styles";

export const Favorite = ({ infoNews, idNews }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    if (!isFavorite) {
      if (localStorage.getItem("myFavorites")) {
        const favorites = JSON.parse(localStorage.getItem("myFavorites"));
        favorites.push(infoNews);
        localStorage.setItem("myFavorites", JSON.stringify(favorites));
      } else {
        localStorage.setItem("myFavorites", JSON.stringify([infoNews]));
      }
    } else {
      if (localStorage.getItem("myFavorites")) {
        const favorites = JSON.parse(localStorage.getItem("myFavorites"));
        const idNewsToRemove = favorites.findIndex(
          (n) => n.story_id === infoNews.story_id
        );
        favorites.splice(idNewsToRemove, 1);
        localStorage.setItem("myFavorites", JSON.stringify(favorites));
      } else {
        console.error("No favorites to remove");
      }
    }
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    if (localStorage.getItem("myFavorites")) {
      const favorites = JSON.parse(localStorage.getItem("myFavorites"));
      setIsFavorite(favorites.some((n) => n.story_id === infoNews.story_id));
    }
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
