import React, { useEffect, useState } from "react";
import { NewsList } from "components/NewsList";
import { NewsResult } from "components/NewsResult";
import { getFavorites } from "utils/favorites";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  return (
    <NewsResult>
      {favorites.length > 0 ? (
        <NewsList newsList={favorites} />
      ) : (
        "No favorites yet!"
      )}
    </NewsResult>
  );
}
