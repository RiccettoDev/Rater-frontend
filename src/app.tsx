import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { CelebrityDetail } from "./pages/celebrityDetail";
import { MovieDetail } from "./pages/movieDetail";
import { Movies } from "./pages/movies";
import { TopMovies } from "./pages/topMovies";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/celebrity/:id" element={<CelebrityDetail />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/topmovies" element={<TopMovies />} />
      </Routes>
    </Router>
  );
}

