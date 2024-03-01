import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Show from "./pages/ShowApp";
import Movie from "./pages/MovieApp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/tv" element={<Show />} />
      </Routes>

    </Router>
  );
}

export default App;
