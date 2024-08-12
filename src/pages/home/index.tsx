import { Container } from './home-styles'
import { Header } from '../../components/header';
import { MovieSection } from '../../components/movieSection'
import { News } from '../../components/news';

export function Home() {
  return (
    <Container>
      <Header />
      <MovieSection />
      <News />
    </Container>
  );
}
