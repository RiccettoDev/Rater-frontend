import { useEffect, useState } from "react";
import { Header } from "../../components/header";
import { Container, MoviesContainer, Title, SearchContainer, SearchInput, SearchButton } from "./top-series-styles";
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
const apiSeries = import.meta.env.VITE_API_SERIES; // https://api.themoviedb.org/3/
const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;

export function TopSeries() {
  const [topSeries, setTopSeries] = useState<Serie[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const topSeriesURL = `${apiSeries}tv/popular?api_key=${apiKey}&language=pt-br`;
    const getTopSeries = async () => {
      try {
        const res = await fetch(topSeriesURL);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        // Filtrar séries que têm poster_path
        const filteredSeries = data.results.filter((serie: Serie) => serie.poster_path);
        setTopSeries(filteredSeries.slice(0, 20)); // Pegue os 20 primeiros resultados filtrados
      } catch (error) {
        console.error("Error fetching series:", error);
      }
    };
    getTopSeries();
  }, []);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    setLoading(true);
    try {
      const response = await fetch(`${apiSeries}search/tv?api_key=${apiKey}&query=${encodeURIComponent(searchQuery)}&language=pt-br`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      // Filtrar séries que têm poster_path
      const filteredSeries = data.results.filter((serie: Serie) => serie.poster_path);
      setTopSeries(filteredSeries);
      console.log(filteredSeries); // Adicione o log para verificar as séries filtradas
    } catch (error) {
      console.error("Error fetching series:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Header />
      <Title>| Top Séries |</Title>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Pesquisar séries..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchButton onClick={handleSearch}>
          Pesquisar
        </SearchButton>
      </SearchContainer>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <MoviesContainer>
          {topSeries.map(serie => (
            <SmallCardTopSerie
              key={serie.id}
              serie={serie}
              imageBaseUrl={imageBaseUrl}
            />
          ))}
        </MoviesContainer>
      )}
      <Footer />
    </Container>
  );
}
