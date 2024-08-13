import { FaStar } from "react-icons/fa";
import { Container, Profile, Info, TitleContainer, TitleContainer2, TitleContainer3 } from "./card-works-styles";

interface CardsWorksProps {
  title: string;
  posterPath: string;
  voteAverage: number;
  releaseDate: string;
  imageBaseUrl: string;
}


export function CardsWorks({ title, posterPath, voteAverage, releaseDate, imageBaseUrl }: CardsWorksProps) {
  return (
    <Container>
      <Profile>
        <img src={`${imageBaseUrl}${posterPath}`} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }} />
      </Profile>
      <Info>
        <TitleContainer>{title}</TitleContainer>
        <TitleContainer2><FaStar size={20} color="#FFFF00" /> {voteAverage}</TitleContainer2>
        <TitleContainer3>{new Date(releaseDate).getFullYear()}</TitleContainer3>
      </Info>
    </Container>
  );
}
