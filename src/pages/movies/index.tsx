import { useEffect, useState } from "react";
import { Header } from "../../components/header";
import { Container, MoviesContainer, MovieCard, Overlay, Info } from "./movies-styles";
import { FaStar } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { Footer } from "../../components/footer";

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

function truncateToOneDecimal(num: number) {
  return Math.trunc(num * 10) / 10;
}

export function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [imageBaseUrl, setImageBaseUrl] = useState<string>("");

  // Utilizando useLocation para capturar a query string
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const queryParams = new URLSearchParams(location.search);
        const query = queryParams.get('query') || '';

        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
        );
        const data = await response.json();
        setMovies(data.results || []);

        // Defina a URL base da imagem
        setImageBaseUrl('https://image.tmdb.org/t/p/w500');
      } catch (error) {
        console.error('Failed to fetch movies:', error);
      }
    };

    fetchMovies();
  }, [location.search]);  // useEffect irá rodar toda vez que location.search mudar

  return (
    <Container>
      <Header />
      <MoviesContainer>
        {movies.map(movie => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <MovieCard>
              {movie.poster_path ? (
                <img
                  src={`${imageBaseUrl}${movie.poster_path}`}
                  alt={movie.title}
                />
              ) : (
                <div className="no-image">
                  <p>No Image Available</p>
                </div>
              )}
              <Overlay>
                <Info>
                  <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{movie.title}</p>
                  <div style={{ gap: '30px' }}>
                    <p>Ano: {new Date(movie.release_date).getFullYear()}</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <FaStar size={20} color="#FFFF00" />
                      <span style={{ marginLeft: '4px' }}>{truncateToOneDecimal(Number(movie.vote_average))}</span>
                    </div>
                  </div>
                </Info>
              </Overlay>
            </MovieCard>
          </Link>
        ))}
      </MoviesContainer>
      <Footer />
    </Container>
  );
}
