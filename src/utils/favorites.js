export function getFavorites() {
  if (localStorage.getItem("myFavorites")) {
    const favorites = JSON.parse(localStorage.getItem("myFavorites"));
    return favorites;
  }
  return [];
}

export function addFavorite(favorite) {
  console.log("add", favorite);
  if (localStorage.getItem("myFavorites")) {
    const favorites = JSON.parse(localStorage.getItem("myFavorites"));
    favorites.push(favorite);
    localStorage.setItem("myFavorites", JSON.stringify(favorites));
  } else {
    localStorage.setItem("myFavorites", JSON.stringify([favorite]));
  }
}

export function removeFavorite(story_id) {
  if (localStorage.getItem("myFavorites")) {
    const favorites = JSON.parse(localStorage.getItem("myFavorites"));
    const idNewsToRemove = favorites.findIndex(
      (n) => n.story_id === story_id
    );
    favorites.splice(idNewsToRemove, 1);
    localStorage.setItem("myFavorites", JSON.stringify(favorites));
  } else {
    console.error("No favorites to remove");
  }
}

export function isInFavorites(story_id) {
  if (localStorage.getItem("myFavorites")) {
    const favorites = JSON.parse(localStorage.getItem("myFavorites"));
    return favorites.some((n) => n.story_id === story_id);
  }
  return false;
}
