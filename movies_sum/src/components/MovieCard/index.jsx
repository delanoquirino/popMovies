const imageUrl = import.meta.env.VITE_IMG;

export const MovieCard = ({ movie }) => {
  return (
    <div>
      <img src={imageUrl + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <Star size={28} color="#ffe485" weight="thin" /> {movie.vote_average}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  );
};
