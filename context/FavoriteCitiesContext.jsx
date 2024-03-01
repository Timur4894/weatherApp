import React, { createContext, useContext, useState } from 'react';

const FavoriteCitiesContext = createContext();

export const useFavoriteCities = () => useContext(FavoriteCitiesContext);

export const FavoriteCitiesProvider = ({ children }) => {
  const [favoriteCities, setFavoriteCities] = useState([]);

  const addFavoriteCity = (city) => {
    setFavoriteCities([...favoriteCities, city]);
  };

  const removeFavoriteCity = (city) => {
    setFavoriteCities(favoriteCities.filter((c) => c !== city));
  };

  return (
    <FavoriteCitiesContext.Provider value={{ favoriteCities, addFavoriteCity, removeFavoriteCity }}>
      {children}
    </FavoriteCitiesContext.Provider>
  );
};
