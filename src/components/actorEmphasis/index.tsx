import { ActorContainer, CardActor, CardImage, CardOverlay, CardContent, CardTitle } from "./actor-emphasis.styles";
import { Link } from "react-router-dom";

interface CastMember {
  id: number;
  name: string;
  profile_path: string;
}

interface ActorEmphasisProps {
  actors: CastMember[];
  imageBaseUrl: string;
}

export function ActorEmphasis({ actors, imageBaseUrl }: ActorEmphasisProps) {
  return (
    <ActorContainer>
      {actors.slice(0, 8).map((actor) => (
        <CardActor key={actor.id}>
          {actor.profile_path && (
            <>
              <Link to={`/celebrity/${actor.id}`}>
                <CardImage
                  src={`${imageBaseUrl}${actor.profile_path}`}
                  alt={actor.name}
                />
                <CardOverlay />
                <CardContent>
                  <CardTitle>{actor.name}</CardTitle>
                </CardContent>
              </Link>
            </>
          )}
        </CardActor>
      ))}
    </ActorContainer>
  );
}
