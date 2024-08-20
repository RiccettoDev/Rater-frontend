import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardImage, Container, ContainerCelebrity, Detail, Info, Profile, SubContainerCelebrity, TitleContainer, TitleContainer2, TitleContainer3 } from "./serie-detail-styles";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { FaStar } from "react-icons/fa";
import { ActorEmphasis } from "../../components/actorEmphasis";

const apiKey = import.meta.env.VITE_API_KEY;
const apiSeries = import.meta.env.VITE_API_SERIES;
const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;

interface Serie {
  id: number;
  name: string;
  poster_path: string;
  vote_average?: number;
  first_air_date?: string;
  overview?: string;
  cast: Array<{
    id: number;
    name: string;
    profile_path: string;
    character: string;
  }>; // Garanta que é um array não opcional
}

export function SerieDetail() {
  const { id } = useParams<{ id: string }>();
  const [serie, setSerie] = useState<Serie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSerieDetails = async (serieId: string) => {
    if (!serieId) {
      setError("Invalid serie ID");
      return;
    }
    try {
      const response = await fetch(`${apiSeries}tv/${serieId}?api_key=${apiKey}&language=pt-br`);
      if (!response.ok) {
        throw new Error(`Error fetching serie details: ${response.statusText}`);
      }
      const data = await response.json();

      // Fetch the cast details
      const castResponse = await fetch(`${apiSeries}tv/${serieId}/credits?api_key=${apiKey}&language=pt-br`);
      if (!castResponse.ok) {
        throw new Error(`Error fetching cast details: ${castResponse.statusText}`);
      }
      const castData = await castResponse.json();

      setSerie({
        ...data,
        cast: castData.cast || [], // Defina um valor padrão vazio
      });
    } catch (error) {
      setError(`Failed to fetch series details: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchSerieDetails(id);
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  if (!serie) return <p>No series found</p>;

  function truncateToOneDecimal(num: number) {
    return Math.trunc(num * 10) / 10;
  }

  return (
    <Container>
      <Header />
      <Profile>
        <CardImage
          src={`${imageBaseUrl}${serie.poster_path}`}
          alt={serie.name}
        />
        <Info>
          <Detail>
            <TitleContainer>
              | {serie.name} |
              <FaStar size={28} color="#FFFF00" />
              {truncateToOneDecimal(Number(serie.vote_average))}
            </TitleContainer>
            <TitleContainer3>{serie.first_air_date}</TitleContainer3>
            <TitleContainer2>{serie.overview}</TitleContainer2>
          </Detail>
        </Info>
      </Profile>
      <ContainerCelebrity>
        <h3>| Elenco principal</h3>
        <SubContainerCelebrity>
          <ActorEmphasis actors={serie.cast} imageBaseUrl={imageBaseUrl} />
        </SubContainerCelebrity>
      </ContainerCelebrity>
      <Footer />
    </Container>
  );
}
