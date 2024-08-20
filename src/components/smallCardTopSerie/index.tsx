import { FaStar } from "react-icons/fa";
import { CardContent, CardImage, CardInfo, CardMovie, CardOverlay, CardTitle } from "./small-card-top-serie-styles";
import { Link } from "react-router-dom";

interface Serie {
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  first_air_date: string;
  vote_average: string;
  popularity: string;
}

interface SmallCardTopSerieProps {
  serie: Serie;
  imageBaseUrl: string;
}

function truncateToOneDecimal(num: number) {
  return Math.trunc(num * 10) / 10;
}

export function SmallCardTopSerie({ serie, imageBaseUrl }: SmallCardTopSerieProps) {
  return (
    <CardMovie key={serie.id}>
      {serie.poster_path && (
        <>
          <Link to={`/serie/${serie.id}`}>
            <CardImage
              src={`${imageBaseUrl}${serie.poster_path}`}
              alt={serie.name}
            />
            <CardOverlay />
            <CardContent>
              <CardTitle>{serie.name}</CardTitle>
              <CardInfo>
                <FaStar size={20} color="#FFFF00" />
                {truncateToOneDecimal(Number(serie.vote_average))}
              </CardInfo>
            </CardContent>
          </Link>
        </>
      )}
    </CardMovie>
  );
}
