import { useContext } from "react";
import { MoviesContext } from "../pages/MovieApp";
import { Grid, Input, Link } from "@mui/joy";

export default function Header() {
  let arr = ["Popular", "Kids", "Drama", "Thriller"];

  const { getMovies, search, setSearch, searchMovies } =
    useContext(MoviesContext);

  return (
    <Grid className="header" container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid xs={1}>
        <a href="#">Movie App</a>
      </Grid>
      <Grid xs={8}>
        <nav className="navigation">
          {arr.map((value, position) => (
            <Link
              color="warning"
              variant="solid"
              key={position}
              name={value}
              onClick={(e) => getMovies(e.target.name)}
            >
              {value}
            </Link>
          ))}
        </nav>
      </Grid>
      <Grid xs={3}>
        <Input
          color="warning"
          size="sm"
          variant="soft"
          placeholder="Search a movie..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button onClick={searchMovies}>Search Movie</button>
      </Grid>
    </Grid>
  );
}
