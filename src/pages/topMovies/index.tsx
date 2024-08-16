import { useEffect, useState } from "react";
import { Header } from "../../components/header";
import { Container, MoviesContainer, Title } from "./top-movies-styles";
import { SmallCardTopMovie } from "../../components/smallCardTopMovie";

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  vote_average: string;
  popularity: string;
}

const apiKey = import.meta.env.VITE_API_KEY;
const apiMovie = import.meta.env.VITE_API_MOVIE;
const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;

export function TopMovies() {
  const [topMovies, setTopMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const topMovieURL = `${apiMovie}popular?api_key=${apiKey}&language=pt-br`;
    const getTopMovies = async () => {
      try {
        const res = await fetch(topMovieURL);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setTopMovies(data.results.slice(0, 18)); // Pegue os 20 primeiros filmes
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    getTopMovies();
  }, []);

  return (
    <Container>
      <Header />
      <Title>| Top Filmes |</Title>
      <MoviesContainer>
        {topMovies.map(movie => (
          <SmallCardTopMovie
            key={movie.id}
            movie={{
              ...movie,
              poster_path: movie.poster_path || ''
            }}
            imageBaseUrl={imageBaseUrl}
          />
        ))}
      </MoviesContainer>
    </Container>
  );
}
