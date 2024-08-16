import { CardContent, CardImage, CardInfo, CardMovie, CardOverlay, CardTitle } from "./small-card-top-celebrity-styles";
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

interface MovieEmphasisProps {
  movie: Movie;
  imageBaseUrl: string;
}

export function SmallCardTopCelebrity({ movie, imageBaseUrl }: MovieEmphasisProps) {
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
              </CardInfo>
            </CardContent>
          </Link>
        </>
      )}
    </CardMovie>
  );
}
