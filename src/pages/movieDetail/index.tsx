import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Profile,
  CardImage,
  CardOverlay,
  CardTrailer,
  Vote,
  Info,
  Detail,
  TitleContainer,
  TitleContainer2,
  TitleContainer3,
  Detail2,
  Detail3,
  Detail4,
  Pip,
  TitleContainer4,
  TitleContainer5,
  ContainerCelebrity,
  SubContainerCelebrity,
  ContainerRecommended,
  SubContainer,
  ModalContainer,
  ModalContent,
  Button,
  TitleModal,
  Message,
  CloseButton,
  ContainerStars
} from "./movie-detail-styles";
import { Header } from "../../components/header";
import { FaPlay, FaRegStar, FaStar } from "react-icons/fa";
import { ActorEmphasis } from "../../components/actorEmphasis";
import { SmallCardMovie } from "../../components/smallCardMovie";
import { Footer } from "../../components/footer";

const apiKey = import.meta.env.VITE_API_KEY;
const apiMovie = import.meta.env.VITE_API_MOVIE;
const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;

interface CrewMember {
  id: number;
  name: string;
  job: string;
}

interface CastMember {
  id: number;
  name: string;
  character: string;
  profile_path: string;
}

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: string;
  popularity: string;
  director: CrewMember[];
  writers: CrewMember[];
  cast: CastMember[];
}

interface RecommendedMovie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: string;
  popularity: string;
}

export function MovieDetail() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [recommendedMovies, setRecommendedMovies] = useState<RecommendedMovie[]>([]);

  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado de login
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado do modal
  const [modalMessage, setModalMessage] = useState(""); // Mensagem do modal
  const [rating, setRating] = useState<number>(0);

  const handleStarClick = (index: number) => {
    setRating(index + 1); // Adiciona 1 porque o índice começa em 0
  };

  const handleRatingClick = () => {
    if (isLoggedIn) {
      setModalMessage("Sua avaliação");
    } else {
      setModalMessage("Faça o login para avaliar o filme.");
    }
    setIsModalOpen(true); // Abre o modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Fecha o modal
  };

  const getMovieDetails = async (url: string) => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();

      // Ajuste a extração dos dados conforme a estrutura correta
      const directors = data.credits?.crew?.filter((member: CrewMember) => member.job === "Director") || [];
      const writers = data.credits?.crew?.filter((member: CrewMember) => member.job === "Writer") || [];
      const cast = data.credits?.cast || [];

      const movieData: Movie = {
        id: data.id,
        title: data.title,
        overview: data.overview,
        poster_path: data.poster_path,
        release_date: data.release_date,
        vote_average: data.vote_average,
        popularity: data.popularity,
        director: directors,
        writers: writers,
        cast: cast,
      };

      setMovie(movieData);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  const getRecommendedMovies = async (url: string) => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();

      setRecommendedMovies(data.results || []);
    } catch (error) {
      console.error('Error fetching recommended movies:', error);
    }
  };

  useEffect(() => {
    if (id) {
      const movieDetailURL = `${apiMovie}${id}?api_key=${apiKey}&language=pt-br&append_to_response=credits`;
      const recommendedMoviesURL = `${apiMovie}${id}/recommendations?api_key=${apiKey}&language=pt-br`;

      getMovieDetails(movieDetailURL);
      getRecommendedMovies(recommendedMoviesURL);
    }
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  function truncateToOneDecimal(num: number) {
    return Math.trunc(num * 10) / 10;
  }

  return (
    <Container>
      <Header />
      <Profile>
        <CardImage
          src={`${imageBaseUrl}${movie.poster_path}`}
          alt={movie.title}
        />
        <CardOverlay />
        <CardTrailer>Assistir ao trailer <FaPlay size={15} /></CardTrailer>
        <Vote onClick={handleRatingClick}>Avaliar <FaStar size={15} /></Vote>
      </Profile>
      <Info>
        <Detail>
          <TitleContainer>
            | {movie.title} |
            <FaStar size={28} color="#FFFF00" />
            {truncateToOneDecimal(Number(movie.vote_average))}
          </TitleContainer>
          <TitleContainer3>{movie.release_date}</TitleContainer3>
          <TitleContainer2>{movie.overview}</TitleContainer2>
        </Detail>
        <Detail2>
          <Detail3>
            <Pip />
            <Pip />
            <Pip />
          </Detail3>
          <Detail4>
            <TitleContainer4>Direção:</TitleContainer4>
            <TitleContainer5>
              {movie.director?.map((director: CrewMember) => director.name).join(', ') || 'Não há registro'}
            </TitleContainer5>
            <TitleContainer4>Roteiristas:</TitleContainer4>
            <TitleContainer5>
              {movie.writers?.map((writer: CrewMember) => writer.name).join(', ') || 'Não há registro'}
            </TitleContainer5>
            <TitleContainer4>Artistas:</TitleContainer4>
            <TitleContainer5>
              {movie.cast?.slice(0, 3).map((actor: CastMember) => actor.name).join(', ') || 'Não há registro'}
            </TitleContainer5>
          </Detail4>
        </Detail2>
      </Info>
      <ContainerCelebrity>
        <h3>| Elenco principal</h3>
        <SubContainerCelebrity>
          <ActorEmphasis actors={movie.cast} imageBaseUrl={imageBaseUrl} />
        </SubContainerCelebrity>
      </ContainerCelebrity>
      <ContainerRecommended>
        <h3>| Recomendações semelhantes</h3>
        <SubContainer>
          {recommendedMovies.slice(0, 5).map(movie => (
            <SmallCardMovie key={movie.id} movie={movie} imageBaseUrl={imageBaseUrl} />
          ))}
        </SubContainer>
      </ContainerRecommended>
      {isModalOpen && (
        <ModalContainer>
          <ModalContent>
            <Message>{modalMessage}</Message>
            <TitleModal>{movie.title}</TitleModal>
            <ContainerStars>
              {Array.from({ length: 10 }).map((_, index) => (
                index < rating ? (
                  <FaStar
                    key={index}
                    size={30}
                    onClick={() => handleStarClick(index)}
                    color="#FFFF00"
                    style={{ cursor: "pointer" }}
                  />
                ) : (
                  <FaRegStar
                    key={index}
                    size={30}
                    onClick={() => handleStarClick(index)}
                    color="#858585"
                    style={{ cursor: "pointer" }}
                  />
                )
              ))}
            </ContainerStars>
            {isLoggedIn && (
              <Button onClick={closeModal}>Avaliar</Button>
            )}
            <CloseButton onClick={closeModal}>X</CloseButton>
          </ModalContent>
        </ModalContainer>
      )}
      <Footer />
    </Container>
  );
}
