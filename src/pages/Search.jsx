import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MovieCard } from "../components/MovieCard";

import * as S from "../styles/pages/search";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

export const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
    getSearchedMovies(searchWithQueryURL);
  }, [query]);

  return (
    <S.Container>
      <S.Title>
        Resultados: <S.QueryText>{query}</S.QueryText>
      </S.Title>
      <S.MoviesContainer>
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </S.MoviesContainer>
    </S.Container>
  );
};
