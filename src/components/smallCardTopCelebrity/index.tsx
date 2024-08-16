import { CardContent, CardImage, CardMovie, CardOverlay, CardTitle } from "./small-card-top-celebrity-styles";
import { Link } from "react-router-dom";

interface Celebrity {
  id: number;
  name: string;
  profile_path: string | null;
  popularity: string;
}

interface CelebrityCardProps {
  celebrity: Celebrity;
  imageBaseUrl: string;
}

export function SmallCardTopCelebrity({ celebrity, imageBaseUrl }: CelebrityCardProps) {
  return (
    <CardMovie key={celebrity.id}>
      {celebrity.profile_path && (
        <>
          <Link to={`/celebrity/${celebrity.id}`}>
            <CardImage
              src={`${imageBaseUrl}${celebrity.profile_path}`}
              alt={celebrity.name}
            />
            <CardOverlay />
            <CardContent>
              <CardTitle>{celebrity.name}</CardTitle>
            </CardContent>
          </Link>
        </>
      )}
    </CardMovie>
  );
}
