import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import axios from "axios";
import { useMovieCard } from "../context/MovieCardContext";
import { useState } from "react";
import { useLogin } from "../context/LoginContext";
import BasicModal from "./BasicModal";

const Search = () => {
  const { currentUser } = useLogin();
  const { setMovieCard } = useMovieCard();
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getSearchMovie = async () => {
    const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`;
    const {
      data: { results },
    } = await axios(url);
    currentUser && setMovieCard(results);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "4rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "@media(max-width: 400px)": {
          padding: "0 .5rem",
        },
      }}
    >
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
        color="secondary"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <Button
        variant="contained"
        color="secondary"
        sx={{ marginLeft: "1rem" }}
        onClick={() => {
          getSearchMovie();
          setSearch("");
          !currentUser && handleOpen();
        }}
      >
        Search
      </Button>
      <BasicModal
        handleOpen={handleOpen}
        handleClose={handleClose}
        open={open}
        setOpen={setOpen}
      />
    </Box>
  );
};

export default Search;
