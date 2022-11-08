import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GoogleIcon from "@mui/icons-material/Google";
import { useLogin } from "../context/LoginContext";
import {
  loginControl,
  loginUser,
  loginWithGoogle,
  passwordReset,
} from "../auth/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AlertSendMail from "../component/AlertSendMail";

const Login = () => {
  const {
    login,
    setLogin,
    currentUser,
    setCurrentUser,
    error,
    setError,
    alert,
    setAlert,
  } = useLogin();
  const { email, password } = login;
  const navigate = useNavigate();
  const [forgetPassword, setForgetPassword] = useState(false);
  console.log(alert);

  const handleSubmit = (e) => {
    e.preventDefault();
    forgetPassword
      ? passwordReset(email, setAlert)
      : loginUser(email, password, setError);
    loginControl(setCurrentUser);
  };

  const handleForgetPassword = () => {
    setForgetPassword(!forgetPassword);
  };

  useEffect(() => {
    currentUser && navigate(-1);
    setLogin({ email: "", password: "" });
  }, [currentUser]);
  useEffect(() => {
    setError(false);
  }, []);
  setTimeout(() => {
    setAlert(false);
  }, 5000);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        backgroundColor: "info.light",
        position: "relative",
      }}
    >
      {alert && <AlertSendMail />}
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
            Login
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
            error={error}
          />
          {!forgetPassword && (
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
              error={error}
              helperText={error && "You entered the wrong email or password"}
            />
          )}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              width: "100%",
            }}
          >
            <Button variant="text" onClick={handleForgetPassword}>
              Forgot Password?
            </Button>
          </Box>
          <Button variant="contained" color="secondary" fullWidth type="submit">
            {forgetPassword ? "Send reset Link" : "Login"}
          </Button>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            startIcon={<GoogleIcon />}
            onClick={() => loginWithGoogle()}
          >
            Sing in with Google
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Login;
