import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovieCard } from "../components/MovieCard";

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

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`;
    getMovie(movieUrl);
  }, []);

  return (
    <div>
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
        </>
      )}
    </div>
  );
};
