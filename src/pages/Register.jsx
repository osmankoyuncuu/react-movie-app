import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GoogleIcon from "@mui/icons-material/Google";
import { useLogin } from "../context/LoginContext";
import { createUser, loginControl, loginWithGoogle } from "../auth/firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { login, setLogin, currentUser, setCurrentUser } = useLogin();
  const navigate = useNavigate();
  const { email, password } = login;

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(email, password);
    loginControl(setCurrentUser);
    setLogin({ email: "", password: "" });
  };
  useEffect(() => {
    currentUser && navigate(-1);
  }, [currentUser]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        backgroundColor: "info.light",
      }}
    >
      <form onSubmit={(e) => handleSubmit(e)}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "1rem",
            width: "40vw",
            height: "90vh",
            "@media(max-width: 1000px)": {
              width: "60vw",
            },
            "@media(max-width: 600px)": {
              width: "80vw",
            },
            "@media(max-width: 400px)": {
              width: "100vw",
              padding: "0 .5rem",
            },
          }}
        >
          <Typography
            variant="h2"
            mb={10}
            color="secondary"
            sx={{ fontWeight: "800" }}
          >
            Register
          </Typography>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            name="email"
            onChange={(e) =>
              setLogin({ ...login, [e.target.name]: e.target.value })
            }
            value={email}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            name="password"
            onChange={(e) =>
              setLogin({ ...login, [e.target.name]: e.target.value })
            }
            value={password}
          />
          <Button variant="contained" color="secondary" fullWidth type="submit">
            Create Reister
          </Button>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            startIcon={<GoogleIcon />}
            onClick={() => loginWithGoogle()}
          >
            Or Sing in with Google
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Register;
