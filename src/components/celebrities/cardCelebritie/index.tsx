import { CardContent, CardImage, CardMovie, CardOverlay, CardTitle } from "./card-celebritie.styles";

interface Celebrity {
  id: number;
  name: string;
  profile_path: string;
  popularity: number;
}

interface CardCelebritiesProps {
  celebrity: Celebrity;
  imageBaseUrl: string;
}

export function CardCelebrities({ celebrity, imageBaseUrl }: CardCelebritiesProps) {
  return (
    <CardMovie key={celebrity.id}>
      {celebrity.profile_path && (
        <>
          <CardImage
            src={`${imageBaseUrl}${celebrity.profile_path}`}
            alt={celebrity.name}
          />
          <CardOverlay />
          <CardContent>
            <CardTitle>{celebrity.name}</CardTitle>
          </CardContent>
        </>
      )}
    </CardMovie>
  );
}
