import { useContext } from "react";
import { ShowsContext } from "../pages/ShowApp";
import { Grid, Input, Link } from "@mui/joy";

export default function Header() {
  let arr = ["Comedy", "Action", "Drama", "Sci-Fi"];

  const { getShows, search, setSearch, searchShows } = useContext(ShowsContext);

  return (
    <Grid className="header" container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid xs={1}>
        <a href="#" style={{fontSize:"17px"}}>Shows App</a>
      </Grid>
      
      <Grid xs={8}>
        <nav className="navigation">
          {arr.map((value, position) => (
            <Link
              
              color="success"
              variant="outlined" 
              size="medium"
              key={position}
              name={value}
              onClick={(e) => getShows(e.target.name)}
            >
              {value}
            </Link>
          ))}
        </nav>
      </Grid>
      <Grid xs={3}>
        <Input
          color="success" 
          size="sm"
          variant="soft"
          placeholder="Search a show..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button onClick={searchShows}>Search Show</button>
      </Grid>
    </Grid>
  );
}
