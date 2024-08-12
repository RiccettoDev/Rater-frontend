import { useEffect, useState } from "react";
import { Container, SubContainer } from "./news-styles";
import { OtherMovies } from "../otherMovies";

const apiKey = import.meta.env.VITE_API_KEY;
const apiMovie = import.meta.env.VITE_API_MOVIE;
const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: string;
  popularity: string;
}

export function News() {
  const [topMovies, setTopMovies] = useState<Movie[]>([]);

  const getTopMovies = async (url: string) => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      setTopMovies(data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    const topMovieURL = `${apiMovie}popular?api_key=${apiKey}&language=pt-br`;
    getTopMovies(topMovieURL);
  }, []);

  return (
    <Container>
      <h3>| Ultimos Lançamentos</h3>
      <SubContainer>
        {topMovies.slice(4, 8).map(movie => (
          <OtherMovies key={movie.id} movie={movie} imageBaseUrl={imageBaseUrl} />
        ))}
      </SubContainer>
    </Container>
  )
}