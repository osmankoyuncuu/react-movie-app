import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { loginControl, loginOut } from "../auth/firebase";
import { useLogin } from "../context/LoginContext";
import Avatar from "@mui/material/Avatar";

function Navbar() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useLogin();
  loginControl(setCurrentUser);
  return (
    <AppBar position="static" sx={{ backgroundColor: "primary.dark" }}>
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            "@media(max-width: 550px)": {
              flexDirection: "column",
              marginTop: "1rem",
            },
          }}
        >
          <Typography
            variant="h5"
            onClick={() => navigate("/")}
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              color: "white",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            React Movie App
          </Typography>

          <Box>
            {currentUser ? (
              <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <Typography>
                  {currentUser.displayName
                    ? currentUser.displayName
                    : currentUser?.email.slice(
                        0,
                        currentUser.email.indexOf("@")
                      )}
                </Typography>
                <Avatar
                  alt=""
                  src={`${currentUser?.reloadUserInfo?.photoUrl}`}
                />
                <Button
                  sx={{ my: 2, color: "white", fontWeight: "700" }}
                  onClick={() => loginOut()}
                >
                  Login Out
                </Button>
              </Box>
            ) : (
              <>
                <Button
                  sx={{ my: 2, color: "white", fontWeight: "700" }}
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
                <Button
                  sx={{ my: 2, color: "white", fontWeight: "700" }}
                  onClick={() => navigate("/register")}
                >
                  Register
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
