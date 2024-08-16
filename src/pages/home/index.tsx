import { Container } from './home-styles'
import { Header } from '../../components/header';
import { MovieSection } from '../../components/movieSection'
import { News } from '../../components/news';
import { MoviesWatched } from '../../components/moviesWatched';
import { Recommended } from '../../components/recommended';
import { Celebrities } from '../../components/celebrities';
import { Footer } from '../../components/footer';

export function Home() {
  return (
    <Container>
      <Header />
      <MovieSection />
      <News />
      <MoviesWatched />
      <Recommended />
      <Celebrities />
      <Footer />
    </Container>
  );
}
