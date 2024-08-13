import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { CelebrityDetail } from "./pages/celebrityDetail";
import { MovieDetail } from "./pages/movieDetail";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/celebrity/:id" element={<CelebrityDetail />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

