import { Container } from './home-styles'
import { Header } from '../../components/header';
import { MovieSection } from '../../components/movie-section'

export function Home() {
  return (
    <Container>
      <Header />
      <MovieSection />
    </Container>
  );
}
