import { Link } from "react-router-dom";
import { Star } from "phosphor-react";

import * as S from "./styles";

const imageUrl = import.meta.env.VITE_IMG;

export const MovieCard = ({ movie, showLink = true }) => {
  return (
    <S.Card>
      <S.ContainerImg>
        <img src={imageUrl + movie.poster_path} alt={movie.title} />
      </S.ContainerImg>
      <S.MovieInfo>
        <h2>{movie.title}</h2>
        <p>
          <Star size={16} color="#ffe485" weight="fill" /> {movie.vote_average}
        </p>
        {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
      </S.MovieInfo>
    </S.Card>
  );
};
