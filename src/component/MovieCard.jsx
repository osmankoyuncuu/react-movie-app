import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../context/LoginContext";
import BasicModal from "./BasicModal";
import { useState } from "react";

export default function MovieCard({ item }) {
  const { currentUser } = useLogin();
  const { title, vote_average, poster_path, overview } = item;
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [over, setOver] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Card>
      <CardActionArea
        sx={{
          position: "relative",
        }}
        onClick={() =>
          currentUser ? navigate(`/detail`, { state: item }) : handleOpen()
        }
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
      >
        <CardMedia
          component="img"
          image={`https://image.tmdb.org/t/p/w1280${poster_path}`}
          alt=""
          sx={{ minHeight: "530px" }}
        />

        {over && (
          <Typography
            sx={{
              position: "absolute",
              bottom: "0",
              color: "white",
              fontSize: "1.1rem",
              padding: ".5rem",
              backgroundColor: "rgba(60, 60, 60, 0.6)",
            }}
          >
            {overview.length > 600 ? `${overview.slice(0, 600)}...` : overview}
          </Typography>
        )}
      </CardActionArea>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "6rem",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            width: "80%",
            "@media(max-width: 400px)": {
              fontSize: "1.2rem",
            },
          }}
        >
          {title}
        </Typography>
        {currentUser && (
          <Box
            sx={{
              width: "40px",
              height: "40px",
              backgroundColor: `${
                Number(vote_average) < 7 ? "orange" : "green"
              }`,
              borderRadius: ".5rem",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              paddingTop: ".5rem;",
              color: "white",
            }}
          >
            {vote_average}
          </Box>
        )}
        <BasicModal
          handleOpen={handleOpen}
          handleClose={handleClose}
          open={open}
          setOpen={setOpen}
        />
      </CardActions>
    </Card>
  );
}
