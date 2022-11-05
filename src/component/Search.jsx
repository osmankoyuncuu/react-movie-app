import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import * as React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";

const Search = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "4rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
      />
      <Button variant="contained" color="secondary" sx={{ marginLeft: "1rem" }}>
        Search
      </Button>
    </Box>
  );
};

export default Search;
