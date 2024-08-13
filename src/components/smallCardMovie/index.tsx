import { FaStar } from "react-icons/fa";
import { CardContent, CardImage, CardInfo, CardMovie, CardOverlay, CardTitle } from "./small-card-movie-styles";
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

export function SmallCardMovie({ movie, imageBaseUrl }: MovieEmphasisProps) {
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
              <CardTitle>{movie.title}</CardTitle>
              <CardInfo>
                <FaStar size={20} color="#FFFF00" />
                {truncateToOneDecimal(Number(movie.vote_average))}
              </CardInfo>
            </CardContent>
          </Link>
        </>
      )}
    </CardMovie>
  );
}
