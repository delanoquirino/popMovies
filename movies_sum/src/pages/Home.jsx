import React from "react";
import { useState, useEffect } from "react";

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
    <div>
      <h2>Melhores Filmes</h2>
      {topMovies.length === 0 && <p>Carregando...</p>}
      <div>
        {topMovies.length > 0 &&
          topMovies.map((movie, i) => <p key={i}>{movie.title}</p>)}
      </div>
    </div>
  );
};
