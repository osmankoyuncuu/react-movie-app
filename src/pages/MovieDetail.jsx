import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MovieDetail = () => {
  const { state: detail } = useLocation();
  const navigate = useNavigate();
  const { id, overview, release_date, vote_average, vote_count, poster_path } =
    detail;
  const [video, setVideo] = useState("");

  const getMovie = async () => {
    const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;
    const {
      data: { results },
    } = await axios(url);
    setVideo(results[1]?.key);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <Container sx={{ margin: "2rem auto" }}>
      <Box>
        <iframe
          width="1000"
          height="500"
          src={`https://www.youtube.com/embed/${video}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style={{ width: "100%", marginBottom: "1rem" }}
        ></iframe>
      </Box>
      <Box
        sx={{
          display: "flex",
          border: "1px solid gray",
          "@media(max-width: 600px)": {
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
          alt=""
          width="250px"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "1rem ",
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{
                "@media(max-width: 600px)": {
                  textAlign: "center",
                },
              }}
            >
              Overview
            </Typography>
            <Typography align="justify">{overview}</Typography>
          </Box>
          <Box>
            <Typography
              sx={{ borderBottom: "2px solid grey", marginTop: "1rem" }}
            >
              Release Date: {release_date}
            </Typography>
            <Typography
              sx={{ borderBottom: "2px solid grey", marginTop: ".5rem" }}
            >
              Rate: {vote_average}
            </Typography>
            <Typography
              sx={{ borderBottom: "2px solid grey", margin: "1rem 0" }}
            >
              Total Vote: {vote_count}
            </Typography>
            <Button variant="text" onClick={() => navigate(-1)}>
              Go Back
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default MovieDetail;
