import React, { StrictMode } from "react";

import { ToastContainer } from "react-toastify";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import Movies from "./Movies";
import Blog from "./Blog";
import ResponsiveNavBar from "../components/NavBar";

import Storage from "../utils/storage";

import "bootstrap/dist/css/bootstrap.min.css";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
/**
 *
 * It's the main container and contains <Movies/>.
 * we set dark-mode for this app
 */
function App() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  Storage.setItem("mode", theme.palette.mode);

  const toggleButton = (
    <IconButton
      sx={{ ml: 1 }}
      onClick={colorMode.toggleColorMode}
      color="inherit"
    >
      {theme.palette.mode === "dark" ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  );
  return (
    <StrictMode>
      <Box
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        <BrowserRouter>
          <ResponsiveNavBar
            toggleButton={toggleButton}
            themeName={theme.palette.mode}
          />

          <Switch>
            <Route path="/" exact component={Movies} />
            <Route path="/blog" component={Blog} />
          </Switch>
        </BrowserRouter>
        <ToastContainer
          theme={theme.palette.mode === "dark" ? "light" : "colored"}
          position="bottom-left"
        />
      </Box>
    </StrictMode>
  );
}

/**
 *
 * we can toggle color mode and also
 * we save the set theme in the local storage
 */
export default function ToggleColorMode() {
  let sMode = Storage.getItem("mode");
  const [mode, setMode] = React.useState(!sMode ? "light" : sMode);
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
