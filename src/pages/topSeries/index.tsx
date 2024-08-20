import { useEffect, useState } from "react";
import { Header } from "../../components/header";
import { Container, MoviesContainer, Title } from "./top-series-styles";
import { Footer } from "../../components/footer";
import { SmallCardTopSerie } from "../../components/smallCardTopSerie";

interface Serie {
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  first_air_date: string;
  vote_average: string;
  popularity: string;
}

const apiKey = import.meta.env.VITE_API_KEY;
const apiSeries = import.meta.env.VITE_API_SERIES;
const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;

export function TopSeries() {
  const [topSeries, setTopSeries] = useState<Serie[]>([]);

  useEffect(() => {
    const topSeriesURL = `${apiSeries}popular?api_key=${apiKey}&language=pt-br`;
    const getTopSeries = async () => {
      try {
        const res = await fetch(topSeriesURL);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setTopSeries(data.results.slice(0, 20)); // Pegue os 20 primeiros filmes
      } catch (error) {
        console.error("Error fetching series:", error);
      }
    };
    getTopSeries();
  }, []);

  return (
    <Container>
      <Header />
      <Title>| Top Séries |</Title>
      <MoviesContainer>
        {topSeries.map(serie => (
          <SmallCardTopSerie
            key={serie.id}
            serie={{
              id: serie.id,
              name: serie.name,
              overview: serie.overview,
              poster_path: serie.poster_path || '',
              first_air_date: serie.first_air_date,
              vote_average: serie.vote_average,
              popularity: serie.popularity
            }}
            imageBaseUrl={imageBaseUrl}
          />
        ))}
      </MoviesContainer>
      <Footer />
    </Container>
  );
}
