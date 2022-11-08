import { createContext, useContext, useState } from "react";

const MovieCardContext = createContext();

export const MovieCardProvider = ({ children }) => {
  const [movieCard, setMovieCard] = useState([]);
  const values = { movieCard, setMovieCard };
  return (
    <MovieCardContext.Provider value={values}>
      {children}
    </MovieCardContext.Provider>
  );
};

export const useMovieCard = () => useContext(MovieCardContext);
