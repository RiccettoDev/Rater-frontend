import { FaPlay, FaStar } from "react-icons/fa";
import { CardContent, CardImage, CardInfo, CardMovie, CardOverlay, CardOverview, CardSubInfo, CardTitle, CardTrailer } from "./emphasis-movie-styles";

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

export function MovieEmphasis({ movie, imageBaseUrl }: MovieEmphasisProps) {
  return (
    <CardMovie key={movie.id}>
      {movie.poster_path && (
        <>
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
              <CardSubInfo>
                | {movie.popularity} popularity | {movie.release_date}
              </CardSubInfo>
            </CardInfo>
            <CardOverview>{movie.overview}</CardOverview>
            <CardTrailer>Assistir ao trailer <FaPlay size={15} /></CardTrailer>
          </CardContent>
        </>
      )}
    </CardMovie>
  );
}
