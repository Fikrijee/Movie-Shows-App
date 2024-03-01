import { useContext } from "react";
import { ShowsContext } from "../pages/ShowApp";

import {
  Card,
  Grid,
  CardOverflow,
  AspectRatio,
  CardContent,
  Divider,
  Typography,
} from "@mui/joy";

import defaultShowsImg from "/default-image.jpg";

export default function ShowsList() {
  let imgUrl = "https://image.tmdb.org/t/p/w500";

  const { shows } = useContext(ShowsContext);

  return (
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      {shows.length === 0 ? (
        <div className="no-data-msg">
          <p>No shows found!</p>
        </div>
      ) : (
        shows.map((item) => (
          <Grid xs={12} sm={6} md={4} lg={3} xl={2} key={item.id}>
            <Card
              color="success"
              orientation="vertical"
              size="md"
              variant="soft"
            >
              <CardOverflow>
                <AspectRatio ratio="1">
                  <img
                    src={
                      item.poster_path == null
                        ? defaultShowsImg
                        : imgUrl + item.poster_path
                    }
                    srcSet={
                      item.poster_path == null
                        ? defaultShowsImg
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
                <Typography level="title-md">{item.name}</Typography>
                <div className="overview">
                  {item.overview
                    ? item.overview
                    : "Show overview coming soon..."}
                </div>
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
                    {item.first_air_date}
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
