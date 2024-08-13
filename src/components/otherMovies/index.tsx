import { FaPlay, FaStar } from "react-icons/fa";
import { CardContent, CardImage, CardInfo, CardMovie, CardOverlay, CardTitle, CardTrailer } from "./other-movies-styles";
import { Link } from "react-router-dom";

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: string;
  popularity: string;
}

function truncateToOneDecimal(num: number) {
  return Math.trunc(num * 10) / 10;
}

interface MovieEmphasisProps {
  movie: Movie;
  imageBaseUrl: string;
}

export function OtherMovies({ movie, imageBaseUrl }: MovieEmphasisProps) {
  return (
    <CardMovie key={movie.id}>
      {movie.poster_path && (
        <>
          <Link to={`/movie/${movie.id}`}>
            <CardImage
              src={`${imageBaseUrl}${movie.poster_path}`}
              alt={movie.title}
            />
            <CardOverlay />
            <CardContent>
              <CardInfo>
                <FaStar size={20} color="#FFFF00" />
                {truncateToOneDecimal(Number(movie.vote_average))}
              </CardInfo>
              <CardTitle>{movie.title}</CardTitle>
              <CardTrailer>Assistir ao trailer <FaPlay size={15} /></CardTrailer>
            </CardContent>
          </Link>
        </>
      )}
    </CardMovie>
  );
}
