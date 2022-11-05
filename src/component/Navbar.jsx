import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useState } from "react";

function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            React Movie App
          </Typography>

          <Box>
            {isLogin ? (
              <>
                <Typography sx={{ display: "inline", margin: "1rem" }}>
                  Osman
                </Typography>
                <Button sx={{ my: 2, color: "white" }}>Login Out</Button>
              </>
            ) : (
              <>
                <Button sx={{ my: 2, color: "white" }}>Login</Button>
                <Button sx={{ my: 2, color: "white" }}>Register</Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
