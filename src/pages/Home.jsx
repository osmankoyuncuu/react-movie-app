import Grid from "@mui/material/Grid";
import axios from "axios";
import { useEffect } from "react";
import MovieCard from "../component/MovieCard";
import Search from "../component/Search";
import { useMovieCard } from "../context/MovieCardContext";

const Home = () => {
  const { movieCard, setMovieCard } = useMovieCard();
  const getMovie = async () => {
    const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
    const {
      data: { results },
    } = await axios(url);
    setMovieCard(results);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <>
      <Search />
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignContent="center"
        sx={{ padding: "1rem 2rem" }}
      >
        {movieCard?.map((item) => {
          const { id, poster_path } = item;
          return (
            poster_path && (
              <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
                <MovieCard item={item} />
              </Grid>
            )
          );
        })}
      </Grid>
    </>
  );
};

export default Home;
