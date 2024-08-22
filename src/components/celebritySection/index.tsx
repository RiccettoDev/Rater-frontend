import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, ContainerOthers, Works, TitleContainer, ProfileImage, TitleContainer2, TitleContainer3, Button } from "./celebrity-section-styles";
import { CardsWorks } from "../cardWorks";
import { Footer } from "../footer";

const apiKey = import.meta.env.VITE_API_KEY;
const apiPerson = import.meta.env.VITE_API_PERSON;
const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;

interface Celebrity {
  id: number;
  name: string;
  profile_path: string;
  birthday: string;
  place_of_birth: string;
  biography: string;
}

interface Work {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
  release_date: string;
}

export function CelebritySection() {
  const { id } = useParams<{ id: string }>(); // Obtém o ID da celebridade da URL
  const [celebrity, setCelebrity] = useState<Celebrity | null>(null);
  const [works, setWorks] = useState<Work[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const getCelebrityDetails = async (url: string) => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      setCelebrity(data);
    } catch (error) {
      console.error('Error fetching celebrity details:', error);
    }
  };

  const getCelebrityWorks = async (url: string) => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      setWorks(data.cast);
    } catch (error) {
      console.error('Error fetching celebrity works:', error);
    }
  };

  useEffect(() => {
    if (id) {
      const celebrityDetailURL = `${apiPerson}${id}?api_key=${apiKey}&language=pt-br`;
      getCelebrityDetails(celebrityDetailURL);

      const celebrityWorksURL = `${apiPerson}${id}/movie_credits?api_key=${apiKey}&language=pt-br`;
      getCelebrityWorks(celebrityWorksURL);
    }
  }, [id]);

  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  if (!celebrity) {
    return <p>Loading...</p>;
  }

  const displayedWorks = works.slice(0, currentPage * itemsPerPage);

  return (
    <Container>
      <ContainerOthers>
        <ProfileImage>
          {celebrity.profile_path && (
            <img src={`${imageBaseUrl}${celebrity.profile_path}`} alt={celebrity.name} />
          )}
        </ProfileImage>
        <TitleContainer>
          {celebrity.name}
        </TitleContainer>
        <TitleContainer2>
          Nascido(a) em:
        </TitleContainer2>
        <TitleContainer3>
          {celebrity.birthday || 'Data de nascimento desconhecida'}
        </TitleContainer3>
        <TitleContainer2>
          Origem:
        </TitleContainer2>
        <TitleContainer3>
          {celebrity.place_of_birth || 'Local de nascimento desconhecido'}
        </TitleContainer3>
        <TitleContainer2>
          Sobre:
        </TitleContainer2>
        <TitleContainer3>
          {celebrity.biography || 'Biografia não disponível'}
        </TitleContainer3>
      </ContainerOthers>
      <Works>
        {displayedWorks.map(work => (
          <Link to={`/movie/${work.id}`}>
            <CardsWorks
              key={work.id}
              title={work.title}
              posterPath={work.poster_path}
              voteAverage={work.vote_average}
              releaseDate={work.release_date}
              imageBaseUrl={imageBaseUrl}
            />
          </Link>
        ))}
        {displayedWorks.length < works.length && (
          <Button onClick={handleLoadMore}>Ver mais</Button>
        )}
        <Footer />
      </Works>
    </Container>
  );
}
