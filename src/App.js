import AppRouter from "./router/AppRouter";
import { createTheme, ThemeProvider } from "@mui/material";
import { teal, grey } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";
import { LoginProvider } from "./context/LoginContext";
import { MovieCardProvider } from "./context/MovieCardContext";

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: teal[500],
      },
      secondary: {
        main: teal[400],
      },
      info: {
        main: grey[300],
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <LoginProvider>
        <MovieCardProvider>
          <CssBaseline />
          <AppRouter />
        </MovieCardProvider>
      </LoginProvider>
    </ThemeProvider>
  );
};

export default App;
