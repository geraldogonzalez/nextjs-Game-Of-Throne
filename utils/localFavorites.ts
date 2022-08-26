
const localFavorite = (id: number) => {
  
  let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  if (favorites.includes(id)) {
    favorites = favorites.filter(favorite => favorite !== id);
  }
  else {
    favorites.push(id);
  }
  localStorage.setItem('favorites', JSON.stringify(favorites));

};

const existInFavorites = (id: number) => {
  let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
  return favorites.includes(id);
};

const favorites = ():number[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
};

export default {
  existInFavorites,
  localFavorite,
  favorites,
}