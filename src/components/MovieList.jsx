import { useContext } from "react";
import { MoviesContext } from "../pages/MovieApp";

import {
  Card,
  Grid,
  CardOverflow,
  AspectRatio,
  CardContent,
  Divider,
  Typography,
} from "@mui/joy";

import defaultMovieImg from "/default-image.jpg";

export default function MovieList() {
  let imgUrl = "https://image.tmdb.org/t/p/w500";

  const { movies } = useContext(MoviesContext);

  return (
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      {movies.length == 0 ? (
        <div className="no-data-msg">
          <p>No movies found!</p>
        </div>
      ) : (
        movies.map((item) => (
          <Grid xs={12} sm={6} md={4} lg={3} xl={2} key={item.id}>
            <Card
              color="warning"
              orientation="vertical"
              size="md"
              variant="soft"
            >
              <CardOverflow>
                <AspectRatio ratio="1">
                  <img
                    src={
                      item.poster_path == null
                        ? defaultMovieImg
                        : imgUrl + item.poster_path
                    }
                    srcSet={
                      item.poster_path == null
                        ? defaultMovieImg
                        : imgUrl +
                          item.poster_path +
                          "?auto=format&fit=crop&w=318&dpr=2 2x"
                    }
                    loading="lazy"
                    alt={item.title}
                  />
                </AspectRatio>
              </CardOverflow>
              <CardContent>
                <Typography level="title-md">{item.title}</Typography>
                {/* <Typography level="body-sm"> */}
                <div className="overview">
                  {item.overview
                    ? item.overview
                    : "Movie overview coming soon..."}
                </div>
                {/* </Typography> */}
              </CardContent>
              <CardOverflow
                variant="soft"
                sx={{ bgcolor: "background.level1" }}
              >
                <Divider inset="context" />
                <CardContent orientation="horizontal">
                  <Typography
                    level="body-xs"
                    fontWeight="md"
                    textColor="text.secondary"
                  >
                    Total votes: {item.vote_count}
                  </Typography>
                  <Divider orientation="vertical" />
                  <Typography
                    level="body-xs"
                    fontWeight="md"
                    textColor="text.secondary"
                  >
                    {item.release_date}
                  </Typography>
                  <Divider orientation="vertical" />
                  <Typography
                    level="body-xs"
                    fontWeight="md"
                    textColor="text.secondary"
                  >
                    {item.original_language.toUpperCase()}
                  </Typography>
                </CardContent>
              </CardOverflow>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
}
