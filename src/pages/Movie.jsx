import { Clock, FileText, House, TrendUp, Wallet } from "phosphor-react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { MovieCard } from "../components/MovieCard";

import * as S from "../styles/pages/movie";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export const Movie = () => {
  //pegando id que esta na url
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`;
    getMovie(movieUrl);
  }, []);

  return (
    <S.MoviePage>
      {movie && (
        <>
          <S.FilmImage>
            <MovieCard movie={movie} showLink={false} />
          </S.FilmImage>
          <S.TagLine>{movie.tagline}</S.TagLine>
          <S.Info>
            <h3>
              <Wallet size={28} color="#ffe485" />
              Orçamento:
            </h3>
            <p>{formatCurrency(movie.budget)}</p>
          </S.Info>
          <S.Info>
            <h3>
              <TrendUp size={28} color="#ffe485" />
              Faturamento:
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </S.Info>
          <S.Info>
            <h3>
              <Clock size={28} color="#ffe485" />
              Duração:
            </h3>
            <p>{movie.runtime} minutos</p>
          </S.Info>
          <S.Info>
            <h3>
              <FileText size={28} color="#ffe485" />
              Descrição:
            </h3>
          </S.Info>
          <S.InfoDescription>
            <p>{movie.overview}</p>
          </S.InfoDescription>
        </>
      )}
      <S.Back>
        <Link to="/">
          <House size={28} color="#78e08f" weight="thin" />
        </Link>
      </S.Back>
    </S.MoviePage>
  );
};
