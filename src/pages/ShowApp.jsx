
import Header from "../components/ShHeader";
import ShowsList from "../components/ShowsList";
import { createContext, useEffect, useState } from "react";

let url = `${import.meta.env.VITE_API_BASE_URL}/discover/tv?sort_by=popularity.desc&api_key=${import.meta.env.VITE_API_KEY}`;

// step 1: Create Context
const ShowsContext = createContext();
export { ShowsContext };



function ShowApp() {
  const [shows, setShows] = useState([]);
  const [fetchUrl, setFetchUrl] = useState(url);
  const [search, setSearch] = useState("");

  useEffect(() => {
    function fetchShows() {
      fetch(fetchUrl)
        .then((response) => response.json())
        .then((data) => setShows(data.results))
        .catch((error) => console.error(error));
    }
    fetchShows();
  }, [fetchUrl]);

  const getShows = (showType) => {
    let url;

    switch (showType) {
      case "Comedy":
        url = `${
          import.meta.env.VITE_API_BASE_URL
        }/discover/tv?with_genres=35&sort_by=popularity.desc&api_key=${
          import.meta.env.VITE_API_KEY
        }`;
        break;
      case "Action":
        url = `${
          import.meta.env.VITE_API_BASE_URL
        }/discover/tv?with_genres=28&sort_by=popularity.desc&api_key=${
          import.meta.env.VITE_API_KEY
        }`;
        break;
      case "Drama":
        url = `${
          import.meta.env.VITE_API_BASE_URL
        }/discover/tv?with_genres=18&sort_by=popularity.desc&api_key=${
          import.meta.env.VITE_API_KEY
        }`;
        break;
      case "Sci-Fi":
        url = `${
          import.meta.env.VITE_API_BASE_URL
        }/discover/tv?with_genres=10765&sort_by=popularity.desc&api_key=${
          import.meta.env.VITE_API_KEY
        }`;
        break;
      default:
        url = `${
          import.meta.env.VITE_API_BASE_URL
        }/discover/tv?sort_by=popularity.desc&api_key=${
          import.meta.env.VITE_API_KEY
        }`;
        break;
    }

    setFetchUrl(url);
  };

  const searchShows = () => {
    const searchUrl = `${
      import.meta.env.VITE_API_BASE_URL
    }/search/tv?query=${search}&api_key=${import.meta.env.VITE_API_KEY}`;

    fetch(searchUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setShows(data.results);
        setSearch("");
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  };

  return (
    // step 2: Provide Context
    <ShowsContext.Provider
      value={{
        shows,
        getShows,
        search,
        searchShows,
        setSearch,
      }}
    >
      <>
        <Header
          getShows={getShows}
          search={search}
          searchShows={searchShows}
          setSearch={setSearch}
        />
        <ShowsList shows={shows} />
      </>
    </ShowsContext.Provider>
  );
}


export default ShowApp;