import React from "react";
import { useState, useEffect } from "react";
import { MovieCard } from "../components/MovieCard";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

import * as S from "../styles/pages/home";

export const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <S.Container>
      <S.Title>Melhores Filmes</S.Title>
      <S.MoviesContainer>
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </S.MoviesContainer>
    </S.Container>
  );
};
