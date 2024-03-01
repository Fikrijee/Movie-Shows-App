import Header from "../components/MHeader";
import MovieList from "../components/MovieList";
import { createContext, useEffect, useState } from "react";

let url = `${import.meta.env.VITE_API_BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${import.meta.env.VITE_API_KEY}`;

// step 1: Create Context
const MoviesContext = createContext();
export { MoviesContext };


function MovieApp() {
  const [movies, setMovies] = useState([]);
  const [fetchUrl, setFetchUrl] = useState(url);
  const [search, setSearch] = useState("");

  useEffect(() => {
    function fetchMovies() {
      fetch(fetchUrl)
        .then((response) => response.json())
        .then((data) => setMovies(data.results))
        .catch((error) => console.error(error));
    }
    fetchMovies();
  }, [fetchUrl]);

  const getMovies = (movieType) => {
    let url;

    switch (movieType) {
      case "Popular":
        url = `${
          import.meta.env.VITE_API_BASE_URL
        }/discover/movie?sort_by=popularity.desc&api_key=${
          import.meta.env.VITE_API_KEY
        }`;
        break;
      case "Drama":
        url = `${
          import.meta.env.VITE_API_BASE_URL
        }/discover/movie?with_genres=18&sort_by=popularity.desc&api_key=${
          import.meta.env.VITE_API_KEY
        }`;
        break;
      case "Kids":
        url = `${
          import.meta.env.VITE_API_BASE_URL
        }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${
          import.meta.env.VITE_API_KEY
        }`;
        break;
      case "Thriller":
        url = `${
          import.meta.env.VITE_API_BASE_URL
        }/discover/movie?with_genres=53&sort_by=popularity.desc&api_key=${
          import.meta.env.VITE_API_KEY
        }`;
        break;
      default:
        url = `${
          import.meta.env.VITE_API_BASE_URL
        }/discover/movie?sort_by=popularity.desc&api_key=${
          import.meta.env.VITE_API_KEY
        }`;
        break;
    }

    setFetchUrl(url);
  };

  const searchMovies = () => {
    url = `${
      import.meta.env.VITE_API_BASE_URL
    }/search/movie?query=${search}&api_key=${import.meta.env.VITE_API_KEY}`;

    setFetchUrl(url);
    setSearch("");
  };

  return (
    // step 2: Provide Context
    <MoviesContext.Provider
      value={{
        movies,
        getMovies,
        search,
        searchMovies,
        setSearch,
      }}
    >
      <>
        <Header
          getMovies={getMovies}
          search={search}
          searchMovies={searchMovies}
          setSearch={setSearch}
        />
        <MovieList movies={movies} />
      </>
    </MoviesContext.Provider>
  );
}



export default MovieApp;